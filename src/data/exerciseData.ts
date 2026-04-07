import type { ActivityLevel, Goal } from "@/lib/types";

export interface ExerciseRecommendation {
  exerciseCount: number;
  stepCount: string;
  description: string[];
}

const exerciseCountMap: Record<string, Record<Goal, number>> = {
  "1.2":   { fogyas: 4, tonusosodas: 4, tomegeles: 3 },
  "1.375": { fogyas: 5, tonusosodas: 5, tomegeles: 4 },
  "1.55":  { fogyas: 5, tonusosodas: 5, tomegeles: 4 },
  "1.725": { fogyas: 5, tonusosodas: 5, tomegeles: 4 },
};

const stepCountMap: Record<Goal, string> = {
  fogyas: "8 000",
  tonusosodas: "8 000",
  tomegeles: "6 000",
};

const mozgasMap: Record<string, string> = {
  "1.2_fogyas":
    "Heti 4 × 30 perces otthoni edzés az alap.||Javasolt edzéstípusok: (1) Teljes testes HIIT – a legtöbb kalóriát égeti. (2) Fenék és comb testsúllyal. (3) Has és core. (4) Nyújtás és mobilizálás.||Napi 8 000 lépés a fogyás célszáma – lift helyett lépcső, ebédszünetben séta.||Heti 3 pihenőnap szükséges – a fogyás az edzések KÖZÖTT történik.",
  "1.2_tonusosodas":
    "Heti 4 × 30 perces erősítő edzés – az izmok fejlesztése az elsődleges cél.||Javasolt edzéstípusok: (1) Ellenállásszalagos erősítő. (2) Testsúlyos erőgyakorlatok. (3) Fenék és comb célzottan. (4) Nyújtás edzés végén.||Napi 8 000 lépés segíti a zsírvesztést a tónusosodás mellett.||Elegendő fehérjebevitel kritikus – az izmok csak elegendő fehérjével tudnak fejlődni.",
  "1.2_tomegeles":
    "Heti 3 × 30 perces erősítő edzés elegendő.||Javasolt edzéstípusok: (1) Ellenállásszalagos erősítő. (2) Testsúlyos erőgyakorlatok. (3) Fenék és comb. (4) Nyújtás edzés végén.||Napi 6 000 lépés tömegelésnél helyes – ne égesse el a kalóriatöbbletedet.||Az étkezés az izomépítés alapja – a fehérjebevitel legalább annyira fontos mint az edzés.",
  "1.375_fogyas":
    "Heti 5 × 30 perces otthoni edzés – már van mozgásbázisod.||Javasolt edzéstípusok: (1) HIIT edzés. (2) Erősítő szalaggal/testsúllyal. (3) Fenék, comb és has. (4) Nyújtás és regeneráció.||Napi 8 000 lépés a fogyás célszáma – edzésnapokon is teljesítsd.||Aktív pihenőnapok: sétálj, nyújtózz, de ne terhelj.",
  "1.375_tonusosodas":
    "Heti 5 × 30 perces erősítő edzés – tónusosodásnál az erősítés a prioritás.||Javasolt edzéstípusok: (1) Ellenállásszalagos teljes testes erősítő. (2) Kézisúlyzós edzés. (3) Testsúlyos erőgyakorlatok. (4) Nyújtás minden edzés végén.||Napi 8 000 lépés – segíti a zsírvesztést anélkül hogy megakadályozná az izomépítést.||Progresszió a kulcs: minden héten kicsit nehezebb terhelés.",
  "1.375_tomegeles":
    "Heti 4 × 30 perces strukturált erősítő edzés.||Javasolt edzéstípusok: (1) Ellenállásszalagos teljes testes erősítő. (2) Kézisúlyzós edzés. (3) Testsúlyos erőgyakorlatok. (4) Nyújtás minden edzés végén.||Napi 6 000 lépés – ne adj extra kardió edzéseket az erősítők mellé.||A regeneráció legalább annyira fontos mint az edzés – az izom az edzések KÖZÖTT épül.",
  "1.55_fogyas":
    "Heti 5 × 30 perces otthoni edzés – jó mozgásbázissal rendelkezel.||Javasolt edzéstípusok: (1) HIIT vagy köredzés. (2) Erősítő szalaggal/súlyzóval. (3) Fenék és comb célzottan. (4) Nyújtás – 5 edzésnap mellett kötelező.||Napi 8 000 lépés a fogyás célszáma – az összes napi mozgás összege számít.||7–8 óra alvás kritikus: kevés alvás esetén a szervezet izmot bont zsír helyett.",
  "1.55_tonusosodas":
    "Heti 5 × 30 perces erősítő edzés – tónusosodásnál ez az ideális.||Javasolt edzéstípusok: (1) Ellenállásszalagos erősítő progresszívan. (2) Kézisúlyzós edzés. (3) Core és stabilizáció. (4) Nyújtás edzés végén.||Napi 8 000 lépés – elegendő aktív maradáshoz anélkül hogy megakadályozná az izomépítést.||Magas fehérjebevitel és jó alvás a tónusosodás két legfontosabb eszköze.",
  "1.55_tomegeles":
    "Heti 4 × 30 perces célzott erősítő edzés.||Javasolt edzéstípusok: (1) Ellenállásszalagos erősítő – progresszívan nehezítve. (2) Kézisúlyzós edzés. (3) Core és stabilizáció. (4) Nyújtás edzés végén.||Napi 6 000 lépés tömegelésnél optimális – a kalóriatöbblet az izomépítést szolgálja.||Progresszió a kulcs: minden héten kicsit nehezebb terhelés.",
  "1.725_fogyas":
    "Heti 5 × 30 perces edzés – NE növeld tovább, a regeneráció fontosabb.||Javasolt edzéstípusok: (1) Váltakozó HIIT és erősítő. (2) Erősítő szalaggal/súlyzóval. (3) Aktív regeneráció – legalább 2 nap hetente. (4) Core és tartásjavítás.||Napi 8 000 lépés a fogyás célszáma – pihenőnapokat kötelezően tarts.||Magas aktivitásnál a fehérjebevitel és a 7–8 óra alvás sokszorozza az eredményt.",
  "1.725_tonusosodas":
    "Heti 5 × 30 perces erősítő edzés – nagyon aktívnál a minőség fontosabb a mennyiségnél.||Javasolt edzéstípusok: (1) Erősítő szalaggal/súlyzóval progresszívan. (2) Haladó testsúlyos erőgyakorlatok. (3) Core és stabilizáció. (4) Nyújtás minden edzés után kötelezően.||Napi 8 000 lépés – tartsd ezen a szinten.||A regeneráció és az alvás a tónusosodás motorja.",
  "1.725_tomegeles":
    "Heti 4 × 30 perces erősítő edzés – nagyon aktívnál a kevesebb több.||Javasolt edzéstípusok: (1) Erősítő szalaggal/súlyzóval progresszívan. (2) Haladó testsúlyos erőgyakorlatok. (3) Core és stabilizáció. (4) Nyújtás minden edzés után kötelezően.||Napi 6 000 lépés tömegelésnél jó egyensúly.||A regeneráció és az alvás az izomépítés motorja.",
};

function getActivityKey(activityLevel: ActivityLevel): string {
  if (activityLevel <= 1.2) return "1.2";
  if (activityLevel <= 1.375) return "1.375";
  if (activityLevel <= 1.55) return "1.55";
  return "1.725";
}

export function getExerciseRecommendation(
  activityLevel: ActivityLevel,
  goal: Goal
): ExerciseRecommendation {
  const aktKey = getActivityKey(activityLevel);
  const mapKey = `${aktKey}_${goal}`;

  const exerciseCount =
    (exerciseCountMap[aktKey] || exerciseCountMap["1.55"])[goal] || 4;
  const stepCount = stepCountMap[goal] || "7 000";
  const descriptionText =
    mozgasMap[mapKey] || mozgasMap["1.55_fogyas"];
  const description = descriptionText.split("||").map((s) => s.trim());

  return { exerciseCount, stepCount, description };
}
