import type { Metadata } from "next";
import Link from "next/link";
import { PRIVACY_POLICY_VERSION } from "@/lib/privacyVersion";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató — Szavazz Magadra",
  description:
    "A Szavazz Magadra (AM Studios Group Kft.) kalória- és mozgáskalkulátorának teljes adatkezelési tájékoztatója a GDPR és az Infotörvény alapján.",
  robots: { index: false, follow: false },
};

// Reusable section heading
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl md:text-2xl font-bold text-[var(--dark)] mb-4 mt-12 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold text-[var(--dark)] mt-6 mb-2">
      {children}
    </h3>
  );
}

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
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--mid)] mt-4">
          <span>Verzió: {PRIVACY_POLICY_VERSION}</span>
          <span>Hatályos: 2026. április 7-től</span>
          <span>Nyelv: magyar</span>
        </div>

        {/* TOC */}
        <nav className="mt-10 mb-8 p-5 bg-[var(--bg)] rounded-[var(--radius-xl)] border border-[var(--border)]">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--mid)] mb-3">
            Tartalomjegyzék
          </p>
          <ol className="text-sm text-[var(--mid)] space-y-1.5 list-decimal pl-5 marker:text-[var(--pink-dark)] marker:font-semibold">
            <li><a href="#bevezetes" className="hover:text-[var(--pink-dark)] underline">Bevezetés és a tájékoztató célja</a></li>
            <li><a href="#adatkezelo" className="hover:text-[var(--pink-dark)] underline">Az adatkezelő azonosítása és elérhetőségei</a></li>
            <li><a href="#fogalmak" className="hover:text-[var(--pink-dark)] underline">Fogalommeghatározások</a></li>
            <li><a href="#adatkor" className="hover:text-[var(--pink-dark)] underline">A kezelt adatok köre</a></li>
            <li><a href="#celok" className="hover:text-[var(--pink-dark)] underline">Az adatkezelés céljai</a></li>
            <li><a href="#jogalap" className="hover:text-[var(--pink-dark)] underline">Az adatkezelés jogalapja</a></li>
            <li><a href="#kulonleges" className="hover:text-[var(--pink-dark)] underline">Különleges (egészségügyi) adatok kezelése</a></li>
            <li><a href="#cimzettek" className="hover:text-[var(--pink-dark)] underline">Adatfeldolgozók és címzettek</a></li>
            <li><a href="#nemzetkozi" className="hover:text-[var(--pink-dark)] underline">Nemzetközi adattovábbítás (Schrems II)</a></li>
            <li><a href="#megorzes" className="hover:text-[var(--pink-dark)] underline">Megőrzési idő és törlés</a></li>
            <li><a href="#jogok" className="hover:text-[var(--pink-dark)] underline">Az érintett jogai</a></li>
            <li><a href="#hozzajarulas" className="hover:text-[var(--pink-dark)] underline">Hozzájárulás visszavonása</a></li>
            <li><a href="#automatizalt" className="hover:text-[var(--pink-dark)] underline">Automatizált döntéshozatal</a></li>
            <li><a href="#sutik" className="hover:text-[var(--pink-dark)] underline">Sütik és helyi tárolás</a></li>
            <li><a href="#biztonsag" className="hover:text-[var(--pink-dark)] underline">Adatbiztonsági intézkedések</a></li>
            <li><a href="#incidens" className="hover:text-[var(--pink-dark)] underline">Adatvédelmi incidens kezelése</a></li>
            <li><a href="#gyermekek" className="hover:text-[var(--pink-dark)] underline">Gyermekek adatai</a></li>
            <li><a href="#hatosag" className="hover:text-[var(--pink-dark)] underline">Felügyeleti hatóság</a></li>
            <li><a href="#modositas" className="hover:text-[var(--pink-dark)] underline">A tájékoztató módosítása</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="text-[var(--mid)] text-[15px] leading-[1.75] space-y-4">
          {/* 1. Bevezetés */}
          <H2 id="bevezetes">1. Bevezetés és a tájékoztató célja</H2>
          <p>
            Jelen adatkezelési tájékoztató (a továbbiakban: „Tájékoztató")
            azt írja le, hogy az AM Studios Group Korlátolt Felelősségű
            Társaság (a továbbiakban: „Adatkezelő" vagy „Szolgáltató")
            a https://www.szavazzmagadra.hu oldalon elérhető Szavazz
            Magadra szolgáltatás keretében hogyan kezeli a látogatók
            személyes adatait.
          </p>
          <p>
            Az adatkezelés a természetes személyeknek a személyes adatok
            kezelése tekintetében történő védelméről és az ilyen adatok
            szabad áramlásáról szóló, 2016/679 európai parlamenti és tanácsi
            rendelet (a továbbiakban: „GDPR"), valamint az információs
            önrendelkezési jogról és az információszabadságról szóló 2011.
            évi CXII. törvény (a továbbiakban: „Infotv.") rendelkezéseinek
            megfelelően történik.
          </p>
          <p>
            A Tájékoztató kifejezett célja, hogy minden érintett számára
            világosan, érthetően és átlátható módon ismertesse, milyen
            adatokat, milyen célból, milyen jogalapon, milyen időtartamig
            kezelünk, kik férnek hozzá ezen adatokhoz, és milyen jogok
            illetik meg az érintetteket.
          </p>

          {/* 2. Adatkezelő */}
          <H2 id="adatkezelo">2. Az adatkezelő azonosítása és elérhetőségei</H2>
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-xl)] p-6 not-italic">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-[var(--border)]">
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top w-1/3">Cégnév</td><td className="py-2">AM Studios Group Korlátolt Felelősségű Társaság</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Rövidített név</td><td className="py-2">AM Studios Group Kft.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Székhely</td><td className="py-2">3532 Miskolc, Miklós utca 17. 2. em. 26. ajtó</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Adószám</td><td className="py-2">33004312-1-05</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Cégjegyzékszám</td><td className="py-2">05 09 039717 (Miskolci Törvényszék Cégbírósága)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Alapítás éve</td><td className="py-2">2026</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Főtevékenység</td><td className="py-2">6210 - Számítógépes programozás</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Email</td><td className="py-2"><a href="mailto:info@amstudios.hu" className="text-[var(--pink-dark)] underline">info@amstudios.hu</a></td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-[var(--dark)] align-top">Adatkezelő képviselője</td><td className="py-2">Kecskeméti Ádám László</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Az Adatkezelő nem köteles adatvédelmi tisztviselőt (DPO)
            kijelölni, mivel a fő tevékenységünk nem áll különleges
            adatok nagyszámú érintett tekintetében történő, rendszeres és
            nagymértékű figyelemmel kísérésében [GDPR 37. cikk (1)
            bekezdés]. Az Adatkezelő évente felülvizsgálja ezt a
            helyzetet.
          </p>

          {/* 3. Fogalmak */}
          <H2 id="fogalmak">3. Fogalommeghatározások</H2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--dark)]">Személyes adat</strong> - azonosított vagy azonosítható természetes személyre vonatkozó bármely információ.</li>
            <li><strong className="text-[var(--dark)]">Különleges adat</strong> - a GDPR 9. cikkében felsorolt kategóriák egyike, többek között az egészségi állapotra vonatkozó adat. <strong>A kalkulátor által gyűjtött adatok többsége ebbe a körbe tartozik</strong> (lásd 7. szakasz).</li>
            <li><strong className="text-[var(--dark)]">Érintett</strong> - az a természetes személy, akinek a személyes adatait kezeljük (jelen esetben a kalkulátor használója).</li>
            <li><strong className="text-[var(--dark)]">Adatkezelő</strong> - az AM Studios Group Kft.</li>
            <li><strong className="text-[var(--dark)]">Adatfeldolgozó</strong> - olyan szervezet, amely az Adatkezelő nevében és utasítása szerint adatokat kezel (pl. Google, Twilio, Vercel - lásd 8. szakasz).</li>
            <li><strong className="text-[var(--dark)]">Hozzájárulás</strong> - az érintett akaratának önkéntes, konkrét, tájékoztatáson alapuló és egyértelmű kinyilvánítása.</li>
            <li><strong className="text-[var(--dark)]">Kifejezett hozzájárulás</strong> - a fentinél szigorúbb követelmény: a hozzájárulásnak konkrétan az érintett különleges adatok kezelésére kell vonatkoznia (GDPR 9. cikk (2) bek. a) pont).</li>
          </ul>

          {/* 4. Kezelt adatok */}
          <H2 id="adatkor">4. A kezelt adatok köre</H2>
          <p>
            Az alábbi táblázat az összes olyan adatot tartalmazza, amelyet a
            szolgáltatás működtetése során bármilyen formában érintünk vagy
            tárolunk. A táblázat a GDPR 30. cikke szerinti adatkezelési
            nyilvántartás kivonata.
          </p>

          <H3>4.1 A felhasználó által megadott adatok</H3>
          <div className="overflow-x-auto -mx-5 md:mx-0">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--bg)] border-y border-[var(--border)]">
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Adat</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Típus</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">9. cikk?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr><td className="py-2 px-3">Email cím</td><td className="py-2 px-3">String, max. 255 karakter</td><td className="py-2 px-3">Nem (személyes adat)</td></tr>
                <tr><td className="py-2 px-3">Nem</td><td className="py-2 px-3">nő / férfi</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Életkor</td><td className="py-2 px-3">16-100 év</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Magasság</td><td className="py-2 px-3">100-250 cm</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Testsúly</td><td className="py-2 px-3">30-300 kg</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Cél</td><td className="py-2 px-3">fogyás / tónusosodás / tömegelés</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Aktivitási szint</td><td className="py-2 px-3">4 előre meghatározott szint</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Tempó</td><td className="py-2 px-3">laza / közepes / intenzív</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
                <tr><td className="py-2 px-3">Célsúly (opcionális)</td><td className="py-2 px-3">30-300 kg vagy üres</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen</td></tr>
              </tbody>
            </table>
          </div>

          <H3>4.2 A rendszer által számított (származtatott) adatok</H3>
          <p>
            A megadott adatokból az algoritmusunk a következő származtatott
            értékeket számítja ki. Ezek mindegyike <strong>különleges
            (egészségügyi) adatnak</strong> minősül a GDPR 9. cikke
            értelmében, mivel az érintett egészségi állapotára
            vonatkozó következtetéseket vonnak le.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>BMR (alapanyagcsere-igény, kcal)</li>
            <li>TDEE (teljes napi energiafelhasználás, kcal)</li>
            <li>Napi célkalória (a tempó és cél alapján korrigálva)</li>
            <li>Napi makrótápanyag-eloszlás (fehérje / szénhidrát / zsír grammban)</li>
            <li>BMI (testtömegindex) szám</li>
            <li>BMI kategória (Alulsúlyos / Normál / Túlsúlyos / Elhízott) - <strong>klinikai osztályozás</strong></li>
            <li>Heti edzésszám és napi lépésszám-ajánlás</li>
            <li>Napi vízfogyasztási ajánlás (liter)</li>
            <li>Mozgásterv-leírások (szöveges javaslatok)</li>
            <li>Célterv: hány hét alatt érhető el a célsúly különböző tempóknál (opcionális)</li>
          </ul>

          <H3>4.3 Technikai metaadatok és hozzájárulási nyilvántartás</H3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-[var(--dark)]">IP cím (csonkolt)</strong> - az IPv4 cím utolsó oktettjét, illetve az IPv6 cím utolsó 80 bitjét automatikusan eltávolítjuk a tárolás előtt. Ez a GDPR 5. cikk (1) bekezdés c) pontja szerinti adattakarékossági alapelv érvényesítését szolgálja.</li>
            <li><strong className="text-[var(--dark)]">Böngésző azonosító (User-Agent)</strong> - a böngésződ által küldött szabványos fejléc.</li>
            <li><strong className="text-[var(--dark)]">Hozzájárulás időbélyege</strong> - a szervert kiszolgáló időbélyeg.</li>
            <li><strong className="text-[var(--dark)]">Hozzájárulás verziója</strong> - a Tájékoztató azon verziójának azonosítója, amelyhez a hozzájárulás kapcsolódik (jelenleg: <code className="text-xs bg-[var(--bg)] px-1.5 py-0.5 rounded">{PRIVACY_POLICY_VERSION}</code>).</li>
            <li><strong className="text-[var(--dark)]">Az egyes hozzájárulások állapota</strong> - egészségügyi adatok hozzájárulás (kötelező), adatvédelmi tájékoztató elfogadása (kötelező), statisztikai sütik (opcionális).</li>
          </ul>

          {/* 5. Célok */}
          <H2 id="celok">5. Az adatkezelés céljai</H2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--dark)]">Személyes étrend- és mozgásterv elkészítése</strong> - a megadott adatok alapján napi kalória-, makró- és mozgásajánlás kiszámítása.</li>
            <li><strong className="text-[var(--dark)]">A terv elektronikus kézbesítése</strong> - az eredmények emailben történő elküldése a megadott címre.</li>
            <li><strong className="text-[var(--dark)]">A hozzájárulás bizonyítása</strong> - a GDPR 7. cikk (1) bekezdés alapján az Adatkezelőt terheli annak bizonyítása, hogy az érintett a hozzájárulását megadta. Ehhez szükséges a hozzájárulás körülményeinek (időbélyeg, csonkolt IP, User-Agent, verzió) tárolása.</li>
            <li><strong className="text-[var(--dark)]">Visszaélések megelőzése</strong> - a túlzott terhelés és automatizált visszaélések kiszűrése a csonkolt IP cím rövid távú memóriában tartásával (1 órás csúszóablak, max. 5 kérés / IP-email páros).</li>
            <li><strong className="text-[var(--dark)]">Statisztikai látogatottságmérés (csak külön hozzájárulással)</strong> - a Firebase Analytics szolgáltatáson keresztül anonimizált statisztikai adatok gyűjtése a szolgáltatás fejlesztése érdekében. <strong>Ez kizárólag akkor történik, ha a süti banneren kifejezetten engedélyezted.</strong></li>
          </ul>
          <p className="bg-[var(--pink-light)] border border-[var(--pink)] rounded-[var(--radius-md)] p-4 mt-4 text-[var(--dark)]">
            <strong>Az adatokat kizárólag a fenti célokra használjuk.</strong>{" "}
            Marketing célú profilalkotást nem végzünk, az adatokat
            harmadik félnek kereskedelmi célból nem adjuk át, és semmilyen
            körülmények között nem értékesítjük.
          </p>

          {/* 6. Jogalap */}
          <H2 id="jogalap">6. Az adatkezelés jogalapja</H2>
          <p>
            Az adatkezelés jogalapja az érintett egyes adatkategóriák
            tekintetében a következő:
          </p>
          <div className="overflow-x-auto -mx-5 md:mx-0">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--bg)] border-y border-[var(--border)]">
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Adatkör</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Jogalap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="py-2 px-3">Egészségügyi adatok (4.1 és 4.2)</td>
                  <td className="py-2 px-3"><strong>GDPR 9. cikk (2) bek. a)</strong> - kifejezett hozzájárulás</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Email cím</td>
                  <td className="py-2 px-3"><strong>GDPR 6. cikk (1) bek. a)</strong> - hozzájárulás</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Hozzájárulási nyilvántartás (időbélyeg, verzió, hozzájárulás státusz)</td>
                  <td className="py-2 px-3"><strong>GDPR 6. cikk (1) bek. c)</strong> - jogi kötelezettség (a GDPR 7. cikk (1) szerinti bizonyítási kötelezettség)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Csonkolt IP cím + User-Agent (visszaélés-megelőzés)</td>
                  <td className="py-2 px-3"><strong>GDPR 6. cikk (1) bek. f)</strong> - jogos érdek</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Statisztikai sütik</td>
                  <td className="py-2 px-3"><strong>GDPR 6. cikk (1) bek. a)</strong> + Eht. § 155 (4) - hozzájárulás (külön opt-in)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Érdekmérlegelés a jogos érdek alapú adatkezeléshez</H3>
          <p>
            A csonkolt IP cím és a User-Agent mező tárolása az Adatkezelő
            jogos érdekét képezi a visszaélések megelőzése és a
            szolgáltatás integritásának biztosítása érdekében. Az érintett
            jogaival és érdekeivel szembeni hatást a következő intézkedések
            csökkentik: (1) az IP címet a tárolás előtt /24 (IPv4) vagy
            /48 (IPv6) szintre csonkoljuk, így az nem alkalmas egyetlen
            személy egyértelmű azonosítására; (2) a User-Agent mező nyilvános
            böngészőinformáció; (3) ezeket az adatokat soha nem továbbítjuk
            harmadik félnek és nem használjuk profilalkotásra. Az
            érdekmérlegelés eredménye: az Adatkezelő érdeke arányos és
            elsőbbséget élvez.
          </p>

          {/* 7. Különleges adatok */}
          <H2 id="kulonleges">7. Különleges (egészségügyi) adatok kezelése</H2>
          <p className="bg-[var(--pink-light)] border-l-4 border-[var(--pink-dark)] p-4 my-4">
            <strong className="text-[var(--dark)]">Fontos:</strong> a kalkulátor
            által kezelt adatok többsége - a nem, kor, testsúly, magasság, BMI,
            BMI-kategória és a származtatott egészség-ajánlások - a GDPR 9.
            cikke szerinti különleges személyes adatnak minősülnek. Ezek
            kezelésére a szigorúbb szabályok vonatkoznak.
          </p>
          <p>
            A 29-es Munkacsoport (jelenleg EDPB) 2015-ös állásfoglalása
            szerint a testtömeg vagy magasság önmagában nem feltétlenül
            egészségügyi adat, de ha azokat olyan számításhoz használják fel,
            amely <em>egészségi állapotra vonatkozó következtetést von le</em>
            (mint pl. BMI kategória), akkor az egész adatkör egészségügyi
            adattá válik. A mi szolgáltatásunk pontosan ilyen besorolást
            végez (Alulsúlyos / Normál / Túlsúlyos / Elhízott), így az
            adatkör egésze a 9. cikk hatálya alá tartozik.
          </p>
          <p>
            Ezért az adatkezelés jogalapja a <strong>GDPR 9. cikk (2)
            bekezdés a) pontja szerinti kifejezett hozzájárulás</strong>,
            amelyet az érintett a kalkulátor utolsó lépésénél, egy
            kifejezetten erre szolgáló jelölőnégyzettel adhat meg. A
            jelölőnégyzet előre nincs kipipálva, és a hozzájárulás
            elválasztható a többi opcionális hozzájárulástól (pl.
            statisztikai sütik).
          </p>
          <p>
            Az Adatkezelő semmilyen körülmények között nem nyújt orvosi
            tanácsot, diagnózist vagy terápiát. Az emailben kapott terv
            kizárólag <strong>tájékoztató jellegű</strong>; egészségügyi
            kérdésekben mindig fordulj képesített szakemberhez.
          </p>

          {/* 8. Címzettek */}
          <H2 id="cimzettek">8. Adatfeldolgozók és címzettek</H2>
          <p>
            Az adataidat kizárólag az alább felsorolt feldolgozók ismerik
            meg, és csak a szükséges mértékben. Mindhárom feldolgozó EU-s
            vagy az EU-USA Adatvédelmi Keretmegállapodás (DPF)
            tanúsítványával rendelkező szervezet.
          </p>

          <H3>Google Ireland Limited (Firebase Firestore + Analytics)</H3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Szerep: adatfeldolgozó (adattárolás, opcionális statisztika)</li>
            <li>Cím: Gordon House, Barrow Street, Dublin 4, Írország</li>
            <li>Adatkezelési helyszín: Európai Unió, &quot;eur3&quot; multi-régió (Belgium és Hollandia)</li>
            <li>Mit kap: a 4. szakaszban felsorolt összes adatot kivéve a sütiket (azokat csak akkor, ha a statisztikai sütiket engedélyezted)</li>
            <li>Szolgáltatás-feltételek: <a href="https://firebase.google.com/terms/data-processing-terms" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">Firebase Data Processing and Security Terms</a></li>
          </ul>

          <H3>Twilio Ireland Limited (SendGrid - email kézbesítés)</H3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Szerep: adatfeldolgozó (technikai email kézbesítés)</li>
            <li>Cím: 25-28 North Wall Quay, Dublin 1, Írország</li>
            <li>Mit kap: az email címedet és a kiküldendő HTML emailt (amely a kalkulátor eredményét tartalmazza)</li>
            <li>Adatkezelési kiegészítő: <a href="https://www.twilio.com/legal/data-protection-addendum" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">Twilio Data Protection Addendum</a></li>
            <li>Alfeldolgozói lista: <a href="https://www.twilio.com/legal/sub-processors" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">Twilio Sub-Processors</a></li>
          </ul>

          <H3>Vercel Inc. (alkalmazás-hosztolás)</H3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Szerep: adatfeldolgozó (kiszolgálási infrastruktúra)</li>
            <li>Cím: 440 N Barranca Ave #4133, Covina, CA 91723, Egyesült Államok</li>
            <li>Adatkezelési helyszín: Frankfurt (eu-central-1) régió a futtatáshoz; az Egyesült Államok a vezérlősíkhoz</li>
            <li>Mit kap: a HTTP kérések technikai metaadatait (IP cím, fejlécek). Ezek a Vercel hozzáférési naplójában maradhatnak ~30 napig.</li>
            <li>Adatkezelési kiegészítő: <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">Vercel Data Processing Addendum</a></li>
          </ul>

          <p className="mt-6">
            Az adataidat semmilyen más harmadik félnek nem továbbítjuk, és
            soha nem értékesítjük azokat.
          </p>

          {/* 9. Nemzetközi */}
          <H2 id="nemzetkozi">9. Nemzetközi adattovábbítás (Schrems II)</H2>
          <p>
            A fenti adatfeldolgozók anyavállalatai (Google LLC, Twilio Inc.,
            Vercel Inc.) az Egyesült Államokban székelnek, és bizonyos
            támogatási vagy felügyeleti tevékenységeik során az adatok
            harmadik országba (USA) történő továbbítása előfordulhat. A
            Schrems II ítélet (C-311/18) alapján az ilyen továbbítások
            csak megfelelő jogi eszköz mellett jogszerűek.
          </p>
          <H3>Az alkalmazott jogi eszközök</H3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--dark)]">Megfelelőségi határozat (DPF)</strong> - 2023. július 10. óta hatályban van az EU-USA Adatvédelmi Keretmegállapodásra vonatkozó megfelelőségi határozat. Mindhárom feldolgozó (Google, Twilio, Vercel) tanúsított az EU-USA Data Privacy Framework keretében. A státuszt itt ellenőrizheted: <a href="https://www.dataprivacyframework.gov/list" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">www.dataprivacyframework.gov/list</a></li>
            <li><strong className="text-[var(--dark)]">2021-es szabványos szerződéses záradékok (SCC-k)</strong> - amelyek az adatfeldolgozók által egyébként is alkalmazandóak (Decision (EU) 2021/914), és amelyeket a fent hivatkozott DPA dokumentumok tartalmaznak.</li>
            <li><strong className="text-[var(--dark)]">Kiegészítő technikai intézkedések</strong>:
              <ul className="list-disc pl-6 mt-1 space-y-0.5">
                <li>TLS 1.2+ titkosítás minden átvitel során</li>
                <li>AES-256 titkosítás a tároláskor (Google-managed)</li>
                <li>IP cím csonkolása (/24 vagy /48) minimalizálás céljából</li>
                <li>Az adatok elsődleges tárolási helye az EU (eur3 multi-régió)</li>
              </ul>
            </li>
          </ul>
          <p>
            A továbbítási hatásvizsgálatunk (Transfer Impact Assessment)
            belső dokumentumként rendelkezésre áll, és kérésre - megfelelő
            azonosítás után - bemutatható.
          </p>

          {/* 10. Megőrzés */}
          <H2 id="megorzes">10. Megőrzési idő és törlés</H2>
          <div className="overflow-x-auto -mx-5 md:mx-0">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--bg)] border-y border-[var(--border)]">
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Adat</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Megőrzési idő</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr><td className="py-2 px-3">Submissions adatok (Firestore)</td><td className="py-2 px-3"><strong>24 hónap</strong> a beküldéstől, ezt követően a Firestore TTL-szabály automatikusan törli</td></tr>
                <tr><td className="py-2 px-3">Email-küldési queue (Firestore mail/)</td><td className="py-2 px-3">Sikeres kézbesítés után <strong>24 órán belül</strong> automatikusan törlésre kerül</td></tr>
                <tr><td className="py-2 px-3">SendGrid kézbesítési naplók</td><td className="py-2 px-3">Twilio/SendGrid saját megőrzési szabályai szerint (általában 30 nap az aktivitási riport, 7 nap a teljes tartalom)</td></tr>
                <tr><td className="py-2 px-3">Vercel hozzáférési naplók</td><td className="py-2 px-3">Vercel szabványos retenciója szerint (~30 nap)</td></tr>
                <tr><td className="py-2 px-3">Visszaélés-megelőzési számláló (in-memory)</td><td className="py-2 px-3">1 órás csúszóablak, ezután automatikusan ürítődik</td></tr>
                <tr><td className="py-2 px-3">Firebase Analytics események</td><td className="py-2 px-3">14 hónap (a Google szolgáltatás beállítása)</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className="text-[var(--dark)]">A 24 hónapos megőrzési időt
            ténylegesen érvényesíti a Firestore TTL-szabály.</strong> Az
            adatkezelési időt nem csupán deklaráltuk, hanem műszaki
            megoldással biztosítjuk, hogy az adatok automatikusan
            törlődjenek a határidő lejártakor. A hozzájárulás visszavonása
            esetén ennél korábban, erre irányuló kérésre haladéktalanul
            töröljük.
          </p>

          {/* 11. Jogok */}
          <H2 id="jogok">11. Az érintett jogai</H2>
          <p>
            A GDPR alapján a következő jogok illetnek meg minden érintettet.
            Ezek gyakorlásához írj az{" "}
            <a href="mailto:info@amstudios.hu" className="text-[var(--pink-dark)] underline font-semibold">
              info@amstudios.hu
            </a>{" "}
            címre. Az Adatkezelő a megkeresésre <strong>30 napon belül</strong>{" "}
            válaszol, kivételes esetben (komplex kérés) ez 60 nappal
            meghosszabbítható, amiről az érintettet tájékoztatjuk.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--dark)]">Hozzáférés joga (GDPR 15. cikk)</strong> - tájékoztatást kérhetsz arról, hogy kezelünk-e rád vonatkozó adatot, és ha igen, milyen adatot.</li>
            <li><strong className="text-[var(--dark)]">Helyesbítés joga (GDPR 16. cikk)</strong> - pontatlan vagy hiányos adataid javítását kérheted.</li>
            <li><strong className="text-[var(--dark)]">Törlés joga (&quot;elfeledtetéshez való jog&quot;) (GDPR 17. cikk)</strong> - kérheted az adataid végleges törlését, ha azok kezelése már nem szükséges, vagy a hozzájárulásodat visszavontad.</li>
            <li><strong className="text-[var(--dark)]">Adatkezelés korlátozása (GDPR 18. cikk)</strong> - kérheted, hogy az adataid kezelését bizonyos esetekben korlátozzuk (pl. amíg a helyesbítési kérésedet feldolgozzuk).</li>
            <li><strong className="text-[var(--dark)]">Adathordozhatóság joga (GDPR 20. cikk)</strong> - kérheted az adataid géppel olvasható (JSON) formátumban való átadását, vagy közvetlen továbbítását egy másik adatkezelőhöz.</li>
            <li><strong className="text-[var(--dark)]">Tiltakozás joga (GDPR 21. cikk)</strong> - tiltakozhatsz a jogos érdek alapú adatkezelés ellen (pl. csonkolt IP cím tárolása).</li>
            <li><strong className="text-[var(--dark)]">Hozzájárulás visszavonása (GDPR 7. cikk (3))</strong> - bármikor, indoklás nélkül, díjmentesen visszavonhatod a hozzájárulásod. A visszavonás nem érinti a visszavonás előtti adatkezelés jogszerűségét.</li>
            <li><strong className="text-[var(--dark)]">Panasz joga (GDPR 77. cikk)</strong> - panasszal fordulhatsz a felügyeleti hatósághoz (NAIH - lásd 18. szakasz).</li>
          </ul>
          <p>
            Az Adatkezelő ezeket a jogokat <strong>díjmentesen</strong>{" "}
            biztosítja, kivéve nyilvánvalóan megalapozatlan vagy túlzó
            kérések esetén, amikor ésszerű díjat számíthat fel, vagy
            megtagadhatja a kérést a GDPR 12. cikk (5) bekezdése szerint.
          </p>

          {/* 12. Hozzájárulás visszavonása */}
          <H2 id="hozzajarulas">12. Hozzájárulás visszavonása</H2>
          <p>
            A GDPR alapelve, hogy a hozzájárulás visszavonásának{" "}
            <strong>ugyanolyan egyszerűnek kell lennie, mint a megadásának</strong>.
            A hozzájárulásod visszavonásához küldj egy emailt az{" "}
            <a href="mailto:info@amstudios.hu" className="text-[var(--pink-dark)] underline font-semibold">
              info@amstudios.hu
            </a>{" "}
            címre &quot;Hozzájárulás visszavonása&quot; tárggyal és add meg azt
            az email címet, amellyel a kalkulátort használtad. Az Adatkezelő
            ellenőrzi a kérés érvényességét, és <strong>5 munkanapon
            belül</strong> törli az összes hozzád köthető submission
            dokumentumot.
          </p>
          <p>
            A statisztikai sütik (Firebase Analytics) hozzájárulását bármikor
            módosíthatod a{" "}
            <Link href="/sutibeallitasok" className="text-[var(--pink-dark)] underline font-semibold">
              Sütibeállítások
            </Link>{" "}
            oldalon.
          </p>

          {/* 13. Automatizált döntéshozatal */}
          <H2 id="automatizalt">13. Automatizált döntéshozatal és profilalkotás</H2>
          <p>
            A GDPR 22. cikke szabályozza a kizárólag automatizált
            adatkezelésen alapuló döntéseket. A kalkulátor működése
            automatizált: az általad megadott adatokból egy algoritmus -
            emberi beavatkozás nélkül - kiszámítja a személyes terved.
          </p>
          <p>
            <strong className="text-[var(--dark)]">A kalkulátor eredménye
            kizárólag tájékoztató jellegű</strong>, és nem hoz olyan
            döntést, amely rád nézve joghatással járna vagy hasonlóan
            jelentős mértékben érintene. Az eredményt szabadon
            figyelmen kívül hagyhatod, megvitathatod orvossal vagy
            dietetikussal, és <strong>emberi felülvizsgálatot kérhetsz</strong>{" "}
            az{" "}
            <a href="mailto:info@amstudios.hu" className="text-[var(--pink-dark)] underline">
              info@amstudios.hu
            </a>{" "}
            címen, ahol az Adatkezelő képviselője személyesen áttekinti az
            eredményt és válaszol a kérdéseidre.
          </p>
          <p>
            <strong>Marketing célú profilalkotást</strong> az Adatkezelő nem
            végez. Az eredményeket nem használjuk fel arra, hogy
            személyre szabott reklámokat küldjünk vagy a viselkedésedet
            kövessük.
          </p>

          {/* 14. Sütik */}
          <H2 id="sutik">14. Sütik és helyi tárolás</H2>
          <p>
            Az Eht. § 155 (4) és az Európai Parlament és a Tanács 2002/58/EK
            irányelve alapján a nem feltétlenül szükséges sütik
            elhelyezéséhez <strong>előzetes, tájékozott hozzájárulás</strong>{" "}
            szükséges. Ezt az alapelvet teljes mértékben betartjuk: a
            statisztikai célú sütik <em>kizárólag</em> akkor kerülnek
            elhelyezésre az eszközödön, ha a süti banneren a &quot;Elfogadom&quot;
            gombra kattintottál.
          </p>
          <div className="overflow-x-auto -mx-5 md:mx-0">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--bg)] border-y border-[var(--border)]">
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Süti / tárolás</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Forrás</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Cél</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Élettartam</th>
                  <th className="text-left py-2 px-3 font-semibold text-[var(--dark)]">Hozzájárulás</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr><td className="py-2 px-3"><code>sm_analytics_consent</code></td><td className="py-2 px-3">Saját (localStorage)</td><td className="py-2 px-3">A süti-döntés tárolása</td><td className="py-2 px-3">Visszavonásig</td><td className="py-2 px-3">Nem szükséges (jogos érdek)</td></tr>
                <tr><td className="py-2 px-3"><code>_ga</code></td><td className="py-2 px-3">Firebase Analytics</td><td className="py-2 px-3">Egyedi látogató azonosítása</td><td className="py-2 px-3">2 év</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen, opcionális</td></tr>
                <tr><td className="py-2 px-3"><code>_ga_*</code></td><td className="py-2 px-3">Firebase Analytics</td><td className="py-2 px-3">Munkamenet állapot</td><td className="py-2 px-3">2 év</td><td className="py-2 px-3 font-bold text-[var(--pink-dark)]">Igen, opcionális</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            A süti-beállításaidat bármikor módosíthatod a{" "}
            <Link href="/sutibeallitasok" className="text-[var(--pink-dark)] underline font-semibold">
              Sütibeállítások
            </Link>{" "}
            oldalon.
          </p>

          {/* 15. Biztonság */}
          <H2 id="biztonsag">15. Adatbiztonsági intézkedések</H2>
          <p>
            Az Adatkezelő a GDPR 32. cikke alapján a kockázatnak megfelelő
            szintű technikai és szervezési intézkedéseket alkalmaz az
            adatok védelme érdekében:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-[var(--dark)]">Titkosítás átvitelben</strong> - minden HTTP kapcsolat TLS 1.2 vagy újabb verzióval titkosított</li>
            <li><strong className="text-[var(--dark)]">Titkosítás tároláskor</strong> - a Firestore alapértelmezetten AES-256 titkosítást alkalmaz</li>
            <li><strong className="text-[var(--dark)]">Hozzáférés-szabályozás</strong> - a Firestore biztonsági szabályai minden közvetlen kliens-oldali hozzáférést tiltanak; az adatok kizárólag az Admin SDK-n keresztül, szerver-oldalon érhetők el</li>
            <li><strong className="text-[var(--dark)]">A legkisebb jogosultság elve</strong> - a szolgáltatási fiók (service account) csak a feltétlenül szükséges minimális szerepkörrel rendelkezik (Cloud Datastore User)</li>
            <li><strong className="text-[var(--dark)]">Adatminimalizálás</strong> - az IP címet a tárolás előtt csonkoljuk; csak a feltétlenül szükséges adatokat kérjük be</li>
            <li><strong className="text-[var(--dark)]">Visszaélés-megelőzés</strong> - automatizált rate-limiting (5 kérés / IP-email páros / óra)</li>
            <li><strong className="text-[var(--dark)]">Naplózás</strong> - a kiszolgáló oldalon nem naplózunk személyes adatokat (különösen email címet)</li>
            <li><strong className="text-[var(--dark)]">Kulcsforgatás</strong> - a szolgáltatási fiók kulcsát évente cseréljük</li>
            <li><strong className="text-[var(--dark)]">Belső dokumentáció</strong> - adatkezelési nyilvántartás (GDPR 30. cikk), DPIA (35. cikk), továbbítási hatásvizsgálat (TIA), és incidens-kezelési eljárás belső dokumentumokban karbantartva</li>
          </ul>

          {/* 16. Incidens */}
          <H2 id="incidens">16. Adatvédelmi incidens kezelése</H2>
          <p>
            A GDPR 33. cikke alapján adatvédelmi incidens esetén az
            Adatkezelő vállalja, hogy <strong>72 órán belül</strong>{" "}
            bejelenti az incidenst a felügyeleti hatóságnak (NAIH) az{" "}
            <a href="https://naih.hu/adatvedelmi-incidens-bejelento-rendszer-tajekoztato" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">
              online bejelentő rendszerén
            </a>{" "}
            keresztül, amennyiben az incidens valószínűsíthetően kockázattal
            jár az érintettek jogaira és szabadságaira nézve.
          </p>
          <p>
            A 34. cikk alapján <strong>magas kockázatú incidens</strong>{" "}
            esetén az érintetteket is közvetlenül, indokolatlan késedelem
            nélkül értesítjük a megadott email címen, és tájékoztatást
            nyújtunk az incidens jellegéről, várható következményeiről és a
            megtett intézkedésekről.
          </p>

          {/* 17. Gyermekek */}
          <H2 id="gyermekek">17. Gyermekek adatai</H2>
          <p>
            Az Infotv. § 6 alapján Magyarországon a digitális szolgáltatások
            kontextusában a kifejezett hozzájárulás megadásához{" "}
            <strong>16. életév</strong> betöltése szükséges. Ennek
            megfelelően:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-[var(--dark)]">A szolgáltatás 16 év alatti személyek számára nem elérhető.</strong></li>
            <li>A kalkulátor űrlap technikailag elutasítja a 16-nál fiatalabb életkort.</li>
            <li>Ha tudomást szerzünk arról, hogy 16 évesnél fiatalabb személytől gyűjtöttünk adatokat, azokat haladéktalanul töröljük.</li>
            <li>Ha gyermek vagy és tévedésből megadtad az adataidat, kérlek értesítsd a szülődet vagy gondviselődet, és írj az <a href="mailto:info@amstudios.hu" className="text-[var(--pink-dark)] underline">info@amstudios.hu</a> címre, hogy adataidat töröljük.</li>
          </ul>

          {/* 18. NAIH */}
          <H2 id="hatosag">18. Felügyeleti hatóság</H2>
          <p>
            Ha úgy ítéled meg, hogy az adatkezelésünk megsérti a
            jogszabályokat vagy a jogaidat, panaszt tehetsz a magyar
            felügyeleti hatóságnál:
          </p>
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-xl)] p-6 my-4">
            <p className="font-bold text-[var(--dark)] mb-2">
              Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
            </p>
            <ul className="text-sm space-y-1">
              <li><strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.</li>
              <li><strong>Postacím:</strong> 1363 Budapest, Pf. 9.</li>
              <li><strong>Telefon:</strong> +36 (1) 391-1400</li>
              <li><strong>Fax:</strong> +36 (1) 391-1410</li>
              <li><strong>Email:</strong> <a href="mailto:ugyfelszolgalat@naih.hu" className="text-[var(--pink-dark)] underline">ugyfelszolgalat@naih.hu</a></li>
              <li><strong>Web:</strong> <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-[var(--pink-dark)] underline">www.naih.hu</a></li>
            </ul>
          </div>
          <p>
            A panasztétel előtt javasoljuk, hogy először lépj kapcsolatba
            velünk az{" "}
            <a href="mailto:info@amstudios.hu" className="text-[var(--pink-dark)] underline">
              info@amstudios.hu
            </a>{" "}
            címen - sok kérdést gyorsan és közvetlenül meg tudunk oldani.
          </p>

          {/* 19. Módosítás */}
          <H2 id="modositas">19. A tájékoztató módosítása</H2>
          <p>
            Az Adatkezelő fenntartja a jogot, hogy ezt a Tájékoztatót
            bármikor egyoldalúan módosítsa - például jogszabályi változás,
            új adatkezelési cél, vagy új adatfeldolgozó bevezetése esetén.
            A módosított verziót ezen az oldalon közzétesszük, és a
            verziószámot, valamint a hatálybalépés dátumát a tetején
            feltüntetjük.
          </p>
          <p>
            <strong>Lényeges változás esetén</strong> az érintetteket a
            megadott email címen keresztül is értesítjük, és lehetőséget
            biztosítunk a hozzájárulás újbóli megadására vagy
            visszavonására.
          </p>
          <p>
            Az Adatkezelő minden hozzájárulási nyilvántartásban rögzíti,
            hogy az érintett a Tájékoztató melyik verziójához adta a
            hozzájárulását. A jelen verzió azonosítója:{" "}
            <code className="text-xs bg-[var(--bg)] px-1.5 py-0.5 rounded">
              {PRIVACY_POLICY_VERSION}
            </code>
          </p>

          {/* Záró */}
          <div className="mt-16 pt-8 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--light)]">
              Ez a tájékoztató a GDPR (Regulation (EU) 2016/679), az
              Infotv. (2011. évi CXII. tv.), az Eht. (2003. évi C. tv.) és
              a vonatkozó EDPB iránymutatások alapján készült. Az
              Adatkezelő megfelelőségi vizsgálatát egy auditor a
              dokumentumban hivatkozott jogszabályi rendelkezések alapján
              ellenőrizheti.
            </p>
          </div>
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
