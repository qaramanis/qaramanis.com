import { getLastPlayed } from "@/lib/kv";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";

interface TrackData {
  album: string;
  albumImageUrl: string;
  artist: string;
  title: string;
  songUrl: string;
  lastPlayedAt: string;
  isPlaying: boolean;
  trackId?: string;
}

async function getCurrentTrack(
  allowRedisFallback: boolean = false
): Promise<TrackData | null> {
  try {
    // Read directly from Spotify API (no rate limit concerns)
    const response = await getNowPlaying();

    // Currently playing
    if (response.status === 200) {
      const song = await response.json();

      if (song.item !== null) {
        return {
          album: song.item.album.name,
          albumImageUrl: song.item.album.images[0].url,
          artist: song.item.artists
            .map((_artist: { name: string }) => _artist.name)
            .join(", "),
          title: song.item.name,
          songUrl: song.item.external_urls.spotify,
          lastPlayedAt: new Date().toISOString(),
          isPlaying: song.is_playing,
          trackId: song.item.id,
        };
      }
    }

    // Not currently playing - try recently played
    const recentResponse = await getRecentlyPlayed();

    if (recentResponse.status === 200) {
      const recentData = await recentResponse.json();
      if (recentData.items && recentData.items.length > 0) {
        const lastPlayed = recentData.items[0];

        return {
          album: lastPlayed.track.album.name,
          albumImageUrl: lastPlayed.track.album.images[0].url,
          artist: lastPlayed.track.artists
            .map((_artist: { name: string }) => _artist.name)
            .join(", "),
          title: lastPlayed.track.name,
          songUrl: lastPlayed.track.external_urls.spotify,
          lastPlayedAt: lastPlayed.played_at,
          isPlaying: false,
          trackId: lastPlayed.track.id,
        };
      }
    }

    // Only use Redis fallback if explicitly allowed (first load only)
    if (allowRedisFallback) {
      const cachedTrack = await getLastPlayed();
      if (cachedTrack) {
        return cachedTrack as TrackData;
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching from Spotify:", error);
    // On API error, use Redis fallback if allowed
    if (allowRedisFallback) {
      const cachedTrack = await getLastPlayed();
      if (cachedTrack) {
        return cachedTrack as TrackData;
      }
    }
    return null;
  }
}

export async function GET(request: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Send initial data - allow Redis fallback ONCE on first load
      const initialTrack = await getCurrentTrack(true);
      if (initialTrack) {
        const data = `data: ${JSON.stringify(initialTrack)}\n\n`;
        controller.enqueue(encoder.encode(data));
      }

      // Poll Spotify API for changes (no Redis fallback after initial load)
      const interval = setInterval(async () => {
        try {
          const currentTrack = await getCurrentTrack(false);

          if (currentTrack) {
            // Only send update if there's actual Spotify data
            const data = `data: ${JSON.stringify(currentTrack)}\n\n`;
            controller.enqueue(encoder.encode(data));
          }
          // If no Spotify data, don't send anything (client keeps cached data)
        } catch (error) {
          console.error("Error fetching track:", error);
        }
      }, 10000); // Poll Spotify every 10 seconds

      // Cleanup on disconnect
      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
