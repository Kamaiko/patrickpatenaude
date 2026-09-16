# patrickpatenaude.com

Portfolio personnel de Patrick Patenaude. Remplace `Projects\Web\portfolio-website` (halterofit.ca),
dont le domaine revient à l'application HalteroFit.

## La thèse, qui commande tout le reste

Ce site est une **pièce de démonstration d'un rendu fini et poli**. Pas une preuve de profondeur
d'ingénierie — cette formulation a été essayée puis corrigée par Patrick à la conception.

Ce que la thèse **exclut**, et pourquoi :

- **Pas d'études de cas.** Une étude de cas sert une thèse de profondeur. Ici elle promettrait une
  conversation que la page ne peut pas tenir. Les pages projet sont visuelles et courtes.
- **Le plancher de performance est une porte, pas un vœu.** « Poli » et « ça saccade » ne coexistent
  pas. C'est le seul endroit où rien ne se négocie.
- **La provenance des modèles 3D est libre.** Procédural, généré ou téléchargé : le fini vient de
  l'intégration, de l'éclairage et de la mise en scène, pas de l'origine du fichier.

## Commandes

```bash
pnpm dev        # http://127.0.0.1:3004  (3001 = aquilon, 3002 = adjointe, 3003 = alpine)
pnpm build      # export statique dans out/
pnpm preview    # sert out/ sur le port 3005
pnpm typecheck  # tsc --noEmit
pnpm lint       # eslint (config identique à alpine-website et adjointe-virtuelle)
```

## Interdits

- **Aucun composant d'effet porté depuis `refuges-charlevoix`** — pas de `CustomCursor`, pas de
  `Hebergements` / scène capsule, pas de `RevealChars`, pas de `PixelCurtainReveal`. Patrick ne
  refuse pas la répétition par principe, mais ces gestes-là ont déjà servi deux fois (Aquilon puis
  adjointe-virtuelle) et ne peuvent plus surprendre personne. Les primitives utilitaires (helpers
  `gsap.ts`, fusion de classes) se copient sans problème : c'est le **geste visible** qui est
  interdit, pas la plomberie.
- **Rien qui ressemble au portfolio de développeur par défaut** — cyan sur ardoise, dégradés
  bleu-violet, Inter, cartes arrondies génériques. C'est exactement ce qu'est le site qu'on remplace,
  et c'est le seul échec qui tuerait la thèse.
- **Pas de tokens de design avant S4.** `globals.css` a un bloc `@theme` vide exprès. Des tokens
  écrits avant que la direction artistique soit validée sur planche sont des tokens inventés.

## Pièges qui mordent encore

- **`git init` doit être le premier geste d'un nouveau dépôt sous `Projects\`.** Tant qu'un projet
  n'a pas sa propre racine git, tout outil dont le parcours de fichiers respecte les règles
  d'exclusion remonte les dossiers parents, atteint `C:\Nexus\.git`, et applique le `.gitignore` du
  hub — dont la ligne 74 est `/Projects/*`. **Le projet entier est alors considéré comme ignoré.**
  Observé le 2026-09-15 avec `oxlint`, qui sortait en code 1 sur « No files found to lint. Please
  check your paths and ignore patterns. » : message trompeur, puisque la cause n'était ni le chemin
  ni un motif local, et que `--no-ignore` n'y changeait rien. Un fichier nommé explicitement passait
  quand même, ce qui brouillait le diagnostic. `git init` a résolu le cas immédiatement.
- **`@react-three/fiber` 9.7.0 déclare `react >=19 <19.3`**, alors que le projet est en 19.3.0. pnpm
  émet un avertissement de peer à chaque install. **Vérifié le 2026-09-15 : ce n'est pas une vraie
  incompatibilité** — `tsc --noEmit` et `next build` passent tous deux. C'est une borne de version
  que R3F n'a pas rafraîchie. Ne pas « corriger » en rétrogradant React.
- **Une référence de mouvement se décompose avant d'être imitée**, jamais de mémoire ni sur des
  captures fixes. `playwright-cli` (l'outil global) sait enregistrer une vidéo — `video-start` /
  `mousewheel` / `video-stop` ; le **MCP Playwright ne sait pas**. La séance S4 de `viking-website` a
  été jetée en entier pour avoir sauté cette étape.
- **Un visuel plein cadre se dimensionne en pixels physiques** (largeur × DPR × zoom), et on upscale
  la sortie native plutôt que de régénérer. Détails et coût de l'oubli : `docs/assets-a-generer.md`.

## Structure

```
src/app/          routes (App Router, export statique)
docs/DECISIONS.md une entrée par décision : tranché, écarté, ce qui rouvrirait
docs/TASKS.md     les phases, leurs portes, ce qui reste ouvert
docs/refs/        références visuelles et mesures de mouvement (vide jusqu'à S2)
assets-raw/       sources lourdes de génération d'images — gitignoré
```

Les décisions de conception durables vivent dans `docs/DECISIONS.md` — elles y sont, avec leur
pourquoi et l'option écartée. Aucun document hors du dépôt n'est nécessaire pour reprendre le
travail.

## Ce qui n'est pas encore décidé

Trois choses sont **volontairement** ouvertes, et se tranchent à la porte S4, devant les références —
pas dans le vide : le rôle de la 3D, la structure du site, la provenance des modèles 3D. Si une
séance a besoin de l'une d'elles avant S4, c'est le signe qu'elle est partie trop tôt.
