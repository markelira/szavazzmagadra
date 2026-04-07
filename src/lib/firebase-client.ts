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

const ANALYTICS_CONSENT_KEY = "sm_analytics_consent";

/**
 * Returns true if the user has explicitly granted analytics consent
 * via the cookie banner. Defaults to FALSE - we never load analytics
 * without an explicit opt-in (ePrivacy / Eht. § 155(4)).
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "granted";
  } catch {
    return false;
  }
}

/**
 * Records the user's analytics consent decision in localStorage.
 * Pass true for "granted", false for "denied".
 */
export function setAnalyticsConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      ANALYTICS_CONSENT_KEY,
      granted ? "granted" : "denied"
    );
  } catch {
    // ignore storage errors (private mode etc.)
  }
}

/**
 * Returns "granted" | "denied" | null if no decision has been made yet.
 */
export function getAnalyticsConsentState(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (v === "granted" || v === "denied") return v;
    return null;
  } catch {
    return null;
  }
}

/**
 * Lazy, browser-only, consent-gated Firebase Analytics event helper.
 * Safe to call from server components - it no-ops on the server.
 * NEVER initializes the Analytics SDK without an explicit consent grant.
 */
export async function track(
  event: string,
  params?: Record<string, unknown>
): Promise<void> {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
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
