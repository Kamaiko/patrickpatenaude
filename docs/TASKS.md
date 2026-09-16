# Backlog — patrickpatenaude.com

Le hub (`C:\Nexus\BACKLOG.md`) n'en garde qu'une ligne de renvoi. Même forme que le hub : une puce, un
marqueur d'état facultatif (🎯 ⏳ ⏸️ ❓), un titre, la date d'ajout, le premier geste.

Le plan complet de la séance de conception vit dans
`C:\Users\Patrick Patenaude\.claude\plans\je-pensais-ventuellement-rustling-hanrahan.md`.
Ici ne vivent que les tâches ouvertes.

## Les phases et leurs portes

Une porte franchie ne se rouvre pas ; ce qu'elle décide s'écrit dans `DECISIONS.md` le jour même.
Pas de dates — Patrick travaille par blocs longs irréguliers.

| | Phase | Porte |
|---|---|---|
| S1 | Fondation — config, doc, déploiement à blanc | `pnpm build` passe, page en ligne en `noindex` |
| S2 | Repérage (**Fable**) — 12 candidats en vidéo + axes | Patrick désigne une base + 2-3 banques de morceaux |
| S3 | Mesure de la référence | `refs/MOUVEMENT.md` contient des nombres, pas des adjectifs |
| S4 | Direction artistique (**Fable**) — planche image cible | Patrick valide la planche |
| S5 | Pièce maîtresse prototypée seule | 60 fps mesurés sur le Pixel 8 Pro en débogage USB |
| S6 | Accueil | CV et contact à un clic de partout ; `og:image` existe |
| S7 | Pages projet et finition | Les quatre seuils de perf |
| S8 | Mise en ligne | `noindex` retiré, liens externes à jour le même jour |

## ✅ S1 — fait le 2026-09-15

En ligne sur **https://patrickpatenaude.vercel.app** (`noindex`, vérifié dans le HTML livré).
Dépôt public : https://github.com/Kamaiko/patrickpatenaude — déploiement automatique depuis `main`.

Porte franchie, mesurée : `pnpm lint` exit 0 · `pnpm typecheck` propre · `pnpm build` ✓ ·
build Vercel ✓ en 27 s, les deux routes en `○ (Static) prerendered as static content` — export
statique confirmé, aucune fonction déployée.

## ⏳ S2 — la prochaine

- ⏳ **Séance de repérage** · 2026-09-15 — **sous Fable**
  Trois familles séparées : portfolios de développeurs, sites de studios, sites primés hors métier.
  12 candidats capturés en **vidéo** (`playwright-cli` : `open`, `video-start`, `mousewheel`,
  `video-stop` — le MCP Playwright ne sait pas enregistrer).
  Sortie attendue : les 12 vidéos **plus** 8-10 axes nommés, déduits de ce qui sépare les retenus des
  rejetés. Les axes sont une sortie, jamais une question posée d'avance.
  Chaque capture gardée dit **ce qu'elle décide**, pas seulement ce qu'elle montre.
  Premier geste : Patrick dit quand il a du temps devant lui — ça se regarde d'une traite.

## ❓ Tranché plus tard, devant les références (porte S4)

- ❓ **Le rôle de la 3D** — pièce maîtresse unique / monde traversé au scroll / 3D diffuse.
- ❓ **La structure du site** — page longue ou accueil + pages projet séparées.
- ❓ **La provenance des modèles 3D** — procédural, généré (Higgsfield, `img2threejs`), ou téléchargé.
  Le fini vient de l'intégration, pas de la provenance : les trois sont ouvertes.

## ⏸️ Plus tard

- ⏸️ **Acheter patrickpatenaude.com** · 2026-09-15 — quand le site sera en construction
  11,25 $ US/an, vérifié libre le 2026-09-15. Rien dans le code n'en dépend : l'adresse `.pages.dev`
  suffit jusque-là.
- ⏸️ **Skill `wrap-up` propre au projet** · 2026-09-15 — vers S5, quand le rythme sera connu
  Patron : `Projects\HalteroFit\.claude\skills\wrap-up\`. Une bonne partie du travail se fait hors de
  portée de `fin-de-seance`.
- ⏸️ **Bascule vers TypeScript 7** · 2026-09-15 — voir `DECISIONS.md` pour le signal exact
  Fenêtre réaliste : fin 2026 / début 2027, après la 7.1 et son API programmatique stable.
