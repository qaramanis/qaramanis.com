import { Redis } from "@upstash/redis";

interface CachedTrack {
  album: string;
  albumImageUrl: string;
  artist: string;
  title: string;
  songUrl: string;
  lastPlayedAt: string;
  isPlaying: boolean;
  trackId?: string;
}

interface TrackMetadata {
  trackId: string;
  isPlaying: boolean;
  lastUpdated: number; // Unix timestamp in ms
}

const CACHE_KEY = "spotify:last-played";
const METADATA_KEY = "spotify:metadata";

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function saveLastPlayed(data: CachedTrack) {
  try {
    const now = Date.now();

    // Use pipeline to batch Redis operations (counts as 1 request)
    await redis
      .pipeline()
      .set(CACHE_KEY, data)
      .set(METADATA_KEY, {
        trackId: data.trackId || "",
        isPlaying: data.isPlaying,
        lastUpdated: now,
      })
      .exec();
  } catch (error) {
    console.error("Error saving to Redis:", error);
  }
}

export async function getLastPlayed(): Promise<CachedTrack | null> {
  try {
    const data = await redis.get<CachedTrack>(CACHE_KEY);
    return data;
  } catch (error) {
    console.error("Error reading from Redis:", error);
    return null;
  }
}

export async function getMetadata(): Promise<TrackMetadata | null> {
  try {
    const data = await redis.get<TrackMetadata>(METADATA_KEY);
    return data;
  } catch (error) {
    console.error("Error reading metadata from Redis:", error);
    return null;
  }
}

export async function hasTrackChanged(
  newTrackId: string,
  newIsPlaying: boolean
): Promise<boolean> {
  try {
    const metadata = await getMetadata();

    if (!metadata) {
      return true; // First time, consider it changed
    }

    return (
      metadata.trackId !== newTrackId ||
      metadata.isPlaying !== newIsPlaying
    );
  } catch (error) {
    console.error("Error checking track change:", error);
    return true; // On error, assume changed to update
  }
}
