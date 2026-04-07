/**
 * Simple in-memory rate limiter.
 * Resets when the serverless function cold-starts (acceptable for v1).
 * Upgrade to Vercel KV / Upstash Redis if abuse becomes an issue.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (bucket.count >= MAX_REQUESTS) {
    return false;
  }

  bucket.count += 1;
  return true;
}

// Periodic cleanup (best-effort, runs on each request)
let lastCleanup = Date.now();
function maybeCleanup() {
  const now = Date.now();
  if (now - lastCleanup < 5 * 60 * 1000) return;
  lastCleanup = now;
  for (const [key, bucket] of buckets.entries()) {
    if (bucket.resetAt < now) buckets.delete(key);
  }
}

export function checkAndCleanup(key: string): boolean {
  maybeCleanup();
  return checkRateLimit(key);
}
