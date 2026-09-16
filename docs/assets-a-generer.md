# Assets à générer — patrickpatenaude.com

Charte de génération, écrite **avant** le premier asset. L'oubli de ce document a coûté 8 crédits le
2026-08-29 sur Aquilon : `--image` avait été compris comme verrouillant l'aménagement d'une scène,
alors qu'il ne verrouille que la **silhouette et le grade**.

Les sources lourdes vivent dans `assets-raw/` à la racine — gitignoré, hors de `public/`.

## Les trois règles qui coûtent cher quand on les oublie

**1. Dimensionner en pixels physiques, jamais en pixels CSS.**
Largeur du conteneur × DPR × zoom. Un téléphone de 390 pt en DPR 3 exige **1170 px de large** : une
sortie 2k (~1152 px) est insuffisante pour du plein cadre.

**2. Upscaler la sortie native, ne pas régénérer.**
Si l'image manque de pixels, on upscale depuis le fichier natif du job. On ne régénère que si le
rendu est **mou** — jamais l'inverse, et jamais d'upscale depuis un fichier déjà ré-encodé.

**3. Un ratio par conteneur, mesuré sur le composant réel.**
Un conteneur `absolute inset-0` dans un cadre `~100svh` sur un 390×844 a un ratio de ~0,45 — ce n'est
pas du 4:5. Une source 4:5 (0,80) y perd ~44 % de sa largeur. Mesurer avant de générer.

## Modèles et coûts

Vérifier le coût avant de lancer : `higgsfield generate cost <model> …`

Économie : **des lots de variantes bon marché à choisir**, jamais GPT Image 2 sans accord explicite
de Patrick. Les modèles modestes servent à explorer ; le modèle cher ne sert qu'à finaliser une image
déjà choisie.

## Ce qu'on ne génère jamais

À remplir en S4, une fois la direction artistique arrêtée. Le principe (patron :
`viking-website/docs/BRIEF.md`) : une liste explicite d'interdits vaut mieux que dix adjectifs
positifs, parce qu'un modèle génératif dérive toujours vers la même moyenne.

Un interdit est déjà connu, hérité du portfolio actuel : **rien qui ressemble au portfolio de
développeur par défaut** — cyan sur ardoise, dégradés bleu-violet, cartes arrondies génériques.

## Inventaire

Vide. Le premier asset naît en S4 (planche image cible), pas avant.

| Asset | Conteneur | Ratio | Px physiques | Modèle | État |
|---|---|---|---|---|---|
| — | — | — | — | — | — |
