# Références — patrickpatenaude.com

Vide jusqu'à la séance de repérage (S2).

**La règle qui tient ce dossier** : chaque référence gardée dit **ce qu'elle décide**, pas seulement
ce qu'elle montre. Une capture sans phrase de décision pèse sur le projet sans qu'on sache pourquoi
elle est là — et personne n'ose la jeter six semaines plus tard.

Format attendu, une entrée par référence :

```
## <nom du site> — <url>
Décide : <la seule chose que cette référence tranche pour nous>
Fichier : <capture.mp4>
Écarté : <ce qu'on ne reprend PAS, et pourquoi>
```

Y vivront aussi :

- `MOUVEMENT.md` — la décomposition chiffrée de la référence de base (S3). Des nombres, pas des
  adjectifs : `ffprobe` pour la base de temps, `ffmpeg -vf fps=10` pour découper, tableau
  geste / amplitude / fenêtre 0→1, plus une section séparée « réglages retenus » qui note les écarts
  voulus à la référence.
- `reference-inspiration.md` — le relevé technique (Playwright) de la base : structure, typo,
  couleurs, patterns. Il sépare explicitement **ce qu'on observe** de **ce qu'on réimplémente avec du
  contenu original**. Jamais le code, jamais la copy, jamais les images.

⚠️ Une référence de mouvement se décompose **avant** d'être imitée, jamais de mémoire ni sur des
captures fixes. La séance S4 de `viking-website` a été jetée en entier pour avoir sauté cette étape.
