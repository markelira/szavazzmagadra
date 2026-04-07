import { initializeApp, getApps, cert, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

interface ServiceAccount {
  project_id: string;
  client_email: string;
  private_key: string;
}

function loadServiceAccount(): ServiceAccount {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!b64) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY env var is not set. " +
        "Run: base64 -i serviceAccountKey.json | tr -d '\\n' and paste into .env.local"
    );
  }
  try {
    return JSON.parse(Buffer.from(b64, "base64").toString("utf-8"));
  } catch {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not valid base64-encoded JSON");
  }
}

const app: App =
  getApps()[0] ??
  (() => {
    const sa = loadServiceAccount();
    return initializeApp({
      credential: cert({
        projectId: sa.project_id,
        clientEmail: sa.client_email,
        privateKey: sa.private_key,
      }),
      projectId: sa.project_id,
    });
  })();

export const adminDb: Firestore = getFirestore(app);
