# patrickpatenaude.com

Portfolio personnel de Patrick Patenaude. Remplace `Web\portfolio-website` (halterofit.ca), dont le
domaine revient à l'application HalteroFit.

## Ce que le site prétend, et ce que ça tranche

Une pièce de démonstration d'un **rendu fini et poli**, pas une preuve de profondeur d'ingénierie.
Trois conséquences qui décident de vraies questions de code :

- **Pas d'études de cas.** Elles promettraient une profondeur de raisonnement que la page ne peut pas
  tenir, et qu'un entretien démentirait. Les pages projet sont visuelles et courtes.
- **Une animation qui saccade se répare avant qu'on ajoute quoi que ce soit** — « poli » et « ça
  saccade » ne coexistent pas, et la performance perçue est ici le produit lui-même.
- **La provenance d'un modèle 3D est libre** : procédural, généré ou téléchargé. Le fini vient de
  l'intégration, de l'éclairage et de la mise en scène, pas de l'origine du fichier.

## Commandes

`pnpm`, jamais `npm`. Le serveur de développement n'écoute **pas** sur 3000 : les ports voisins sont
déjà pris par d'autres sites du parc, et deux projets sur le même port se volent le rechargement à
chaud. Le port retenu est dans `package.json`, qui en est la seule source de vérité.

## Architecture

- **Export statique.** Aucune Server Action, aucune route API, aucun middleware, et `next/image` sans
  optimiseur — y compris sur Vercel, contrairement à ce qu'on suppose. Ce n'est pas un manque à
  combler : c'est ce qui rend le site servable partout et instantané. Une fonctionnalité qui exige le
  serveur se résout autrement, ou ne se fait pas.
- **React Three Fiber orchestre la scène.** Three.js brut n'apparaît qu'encapsulé dans un composant,
  et seulement là où il faut du compute GPU, que R3F n'expose pas encore de série.
- **Les shaders s'écrivent en TSL, pas en GLSL brut.** TSL compile vers les deux backends : le repli
  WebGL2 est alors gratuit, alors que du GLSL brut ne tournerait que sur WebGL.

## Interdits

- **Aucun composant d'effet porté depuis `refuges-charlevoix`** — ni curseur personnalisé, ni scène
  capsule, ni révélation par caractères, ni rideau de pixels. Ces gestes ont déjà servi deux fois
  dans le parc : ils ne peuvent plus surprendre personne, et ce site n'a que la surprise pour
  argument. Les primitives utilitaires se copient sans problème — c'est le **geste visible** qui est
  interdit, pas la plomberie.
- **Rien qui ressemble au portfolio de développeur par défaut** : cyan sur ardoise, dégradés
  bleu-violet, Inter, cartes arrondies génériques. C'est exactement ce qu'est le site qu'on remplace,
  et c'est le seul échec qui tuerait la thèse.
- **Aucun token de design tant que la direction artistique n'est pas validée sur planche.** Le bloc
  `@theme` de `globals.css` est vide exprès : des tokens écrits avant sont des tokens inventés.

## Pièges qui mordent encore

- **Turbopack n'a pas d'équivalent à tous les loaders webpack.** Un shader ne s'importe donc pas
  depuis un fichier `.glsl` : l'écrire dans un module TypeScript, ou en TSL.
- **pnpm avertit d'un conflit de peer entre React Three Fiber et React à chaque installation.** C'est
  une borne de version que R3F n'a pas rafraîchie, pas une incompatibilité — lint, typecheck et build
  passent tous les trois. Ne pas « corriger » en rétrogradant React.
- **Une référence de mouvement se décompose en chiffres avant d'être imitée**, jamais de mémoire ni
  sur des captures fixes. `playwright-cli` enregistre une vidéo ; le MCP Playwright ne sait pas.

## Où va quoi

Une **décision** et son pourquoi : `docs/DECISIONS.md`. Une **tâche** : `docs/TASKS.md` — jamais
ici, et jamais dans le `BACKLOG.md` du hub, qui n'en porte qu'un renvoi. Un **fait accompli** ne
s'écrit nulle part : `git log` le produit sans mentir.
