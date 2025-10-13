import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";
import { saveLastPlayed, hasTrackChanged } from "@/lib/kv";
import { NextResponse } from "next/server";

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

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    let trackData: TrackData | null = null;

    // Try to get currently playing track
    const response = await getNowPlaying();

    if (response.status === 200) {
      const song = await response.json();

      if (song.item !== null) {
        trackData = {
          album: song.item.album.name,
          albumImageUrl: song.item.album.images[0].url,
          artist: song.item.artists.map((_artist: { name: string }) => _artist.name).join(", "),
          title: song.item.name,
          songUrl: song.item.external_urls.spotify,
          lastPlayedAt: new Date().toISOString(),
          isPlaying: song.is_playing,
          trackId: song.item.id,
        };
      }
    }

    // If not currently playing, get recently played
    if (!trackData) {
      const recentResponse = await getRecentlyPlayed();

      if (recentResponse.status === 200) {
        const recentData = await recentResponse.json();
        if (recentData.items && recentData.items.length > 0) {
          const lastPlayed = recentData.items[0];

          trackData = {
            album: lastPlayed.track.album.name,
            albumImageUrl: lastPlayed.track.album.images[0].url,
            artist: lastPlayed.track.artists.map((_artist: { name: string }) => _artist.name).join(", "),
            title: lastPlayed.track.name,
            songUrl: lastPlayed.track.external_urls.spotify,
            lastPlayedAt: lastPlayed.played_at,
            isPlaying: false,
            trackId: lastPlayed.track.id,
          };
        }
      }
    }

    // Save to Redis only if track changed
    if (trackData) {
      const changed = await hasTrackChanged(
        trackData.trackId || "",
        trackData.isPlaying
      );

      if (changed) {
        await saveLastPlayed(trackData);
        console.log(
          `[Cron] Updated Spotify data: ${trackData.title} by ${trackData.artist} (isPlaying: ${trackData.isPlaying})`
        );
        return NextResponse.json({
          success: true,
          track: trackData.title,
          updated: true,
        });
      } else {
        console.log(`[Cron] No change detected, skipping update`);
        return NextResponse.json({
          success: true,
          message: "No change detected",
          updated: false,
        });
      }
    }

    console.log("[Cron] No Spotify data available");
    return NextResponse.json({ success: true, message: "No data available" });
  } catch (error) {
    console.error("[Cron] Error updating Spotify data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
