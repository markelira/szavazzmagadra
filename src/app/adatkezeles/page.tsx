import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató — Szavazz Magadra",
  description:
    "A Szavazz Magadra kalkulátor használatával kapcsolatos adatkezelési tájékoztató.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--mid)] hover:text-[var(--pink-dark)] transition-colors mb-10"
        >
          ← Vissza a főoldalra
        </Link>

        {/* Header */}
        <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--mid)] mb-4">
          Jogi információ
        </p>
        <h1 className="text-[clamp(28px,4vw,42px)] font-light text-[var(--dark)] tracking-tight leading-[1.1]">
          Adatkezelési{" "}
          <span className="font-bold">tájékoztató</span>
        </h1>
        <p className="text-sm text-[var(--mid)] mt-4">
          Hatályos: 2026. április 7. · Verzió 1.0
        </p>

        {/* Content */}
        <div className="prose prose-sm md:prose-base max-w-none mt-12 text-[var(--mid)] leading-[1.75] space-y-8">
          {/* Intro */}
          <section>
            <p className="text-[15px]">
              Ez a tájékoztató azt írja le, hogyan kezeli a Szavazz Magadra (a
              továbbiakban: „Szolgáltató") a kalória- és mozgáskalkulátort
              használó látogatók személyes adatait, az Európai Parlament és a
              Tanács (EU) 2016/679 rendelete (általános adatvédelmi rendelet,
              „GDPR") és a 2011. évi CXII. törvény („Infotörvény") alapján.
            </p>
          </section>

          {/* 1. Adatkezelő */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              1. Az adatkezelő
            </h2>
            <ul className="space-y-1 text-[15px]">
              <li>
                <strong>Név:</strong> [TODO: jogi név vagy magánszemély neve]
              </li>
              <li>
                <strong>Székhely / cím:</strong> [TODO: postai cím]
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@amstudios.hu"
                  className="text-[var(--pink-dark)] underline"
                >
                  info@amstudios.hu
                </a>
              </li>
              <li>
                <strong>Adatkezelő képviselője:</strong> [TODO: kapcsolattartó
                név]
              </li>
            </ul>
          </section>

          {/* 2. Kezelt adatok */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              2. Kezelt személyes adatok köre
            </h2>
            <p className="text-[15px] mb-3">
              A kalkulátor használatakor a következő adatokat kezeljük:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>
                <strong>Email cím</strong> — a tervet tartalmazó email
                kézbesítéséhez
              </li>
              <li>
                <strong>Nem, kor, magasság, testsúly</strong> — a kalóriaszükséglet
                és makrók kiszámításához
              </li>
              <li>
                <strong>Cél (fogyás / tónusosodás / tömegelés), aktivitási
                szint, választott tempó, opcionális célsúly</strong> — a
                személyre szabott terv elkészítéséhez
              </li>
              <li>
                <strong>A kiszámított eredmények</strong> (napi kalória, makrók,
                BMI, mozgásterv, vízfogyasztás, célterv) — későbbi visszanézés
                és szolgáltatásfejlesztés céljából
              </li>
              <li>
                <strong>A hozzájárulás időpontja, IP címe és böngésző
                azonosítója</strong> — a hozzájárulás bizonyítása érdekében (GDPR 7. cikk)
              </li>
            </ul>
          </section>

          {/* 3. Cél és jogalap */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              3. Az adatkezelés célja és jogalapja
            </h2>
            <p className="text-[15px]">
              <strong>Cél:</strong> a személyre szabott kalória- és mozgásterv
              elkészítése, az eredmények emailben történő megküldése, valamint a
              szolgáltatás minőségének és a jövőbeli közösségi platform
              fejlesztésének támogatása.
            </p>
            <p className="text-[15px] mt-3">
              <strong>Jogalap:</strong> az érintett önkéntes hozzájárulása a GDPR
              6. cikk (1) bekezdés a) pontja alapján. A hozzájárulást egy
              jelölőnégyzet bepipálásával adod meg az email cím megadásakor.
            </p>
          </section>

          {/* 4. Adatfeldolgozók */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              4. Adatfeldolgozók (címzettek)
            </h2>
            <p className="text-[15px] mb-3">
              Az adatok kezelésében a következő, általunk megbízott adatfeldolgozók
              vesznek részt:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[15px]">
              <li>
                <strong>Google Ireland Limited (Firebase / Cloud Firestore)</strong>{" "}
                — adattárolás. Adatközpont régiója: Európa (eur3 multi-régió).{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pink-dark)] underline"
                >
                  Adatvédelmi nyilatkozat
                </a>
              </li>
              <li>
                <strong>Twilio Inc. / SendGrid (Twilio Ireland Limited)</strong>{" "}
                — az email küldés technikai szolgáltatója.{" "}
                <a
                  href="https://www.twilio.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pink-dark)] underline"
                >
                  Adatvédelmi nyilatkozat
                </a>
              </li>
              <li>
                <strong>Vercel Inc.</strong> — a weboldal hosztolása. Az
                adatfeldolgozás során az IP címek átmenetileg naplózásra
                kerülhetnek.{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pink-dark)] underline"
                >
                  Adatvédelmi nyilatkozat
                </a>
              </li>
            </ul>
            <p className="text-[15px] mt-3">
              Az adatokat harmadik félnek kizárólag a fenti adatfeldolgozók részére
              továbbítjuk, és kizárólag a szolgáltatás biztosítása érdekében.
              Adataidat nem értékesítjük, nem adjuk át marketing célra harmadik
              félnek.
            </p>
          </section>

          {/* 5. Tárolási idő */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              5. Az adatok tárolási ideje
            </h2>
            <p className="text-[15px]">
              A kalkulátor adataidat a hozzájárulás visszavonásáig, de legfeljebb
              a megadásától számított <strong>24 hónapig</strong> tároljuk. A
              hozzájárulás visszavonása vagy törlési kérelem esetén az adatokat
              haladéktalanul töröljük a rendszereinkből.
            </p>
          </section>

          {/* 6. Jogaid */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              6. A jogaid
            </h2>
            <p className="text-[15px] mb-3">
              A GDPR alapján bármikor élhetsz az alábbi jogaiddal:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[15px]">
              <li>
                <strong>Hozzáférés joga</strong> — tájékoztatást kérhetsz arról,
                hogy milyen adataidat kezeljük
              </li>
              <li>
                <strong>Helyesbítés</strong> — pontatlan vagy hiányos adataid
                javítását kérheted
              </li>
              <li>
                <strong>Törlés („elfeledtetéshez való jog")</strong> — kérheted az
                adataid végleges törlését
              </li>
              <li>
                <strong>Hozzájárulás visszavonása</strong> — bármikor visszavonhatod
                a hozzájárulásodat, ami nem érinti a visszavonás előtti
                adatkezelés jogszerűségét
              </li>
              <li>
                <strong>Adathordozhatóság</strong> — kérheted az adataid géppel
                olvasható formátumban való átadását
              </li>
              <li>
                <strong>Tiltakozás</strong> — tiltakozhatsz az adataid bizonyos
                célú kezelése ellen
              </li>
            </ul>
            <p className="text-[15px] mt-4">
              A jogaid gyakorlásához írj az{" "}
              <a
                href="mailto:info@amstudios.hu"
                className="text-[var(--pink-dark)] underline"
              >
                info@amstudios.hu
              </a>{" "}
              címre. A megkeresésedre 30 napon belül válaszolunk.
            </p>
          </section>

          {/* 7. Panasz */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              7. Panasz benyújtása
            </h2>
            <p className="text-[15px]">
              Ha úgy érzed, hogy az adatkezelésünk sérti a jogaidat, panaszt
              tehetsz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):
            </p>
            <ul className="space-y-1 text-[15px] mt-3">
              <li>
                <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
              </li>
              <li>
                <strong>Postacím:</strong> 1363 Budapest, Pf. 9.
              </li>
              <li>
                <strong>Telefon:</strong> +36 1 391 1400
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ugyfelszolgalat@naih.hu"
                  className="text-[var(--pink-dark)] underline"
                >
                  ugyfelszolgalat@naih.hu
                </a>
              </li>
              <li>
                <strong>Web:</strong>{" "}
                <a
                  href="https://www.naih.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pink-dark)] underline"
                >
                  www.naih.hu
                </a>
              </li>
            </ul>
          </section>

          {/* 8. Sütik */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              8. Sütik (cookie-k) és analitika
            </h2>
            <p className="text-[15px]">
              A weboldal a Google Firebase Analytics szolgáltatást használja a
              látogatottság mérésére. Ez anonimizált statisztikai adatokat gyűjt
              (oldalmegtekintések száma, eszköztípus, hozzávetőleges földrajzi
              hely) a szolgáltatás fejlesztése érdekében. Az analitikai adatok
              önmagukban nem azonosítanak téged.
            </p>
          </section>

          {/* 9. Módosítások */}
          <section>
            <h2 className="text-xl font-bold text-[var(--dark)] mb-3">
              9. A tájékoztató módosítása
            </h2>
            <p className="text-[15px]">
              Fenntartjuk a jogot, hogy ezt a tájékoztatót bármikor módosítsuk.
              A módosított verziót az oldalon közzétesszük, és a hatálybalépés
              dátumát a tetején feltüntetjük. Lényeges változás esetén az
              érintetteket a megadott email címen keresztül is értesítjük.
            </p>
          </section>

          {/* Footer */}
          <section className="pt-8 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--light)]">
              Ez egy egyszerűsített tájékoztató, ami a GDPR és az Infotörvény
              alapvető követelményeit követi. Üzleti változás (pl. cég
              alapítása) esetén javasoljuk jogi szakember bevonását a tájékoztató
              véglegesítéséhez.
            </p>
          </section>
        </div>

        {/* Bottom back link */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--mid)] hover:text-[var(--pink-dark)] transition-colors"
          >
            ← Vissza a főoldalra
          </Link>
        </div>
      </div>
    </main>
  );
}
