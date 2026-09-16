# Backlog — patrickpatenaude.com

Le hub (`C:\Nexus\BACKLOG.md`) n'en garde qu'une ligne de renvoi. Même forme que lui : une puce, un
marqueur (🎯 ⏳ ⏸️ ❓), un titre en gras, la date d'ajout en ISO, puis _quoi_ et _premier geste_.

Ici ne vivent que les tâches ouvertes. Le pourquoi des choix est dans `DECISIONS.md` ; ce qui est
accompli est dans `git log`.

## Ce que chaque porte exige

Définition de référence, pas un tableau d'avancement. Une porte franchie ne se rouvre pas, et ce
qu'elle décide s'écrit dans `DECISIONS.md` le jour même. Pas de dates : le travail se fait par blocs
longs irréguliers.

|     | Phase                                              | La porte est franchie quand                                     |
| --- | -------------------------------------------------- | --------------------------------------------------------------- |
| S1  | Fondation — config, outillage, déploiement à blanc | `pnpm build` passe et la page est en ligne en `noindex`         |
| S2  | Repérage                                           | Patrick a désigné une base et deux ou trois banques de morceaux |
| S3  | Mesure de la référence                             | `refs/MOUVEMENT.md` contient des nombres, pas des adjectifs     |
| S4  | Direction artistique — planche image cible         | Patrick valide la planche                                       |
| S5  | Pièce maîtresse prototypée hors du site            | 60 fps mesurés sur le Pixel 8 Pro en débogage USB               |
| S6  | Accueil                                            | CV et contact à un clic de partout, et l'`og:image` existe      |
| S7  | Pages projet et finition                           | Les quatre seuils ci-dessous                                    |
| S8  | Mise en ligne                                      | `noindex` retiré, liens externes à jour le même jour            |

**Les quatre seuils de performance**, mesurés sur appareil réel et jamais en émulateur : 60 fps sur
le Pixel 8 Pro en débogage USB (trace Chrome pendant un scroll réel) et sur portable en mode
batterie · LCP sous 2,5 s · moins de 500 Ko au premier écran, la 3D chargée en différé · le site
reste entier sans WebGL et sous `prefers-reduced-motion`.

## 🎯 En cours

- 🎯 **Séance de repérage (S2)** · 2026-09-15
  Trois familles séparées : portfolios de développeurs, sites de studios, sites primés hors métier.
  Sortie attendue : une sélection vue **en mouvement**, plus 8 à 10 axes nommés déduits de ce qui
  sépare ce que Patrick garde de ce qu'il écarte. Les axes sont une sortie, jamais une question
  posée d'avance. Chaque référence conservée dit **ce qu'elle décide**, pas ce qu'elle montre.
  Premier geste : proposer une première liste d'URL à ouvrir en direct, et ne capturer en vidéo
  (`playwright-cli`) que celles qui ont provoqué une réaction.

## ❓ Tranché à la porte S4, devant les références

- ❓ **Le rôle de la 3D** — pièce maîtresse unique, monde traversé au scroll, ou 3D diffuse.
- ❓ **La structure du site** — page longue, ou accueil plus pages projet séparées.
- ❓ **La provenance des modèles 3D** — procédural, généré (Higgsfield, `img2threejs`), ou téléchargé.

## ⏸️ En attente

- ⏸️ **Acheter patrickpatenaude.com** · 2026-09-15 — quand le site sera en construction
  11,25 $ US/an, vérifié libre le 2026-09-15 ; rien dans le code n'en dépend, l'adresse `.vercel.app`
  suffit jusque-là. Le jour de l'achat, la charge annuelle entre dans
  `Administratif\Dashboard\data\echeances.js`.
  Premier geste : acheter le domaine et le brancher au projet Vercel.
- ⏸️ **Sentry** · 2026-09-15 — quand la première scène 3D existe (S5)
  Le code WebGL et les animations cassent silencieusement sur des appareils qu'on ne peut pas tous
  tester ; c'est là que le monitoring devient rentable, pas avant.
  Premier geste : créer le projet Sentry et poser le SDK Next.
- ⏸️ **Budgets Lighthouse CI** · 2026-09-15 — quand la pièce maîtresse tourne (S5)
  Un budget fixé avant la première mesure serait inventé.
  Premier geste : mesurer la scène réelle, puis écrire le budget sur ce chiffre.
- ⏸️ **Tests de fumée Playwright et axe-core** · 2026-09-15 — quand les pages cessent de bouger (S7)
  Mesuré : aucun des sept sites vitrine du parc n'a jamais été sauvé par un test, et le rendu WebGL
  n'est pas testable en CI (le canvas vit sur le GPU) — on vérifie qu'il existe, rien de plus.
  ⚠️ Claude n'écrit pas un test à partir de sa propre lecture du code qu'il vient d'écrire : Patrick
  dicte d'abord le comportement attendu, sinon le test est un miroir du bug plutôt qu'un garde-fou.
  Premier geste : trois tests — la page charge, le canvas est présent, zéro erreur console.
- ⏸️ **Skill `wrap-up` propre au projet** · 2026-09-15 — vers S5, quand le rythme sera connu
  Patron : `Projects\HalteroFit\.claude\skills\wrap-up\`.
  Premier geste : lire le patron et n'en garder que les gestes qui diffèrent de `fin-de-seance`.
- ⏸️ **Bascule vers TypeScript 7** · 2026-09-15 — quand un `create-next-app` frais en
  `typescript@latest` passe build, lint et tests sans paquet de compatibilité
  Premier geste : refaire ce test ; le raisonnement complet est dans `DECISIONS.md`.

## Ce qu'on ne fera pas, et pourquoi

Écrit ici pour que la question ne se rouvre pas à chaque séance : **Gitflow** (cérémonial d'équipe,
friction pure en solo) · **commitlint et semantic-release** (rien n'est publié ni versionné) ·
**Renovate** (Dependabot suffit sur un dépôt unique) · **objectif de couverture de tests** (presque
aucune logique métier à protéger, et les instantanés meurent à chaque retouche de design) ·
**régression visuelle pixel** (sur un design animé en itération, le bruit dépasserait le signal).
