import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";
import { saveLastPlayed, getLastPlayed } from "@/lib/kv";

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

let lastTrackId: string | null = null;
let lastIsPlaying: boolean | null = null;

async function getCurrentTrack(): Promise<TrackData | null> {
  const response = await getNowPlaying();

  // Currently playing - save and return
  if (response.status === 200) {
    const song = await response.json();

    if (song.item !== null) {
      const isPlaying = song.is_playing;
      const trackId = song.item.id;
      const title = song.item.name;
      const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(", ");
      const album = song.item.album.name;
      const albumImageUrl = song.item.album.images[0].url;
      const songUrl = song.item.external_urls.spotify;

      const trackData: TrackData = {
        album,
        albumImageUrl,
        artist,
        title,
        songUrl,
        lastPlayedAt: new Date().toISOString(),
        isPlaying,
        trackId,
      };

      // Only save to Redis if track changed or play state changed
      if (trackId !== lastTrackId || isPlaying !== lastIsPlaying) {
        await saveLastPlayed(trackData);
        lastTrackId = trackId;
        lastIsPlaying = isPlaying;
      }

      return trackData;
    }
  }

  // Not currently playing - try recently played
  const recentResponse = await getRecentlyPlayed();

  if (recentResponse.status === 200) {
    const recentData = await recentResponse.json();
    if (recentData.items && recentData.items.length > 0) {
      const lastPlayed = recentData.items[0];
      const trackId = lastPlayed.track.id;

      const trackData: TrackData = {
        album: lastPlayed.track.album.name,
        albumImageUrl: lastPlayed.track.album.images[0].url,
        artist: lastPlayed.track.artists.map((_artist: { name: string }) => _artist.name).join(", "),
        title: lastPlayed.track.name,
        songUrl: lastPlayed.track.external_urls.spotify,
        lastPlayedAt: lastPlayed.played_at,
        isPlaying: false,
        trackId,
      };

      // Only save to Redis if track changed or play state changed
      if (trackId !== lastTrackId || false !== lastIsPlaying) {
        await saveLastPlayed(trackData);
        lastTrackId = trackId;
        lastIsPlaying = false;
      }

      return trackData;
    }
  }

  // No Spotify data - fallback to KV cache
  const cachedTrack = await getLastPlayed();

  if (cachedTrack) {
    return {
      ...cachedTrack,
      isPlaying: false,
    };
  }

  return null;
}

export async function GET(request: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Send initial data
      const initialTrack = await getCurrentTrack();
      if (initialTrack) {
        const data = `data: ${JSON.stringify(initialTrack)}\n\n`;
        controller.enqueue(encoder.encode(data));
      }

      // Poll for changes
      const interval = setInterval(async () => {
        try {
          const currentTrack = await getCurrentTrack();

          if (currentTrack) {
            // Send update to client
            const data = `data: ${JSON.stringify(currentTrack)}\n\n`;
            controller.enqueue(encoder.encode(data));
          }
        } catch (error) {
          console.error("Error fetching track:", error);
        }
      }, 5000); // Poll Spotify every 5 seconds

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
