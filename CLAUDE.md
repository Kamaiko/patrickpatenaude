# patrickpatenaude.com

Portfolio personnel de Patrick Patenaude. Remplace `Projects\Web\portfolio-website` (halterofit.ca),
dont le domaine revient à l'application HalteroFit.

## La thèse, et ce qu'elle interdit

Ce site est une **pièce de démonstration d'un rendu fini et poli**, pas une preuve de profondeur
d'ingénierie. Trois conséquences qui gouvernent le code :

- **Pas d'études de cas.** Une étude de cas sert une thèse de profondeur ; ici elle promettrait une
  conversation que la page ne peut pas tenir. Les pages projet sont visuelles et courtes.
- **Le plancher de performance est une porte, pas un vœu** — « poli » et « ça saccade » ne coexistent
  pas. Les seuils sont dans `docs/TASKS.md`, avec leur méthode de mesure.
- **La provenance des modèles 3D est libre** : procédural, généré ou téléchargé. Le fini vient de
  l'intégration, de l'éclairage et de la mise en scène, pas de l'origine du fichier.

## Commandes

```bash
pnpm dev        # http://127.0.0.1:3004  (3001 = aquilon, 3002 = adjointe, 3003 = alpine)
pnpm build      # export statique dans out/
pnpm preview    # sert out/ sur le port 3005
pnpm typecheck
pnpm lint
pnpm format     # prettier --write
```

## Interdits

- **Aucun composant d'effet porté depuis `refuges-charlevoix`** — ni `CustomCursor`, ni
  `Hebergements` / scène capsule, ni `RevealChars`, ni `PixelCurtainReveal`. Ces gestes ont déjà
  servi dans Aquilon puis dans adjointe-virtuelle : ils ne peuvent plus surprendre personne, et ce
  site n'a que la surprise pour argument. Les primitives utilitaires (helpers `gsap.ts`, fusion de
  classes) se copient sans problème — c'est le **geste visible** qui est interdit, pas la plomberie.
- **Rien qui ressemble au portfolio de développeur par défaut** — cyan sur ardoise, dégradés
  bleu-violet, Inter, cartes arrondies génériques. C'est exactement ce qu'est le site qu'on remplace ;
  c'est le seul échec qui tuerait la thèse.
- **Aucun token de design tant que la direction artistique n'est pas validée sur planche.** Le bloc
  `@theme` de `globals.css` est vide exprès : des tokens écrits avant sont des tokens inventés.

## Pièges qui mordent encore

- **`git init` est le premier geste d'un nouveau dépôt sous `Projects\`.** Sans racine git locale,
  tout outil qui respecte les règles d'exclusion remonte les dossiers parents jusqu'à `C:\Nexus\.git`
  et applique le `.gitignore` du hub, qui ignore le contenu de `Projects\` : **le projet entier est
  alors invisible**, et le message d'erreur parle de chemins ou de motifs, jamais de la vraie cause.
- **`@react-three/fiber` 9.7.0 déclare `react >=19 <19.3`** alors que le projet est en 19.3.0 : pnpm
  avertit à chaque install. C'est une borne que R3F n'a pas rafraîchie, pas une incompatibilité — ne
  pas « corriger » en rétrogradant React. Le raisonnement et son test : `docs/DECISIONS.md`.
- **Turbopack n'a pas d'équivalent à tous les loaders webpack.** Un shader ne s'importe donc pas
  depuis un fichier `.glsl` via un loader : l'écrire en chaîne de caractères dans un module TypeScript,
  ou en TSL. C'est le piège connu de Next 16 le plus susceptible de mordre ici.
- **Une référence de mouvement se décompose avant d'être imitée**, jamais de mémoire ni sur des
  captures fixes. `playwright-cli` (l'outil global) enregistre une vidéo — `video-start` /
  `mousewheel` / `video-stop` ; le **MCP Playwright ne sait pas**. Une séance entière de
  `viking-website` a été jetée pour avoir sauté cette étape.
- **Un visuel plein cadre se dimensionne en pixels physiques** (largeur × DPR × zoom), et on upscale
  la sortie native plutôt que de régénérer : `docs/assets-a-generer.md`.

## Où va quoi

Une **décision** et son pourquoi vont dans `docs/DECISIONS.md`. Une **tâche** va dans
`docs/TASKS.md` — jamais dans ce fichier, et jamais dans le `BACKLOG.md` du hub, qui n'en porte
qu'une ligne de renvoi. Un **fait accompli** ne s'écrit nulle part : `git log` le produit sans mentir.
