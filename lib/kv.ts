import { Redis } from "@upstash/redis";

interface CachedTrack {
  album: string;
  albumImageUrl: string;
  artist: string;
  title: string;
  songUrl: string;
  lastPlayedAt: string;
}

const CACHE_KEY = "spotify:last-played";

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function saveLastPlayed(data: CachedTrack) {
  try {
    await redis.set(CACHE_KEY, data);
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
