"use client";

import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  isSupported,
  logEvent,
  type Analytics,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

const app: FirebaseApp = getApps()[0] ?? initializeApp(firebaseConfig);

let cached: Analytics | null = null;

/**
 * Lazy, browser-only, supported-only Firebase Analytics event helper.
 * Safe to call from server components - it no-ops on the server.
 */
export async function track(
  event: string,
  params?: Record<string, unknown>
): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    if (!cached) {
      if (!(await isSupported())) return;
      cached = getAnalytics(app);
    }
    logEvent(cached, event, params);
  } catch {
    // Analytics is best-effort - never crash the UI on a tracking error
  }
}
