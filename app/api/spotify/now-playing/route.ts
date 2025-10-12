import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";
import { getLastPlayed } from "@/lib/kv";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getNowPlaying();

  // Currently playing - return without saving (SSE stream handles Redis writes)
  if (response.status === 200) {
    const song = await response.json();

    if (song.item !== null) {
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(", ");
      const album = song.item.album.name;
      const albumImageUrl = song.item.album.images[0].url;
      const songUrl = song.item.external_urls.spotify;

      return NextResponse.json({
        album,
        albumImageUrl,
        artist,
        title,
        songUrl,
        lastPlayedAt: new Date().toISOString(),
        isPlaying,
      });
    }
  }

  // Not currently playing - try recently played
  const recentResponse = await getRecentlyPlayed();

  if (recentResponse.status === 200) {
    const recentData = await recentResponse.json();
    if (recentData.items && recentData.items.length > 0) {
      const lastPlayed = recentData.items[0];

      return NextResponse.json({
        album: lastPlayed.track.album.name,
        albumImageUrl: lastPlayed.track.album.images[0].url,
        artist: lastPlayed.track.artists.map((_artist: { name: string }) => _artist.name).join(", "),
        title: lastPlayed.track.name,
        songUrl: lastPlayed.track.external_urls.spotify,
        lastPlayedAt: lastPlayed.played_at,
        isPlaying: false,
      });
    }
  }

  // No Spotify data - fallback to KV cache
  const cachedTrack = await getLastPlayed();

  if (cachedTrack) {
    return NextResponse.json({
      ...cachedTrack,
      isPlaying: false,
    });
  }

  // No data available at all
  return NextResponse.json({ isPlaying: false });
}
