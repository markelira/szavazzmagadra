import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.szavazzmagadra.hu"),
  title: "Szavazz Magadra - Személyre szabott mozgásterv és közösség",
  description:
    "Egyedül nehéz. Együtt muszáj. Személyre szabott mozgásterv és egy közösség, ami végre megtart. Számold ki a napi kalória-, makró- és mozgáscélodat.",
  openGraph: {
    title: "Szavazz Magadra",
    description: "Egyedül nehéz. Együtt muszáj.",
    url: "https://www.szavazzmagadra.hu",
    siteName: "Szavazz Magadra",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${sora.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#kalkulator" className="skip-to-content">
          {"Ugr\u00E1s a kalkul\u00E1torhoz"}
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
