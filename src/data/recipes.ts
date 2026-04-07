import { RecipeCollection } from "@/lib/types";

export const recipes: Record<string, RecipeCollection> = {
  fogyas: {
    reggeli: [
      { nev: 'Tojásos zab', refKcal: 370, osszetevok: [
        { nev: 'zabpehely', amount: 60, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'főtt tojás', amount: 2, unit: 'db', scale: false },
        { nev: 'méz', amount: 1, unit: 'tk.', scale: false },
        { nev: 'fahéj', amount: null, unit: null, scale: false }
      ]},
      { nev: 'Görög joghurtos müzli', refKcal: 340, osszetevok: [
        { nev: 'görög joghurt (0%)', amount: 150, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'granola', amount: 40, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'bogyós gyümölcs', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Turmix tál', refKcal: 390, osszetevok: [
        { nev: 'mandulatej', amount: 200, unit: 'ml', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'protein por', amount: 30, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'zabpehely', amount: 40, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'vegyes magvak', amount: 10, unit: 'g', scale: false }
      ]},
      { nev: 'Rántotta zöldséggel', refKcal: 350, osszetevok: [
        { nev: 'tojás', amount: 3, unit: 'db', scale: false },
        { nev: 'paprika', amount: 80, unit: 'g', scale: false },
        { nev: 'paradicsom', amount: 80, unit: 'g', scale: false },
        { nev: 'gomba', amount: 60, unit: 'g', scale: false },
        { nev: 'teljes kiőrlésű kenyér', amount: 1, unit: 'szelet', scale: false }
      ]},
      { nev: 'Túrós palacsinta', refKcal: 360, osszetevok: [
        { nev: 'sovány túró', amount: 100, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'tojás', amount: 2, unit: 'db', scale: false },
        { nev: 'zabpehely', amount: 30, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'gyümölcs', amount: 80, unit: 'g', scale: false }
      ]}
    ],
    tizorai: [
      { nev: 'Alma + mandula', refKcal: 150, osszetevok: [
        { nev: 'alma', amount: 1, unit: 'db', scale: false },
        { nev: 'mandula', amount: 20, unit: 'g', scale: false }
      ]},
      { nev: 'Fehérje turmix', refKcal: 130, osszetevok: [
        { nev: 'fehérjepor', amount: 30, unit: 'g', scale: false },
        { nev: 'víz', amount: 300, unit: 'ml', scale: false }
      ]},
      { nev: 'Ricotta zöldséggel', refKcal: 140, osszetevok: [
        { nev: 'ricotta', amount: 80, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'uborka', amount: 100, unit: 'g', scale: false },
        { nev: 'tengeri só', amount: null, unit: null, scale: false }
      ]},
      { nev: 'Főtt tojás + uborka', refKcal: 120, osszetevok: [
        { nev: 'főtt tojás', amount: 2, unit: 'db', scale: false },
        { nev: 'uborka', amount: 150, unit: 'g', scale: false }
      ]},
      { nev: 'Cottage cheese', refKcal: 145, osszetevok: [
        { nev: 'cottage cheese', amount: 150, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'lenmag', amount: 1, unit: 'tk.', scale: false },
        { nev: 'paprikaszelet', amount: 60, unit: 'g', scale: false }
      ]}
    ],
    ebed: [
      { nev: 'Csirkemell rizzsel', refKcal: 530, osszetevok: [
        { nev: 'grillezett csirkemell', amount: 150, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'barna rizs (száraz)', amount: 65, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'párolt brokkoli', amount: 150, unit: 'g', scale: false }
      ]},
      { nev: 'Lazac édesburgonyával', refKcal: 520, osszetevok: [
        { nev: 'lazac', amount: 140, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'édesburgonya', amount: 150, unit: 'g', scale: true, tipus: null },
        { nev: 'saláta', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Pulykás Buddha tál', refKcal: 510, osszetevok: [
        { nev: 'pulykamell', amount: 140, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'quinoa (száraz)', amount: 55, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'avokádó', amount: 50, unit: 'g', scale: false },
        { nev: 'vegyes zöldség', amount: 100, unit: 'g', scale: false },
        { nev: 'tahini', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Tojásos tészta', refKcal: 490, osszetevok: [
        { nev: 'tészta (száraz)', amount: 65, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'tojás', amount: 2, unit: 'db', scale: false },
        { nev: 'csirkemell', amount: 80, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'párolt zöldség', amount: 100, unit: 'g', scale: false }
      ]},
      { nev: 'Csicseriborsós leves', refKcal: 480, osszetevok: [
        { nev: 'csicseriborsó (főtt)', amount: 180, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'zöldség', amount: 150, unit: 'g', scale: false },
        { nev: 'teljes kiőrlésű kenyér', amount: 1, unit: 'szelet', scale: false }
      ]}
    ],
    uzsonna: [
      { nev: 'Alma + mandula', refKcal: 150, osszetevok: [
        { nev: 'alma', amount: 1, unit: 'db', scale: false },
        { nev: 'mandula', amount: 20, unit: 'g', scale: false }
      ]},
      { nev: 'Fehérje turmix', refKcal: 130, osszetevok: [
        { nev: 'fehérjepor', amount: 30, unit: 'g', scale: false },
        { nev: 'víz', amount: 300, unit: 'ml', scale: false }
      ]},
      { nev: 'Smoothie', refKcal: 110, osszetevok: [
        { nev: 'kókuszvíz', amount: 150, unit: 'ml', scale: false },
        { nev: 'fagyasztott gyümölcs', amount: 100, unit: 'g', scale: false },
        { nev: 'chia mag', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Edamame', refKcal: 120, osszetevok: [
        { nev: 'főtt edamame', amount: 100, unit: 'g', scale: false },
        { nev: 'tengeri só + citrom', amount: null, unit: null, scale: false }
      ]},
      { nev: 'Cottage cheese snack', refKcal: 135, osszetevok: [
        { nev: 'cottage cheese', amount: 130, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'paprikaszelet', amount: 80, unit: 'g', scale: false }
      ]}
    ],
    vacsora: [
      { nev: 'Lazac salátával', refKcal: 300, osszetevok: [
        { nev: 'sütőben sült lazac', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'rukola', amount: 60, unit: 'g', scale: false },
        { nev: 'koktélparadicsom', amount: 80, unit: 'g', scale: false },
        { nev: 'olívaolaj', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Csirkemell cukkinis', refKcal: 290, osszetevok: [
        { nev: 'csirkemell', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'cukkini', amount: 150, unit: 'g', scale: false },
        { nev: 'paradicsomszósz', amount: 80, unit: 'g', scale: false },
        { nev: 'bazsalikom', amount: null, unit: null, scale: false }
      ]},
      { nev: 'Tofu wok', refKcal: 310, osszetevok: [
        { nev: 'tofu', amount: 140, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'brokkoli', amount: 100, unit: 'g', scale: false },
        { nev: 'paprika', amount: 80, unit: 'g', scale: false },
        { nev: 'barna rizs (száraz)', amount: 40, unit: 'g', scale: true, tipus: 'gabona' }
      ]},
      { nev: 'Omlett', refKcal: 280, osszetevok: [
        { nev: 'tojás', amount: 3, unit: 'db', scale: false },
        { nev: 'spenót', amount: 80, unit: 'g', scale: false },
        { nev: 'feta sajt', amount: 30, unit: 'g', scale: false }
      ]},
      { nev: 'Sovány marhahús', refKcal: 320, osszetevok: [
        { nev: 'grillezett marhahús', amount: 120, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'spárga', amount: 100, unit: 'g', scale: false },
        { nev: 'quinoa (száraz)', amount: 40, unit: 'g', scale: true, tipus: 'gabona' }
      ]}
    ]
  },

  tomegeles: {
    reggeli: [
      { nev: 'Nagy fehérjés reggeli', refKcal: 580, osszetevok: [
        { nev: 'zabpehely', amount: 80, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'tojás', amount: 3, unit: 'db', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'mogyoróvaj', amount: 1, unit: 'ek.', scale: false },
        { nev: 'tej', amount: 150, unit: 'ml', scale: false }
      ]},
      { nev: 'Magas kalóriás turmix tál', refKcal: 610, osszetevok: [
        { nev: 'teljes tej', amount: 250, unit: 'ml', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'protein por', amount: 40, unit: 'g', scale: false },
        { nev: 'zabpehely', amount: 60, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'dió', amount: 20, unit: 'g', scale: false }
      ]},
      { nev: 'Tojásos bagel', refKcal: 570, osszetevok: [
        { nev: 'teljes kiőrlésű bagel', amount: 1, unit: 'db', scale: false },
        { nev: 'tojás', amount: 3, unit: 'db', scale: false },
        { nev: 'avokádó', amount: 80, unit: 'g', scale: false },
        { nev: 'füstölt lazac', amount: 60, unit: 'g', scale: true, tipus: 'feherje' }
      ]},
      { nev: 'Fehérje palacsinta', refKcal: 560, osszetevok: [
        { nev: 'zabpehely', amount: 80, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'tojás', amount: 3, unit: 'db', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'mogyoróvaj', amount: 1, unit: 'ek.', scale: false }
      ]},
      { nev: 'Görög joghurtos müzlitál', refKcal: 550, osszetevok: [
        { nev: 'görög joghurt', amount: 200, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'granola', amount: 60, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'méz', amount: 1, unit: 'ek.', scale: false }
      ]}
    ],
    tizorai: [
      { nev: 'Fehérje turmix banánnal', refKcal: 230, osszetevok: [
        { nev: 'fehérjepor', amount: 30, unit: 'g', scale: false },
        { nev: 'teljes tej', amount: 300, unit: 'ml', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'mogyoróvaj', amount: 1, unit: 'ek.', scale: false }
      ]},
      { nev: 'Kenyér avokádóval', refKcal: 240, osszetevok: [
        { nev: 'teljes kiőrlésű kenyér', amount: 2, unit: 'szelet', scale: false },
        { nev: 'avokádó', amount: 80, unit: 'g', scale: false },
        { nev: 'pulykamell', amount: 60, unit: 'g', scale: true, tipus: 'feherje' }
      ]},
      { nev: 'Trail mix', refKcal: 220, osszetevok: [
        { nev: 'vegyes magvak', amount: 35, unit: 'g', scale: false },
        { nev: 'datolya', amount: 2, unit: 'db', scale: false }
      ]},
      { nev: 'Ricecake kombó', refKcal: 210, osszetevok: [
        { nev: 'ricecake', amount: 3, unit: 'db', scale: false },
        { nev: 'ricotta', amount: 80, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'méz', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Cottage cheese kompot', refKcal: 230, osszetevok: [
        { nev: 'cottage cheese', amount: 180, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'granola', amount: 40, unit: 'g', scale: false },
        { nev: 'gyümölcs', amount: 80, unit: 'g', scale: false }
      ]}
    ],
    ebed: [
      { nev: 'Erőforrás tál', refKcal: 800, osszetevok: [
        { nev: 'csirkemell', amount: 180, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'barna rizs (száraz)', amount: 90, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'brokkoli', amount: 150, unit: 'g', scale: false },
        { nev: 'avokádó', amount: 60, unit: 'g', scale: false },
        { nev: 'olívaolaj', amount: 1, unit: 'ek.', scale: false }
      ]},
      { nev: 'Marhahúsos pasta', refKcal: 770, osszetevok: [
        { nev: 'tészta (száraz)', amount: 75, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'darált marhahús', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'paradicsomszósz', amount: 100, unit: 'g', scale: false },
        { nev: 'sajt', amount: 25, unit: 'g', scale: false }
      ]},
      { nev: 'Lazac édesburgonyával', refKcal: 790, osszetevok: [
        { nev: 'lazac', amount: 160, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'édesburgonya', amount: 180, unit: 'g', scale: true, tipus: null },
        { nev: 'spenót', amount: 80, unit: 'g', scale: false },
        { nev: 'olívaolaj', amount: 1, unit: 'ek.', scale: false }
      ]},
      { nev: 'Buddha tál', refKcal: 760, osszetevok: [
        { nev: 'csirkemell', amount: 150, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'quinoa (száraz)', amount: 75, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'avokádó', amount: 70, unit: 'g', scale: false },
        { nev: 'édesburgonya', amount: 100, unit: 'g', scale: false },
        { nev: 'tahini', amount: 1, unit: 'ek.', scale: false }
      ]},
      { nev: 'Tonhalas rizs', refKcal: 740, osszetevok: [
        { nev: 'tonhal (leszárítva)', amount: 140, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'rizs (száraz)', amount: 90, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'vegyes zöldség', amount: 120, unit: 'g', scale: false },
        { nev: 'tojás', amount: 1, unit: 'db', scale: false }
      ]}
    ],
    uzsonna: [
      { nev: 'Kenyér fehérjével', refKcal: 230, osszetevok: [
        { nev: 'teljes kiőrlésű kenyér', amount: 2, unit: 'szelet', scale: false },
        { nev: 'csirkemell', amount: 100, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'avokádó', amount: 50, unit: 'g', scale: false }
      ]},
      { nev: 'Fehérje sütemény', refKcal: 220, osszetevok: [
        { nev: 'zabpehely', amount: 50, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'tojás', amount: 2, unit: 'db', scale: false }
      ]},
      { nev: 'Görög joghurt magvakkal', refKcal: 240, osszetevok: [
        { nev: 'görög joghurt', amount: 180, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'vegyes mag', amount: 20, unit: 'g', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false }
      ]},
      { nev: 'Fehérje smoothie', refKcal: 250, osszetevok: [
        { nev: 'teljes tej', amount: 250, unit: 'ml', scale: false },
        { nev: 'fehérjepor', amount: 30, unit: 'g', scale: false },
        { nev: 'kesudióvaj', amount: 1, unit: 'ek.', scale: false }
      ]},
      { nev: 'Ricotta gyümölccsel', refKcal: 220, osszetevok: [
        { nev: 'ricotta', amount: 130, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'méz', amount: 1, unit: 'ek.', scale: false },
        { nev: 'granola', amount: 25, unit: 'g', scale: false },
        { nev: 'bogyós gyümölcs', amount: 60, unit: 'g', scale: false }
      ]}
    ],
    vacsora: [
      { nev: 'Marhahús zöldséggel', refKcal: 460, osszetevok: [
        { nev: 'grillezett marhahús', amount: 150, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'édesburgonya', amount: 130, unit: 'g', scale: true, tipus: null },
        { nev: 'brokkoli', amount: 120, unit: 'g', scale: false },
        { nev: 'olívaolaj', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Lazac quinoával', refKcal: 480, osszetevok: [
        { nev: 'lazac', amount: 160, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'quinoa (száraz)', amount: 60, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'spárga', amount: 100, unit: 'g', scale: false }
      ]},
      { nev: 'Csirkemell édesburgonyával', refKcal: 450, osszetevok: [
        { nev: 'csirkemell', amount: 150, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'édesburgonya', amount: 160, unit: 'g', scale: true, tipus: null },
        { nev: 'saláta', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Pulyka pasta', refKcal: 440, osszetevok: [
        { nev: 'tészta (száraz)', amount: 65, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'pulykamell', amount: 140, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'paradicsomszósz', amount: 100, unit: 'g', scale: false },
        { nev: 'brokkoli', amount: 100, unit: 'g', scale: false }
      ]},
      { nev: 'Tofu wok', refKcal: 460, osszetevok: [
        { nev: 'tofu', amount: 160, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'rizs (száraz)', amount: 70, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'paprika', amount: 80, unit: 'g', scale: false },
        { nev: 'brokkoli', amount: 100, unit: 'g', scale: false }
      ]}
    ]
  },

  szinten: {
    reggeli: [
      { nev: 'Klasszikus zab', refKcal: 450, osszetevok: [
        { nev: 'zabpehely', amount: 70, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'tej', amount: 200, unit: 'ml', scale: false },
        { nev: 'banán', amount: 1, unit: 'db', scale: false },
        { nev: 'méz', amount: 1, unit: 'tk.', scale: false },
        { nev: 'fahéj', amount: null, unit: null, scale: false }
      ]},
      { nev: 'Tojásos pirítós', refKcal: 430, osszetevok: [
        { nev: 'tojás', amount: 2, unit: 'db', scale: false },
        { nev: 'teljes kiőrlésű kenyér', amount: 2, unit: 'szelet', scale: false },
        { nev: 'avokádó', amount: 80, unit: 'g', scale: false },
        { nev: 'paradicsom', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Görög joghurtos gyümölcstál', refKcal: 420, osszetevok: [
        { nev: 'görög joghurt', amount: 180, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'szezonális gyümölcs', amount: 120, unit: 'g', scale: false },
        { nev: 'granola', amount: 30, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'méz', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Tojásos wrap', refKcal: 440, osszetevok: [
        { nev: 'tortilla', amount: 1, unit: 'db', scale: false },
        { nev: 'tojás', amount: 2, unit: 'db', scale: false },
        { nev: 'sajt', amount: 30, unit: 'g', scale: false },
        { nev: 'spenót', amount: 60, unit: 'g', scale: false },
        { nev: 'paradicsom', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Overnight oats', refKcal: 410, osszetevok: [
        { nev: 'zabpehely', amount: 70, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'kefir', amount: 200, unit: 'ml', scale: false },
        { nev: 'chia mag', amount: 1, unit: 'ek.', scale: false },
        { nev: 'gyümölcs', amount: 100, unit: 'g', scale: false }
      ]}
    ],
    tizorai: [
      { nev: 'Gyümölcs + sajt', refKcal: 180, osszetevok: [
        { nev: 'alma', amount: 1, unit: 'db', scale: false },
        { nev: 'cheddar sajt', amount: 30, unit: 'g', scale: false }
      ]},
      { nev: 'Joghurt müzlivel', refKcal: 190, osszetevok: [
        { nev: 'joghurt', amount: 150, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'müzli', amount: 30, unit: 'g', scale: false }
      ]},
      { nev: 'Dió + mazsola', refKcal: 170, osszetevok: [
        { nev: 'dió', amount: 25, unit: 'g', scale: false },
        { nev: 'mazsola', amount: 20, unit: 'g', scale: false }
      ]},
      { nev: 'Ricecake mogyoróvajjal', refKcal: 180, osszetevok: [
        { nev: 'ricecake', amount: 2, unit: 'db', scale: false },
        { nev: 'mogyoróvaj', amount: 1, unit: 'ek.', scale: false },
        { nev: 'banánszelet', amount: 50, unit: 'g', scale: false }
      ]},
      { nev: 'Friss gyümölcs + mandula', refKcal: 175, osszetevok: [
        { nev: 'körte', amount: 1, unit: 'db', scale: false },
        { nev: 'szőlő', amount: 80, unit: 'g', scale: false },
        { nev: 'mandula', amount: 15, unit: 'g', scale: false }
      ]}
    ],
    ebed: [
      { nev: 'Csirkemell rizzsel', refKcal: 630, osszetevok: [
        { nev: 'csirkemell', amount: 150, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'rizs (száraz)', amount: 70, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'párolt zöldség', amount: 150, unit: 'g', scale: false },
        { nev: 'olívaolaj', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Mediterrán tészta', refKcal: 620, osszetevok: [
        { nev: 'tészta (száraz)', amount: 70, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'csirkemell', amount: 120, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'paradicsomszósz', amount: 100, unit: 'g', scale: false },
        { nev: 'feta sajt', amount: 25, unit: 'g', scale: false }
      ]},
      { nev: 'Lazac salátával', refKcal: 600, osszetevok: [
        { nev: 'lazac', amount: 140, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'rukola', amount: 60, unit: 'g', scale: false },
        { nev: 'quinoa (száraz)', amount: 55, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'avokádó', amount: 60, unit: 'g', scale: false }
      ]},
      { nev: 'Lencsés leves', refKcal: 580, osszetevok: [
        { nev: 'vörös lencse (száraz)', amount: 75, unit: 'g', scale: true, tipus: 'gabona' },
        { nev: 'vegyes zöldség', amount: 150, unit: 'g', scale: false },
        { nev: 'teljes kiőrlésű kenyér', amount: 1, unit: 'szelet', scale: false },
        { nev: 'joghurt', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Pulykás wrap', refKcal: 590, osszetevok: [
        { nev: 'tortilla', amount: 1, unit: 'db', scale: false },
        { nev: 'pulykamell', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'avokádó', amount: 60, unit: 'g', scale: false },
        { nev: 'saláta + paradicsom', amount: 100, unit: 'g', scale: false }
      ]}
    ],
    uzsonna: [
      { nev: 'Görög joghurt mézzel', refKcal: 180, osszetevok: [
        { nev: 'görög joghurt', amount: 150, unit: 'g', scale: true, tipus: 'tejterm' },
        { nev: 'méz', amount: 1, unit: 'tk.', scale: false },
        { nev: 'dió', amount: 10, unit: 'g', scale: false }
      ]},
      { nev: 'Gyümölcs turmix', refKcal: 160, osszetevok: [
        { nev: 'kefir', amount: 150, unit: 'ml', scale: false },
        { nev: 'bogyós gyümölcs', amount: 100, unit: 'g', scale: false },
        { nev: 'chia mag', amount: 1, unit: 'tk.', scale: false }
      ]},
      { nev: 'Vegyes magvak', refKcal: 175, osszetevok: [
        { nev: 'vegyes mag', amount: 30, unit: 'g', scale: false }
      ]},
      { nev: 'Hummus zöldséggel', refKcal: 170, osszetevok: [
        { nev: 'hummus', amount: 60, unit: 'g', scale: false },
        { nev: 'sárgarépa + uborka + paprika', amount: 150, unit: 'g', scale: false }
      ]},
      { nev: 'Sajtos kekszek', refKcal: 165, osszetevok: [
        { nev: 'teljes kiőrlésű keksz', amount: 4, unit: 'db', scale: false },
        { nev: 'sovány túró', amount: 60, unit: 'g', scale: false },
        { nev: 'zöldfűszerek', amount: null, unit: null, scale: false }
      ]}
    ],
    vacsora: [
      { nev: 'Lazac zöldséggel', refKcal: 360, osszetevok: [
        { nev: 'lazac', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'párolt brokkoli', amount: 120, unit: 'g', scale: false },
        { nev: 'édesburgonya', amount: 110, unit: 'g', scale: true, tipus: null }
      ]},
      { nev: 'Csirkemell cukkinis', refKcal: 350, osszetevok: [
        { nev: 'csirkemell', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'cukkini', amount: 150, unit: 'g', scale: false },
        { nev: 'paradicsom', amount: 80, unit: 'g', scale: false },
        { nev: 'rizs (száraz)', amount: 35, unit: 'g', scale: true, tipus: 'gabona' }
      ]},
      { nev: 'Mediterrán omlett', refKcal: 340, osszetevok: [
        { nev: 'tojás', amount: 3, unit: 'db', scale: false },
        { nev: 'feta sajt', amount: 30, unit: 'g', scale: false },
        { nev: 'spenót', amount: 80, unit: 'g', scale: false },
        { nev: 'koktélparadicsom', amount: 80, unit: 'g', scale: false }
      ]},
      { nev: 'Tofu zöldséges wok', refKcal: 360, osszetevok: [
        { nev: 'tofu', amount: 130, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'brokkoli', amount: 100, unit: 'g', scale: false },
        { nev: 'paprika', amount: 80, unit: 'g', scale: false },
        { nev: 'rizs (száraz)', amount: 45, unit: 'g', scale: true, tipus: 'gabona' }
      ]},
      { nev: 'Sovány marhahús', refKcal: 370, osszetevok: [
        { nev: 'marhahús', amount: 120, unit: 'g', scale: true, tipus: 'feherje' },
        { nev: 'párolt borsó + sárgarépa', amount: 150, unit: 'g', scale: false },
        { nev: 'burgonya', amount: 90, unit: 'g', scale: true, tipus: null }
      ]}
    ]
  }
};
