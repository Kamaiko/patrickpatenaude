# Décisions — patrickpatenaude.com

Une entrée par décision : la question, ce qui est tranché, les raisons, ce qui a été écarté et
pourquoi, ce qui rouvrirait la question. Toutes les décisions qui gouvernent ce dépôt sont ici :
reprendre le travail ne demande aucun document extérieur.

## 2026-09-15 — La thèse : un rendu fini et poli, pas une preuve d'ingénierie

**Question.** Que prétend le site ? La première formulation de Patrick était « montrer ma vigueur et
ma rigueur technique ».

**Tranché.** Une pièce de démonstration d'un **rendu fini et poli**. Patrick a lui-même corrigé la
première formulation : « des termes que j'ai dits sur le coup, pas à prendre trop au sérieux —
c'était une façon d'exprimer l'intérêt d'avoir un rendu fini, poli ».

**Raisons.** Un visiteur *voit* le fini en trois secondes ; il ne verra jamais la profondeur d'un
raisonnement sans parler à son auteur. La thèse du fini est donc la seule que le média sache porter.
Elle est aussi la plus honnête : cinq des projets montrés sont des sites front bâtis rapidement.

**Écarté.** La thèse de profondeur — elle imposait des études de cas défendables à l'oral et un
rythme « ligne à ligne » que Patrick ne veut pas.

**Conséquences engagées.** Pas d'études de cas ; pages projet visuelles et courtes ; provenance des
modèles 3D laissée libre ; plancher de performance traité comme une porte non négociable.

**Ce qui rouvrirait la question.** Un entretien de stage où l'on reproche au site de ne rien dire du
raisonnement — auquel cas une seule page « comment c'est fait », honnête et mesurée, suffirait.

## 2026-09-15 — TypeScript 6.0.3, ni 7.0.2 ni 5.9

**Question.** Un dépôt neuf en septembre 2026 doit-il partir sur TypeScript 7 (le portage Go, sorti
en juillet), rester en 5.9 comme le reste du parc, ou prendre la ligne 6 ?

**Tranché.** **6.0.3**, la dernière version de l'ancien moteur. Vérifié le jour même sur ce dépôt :
`tsc --noEmit` et `next build` passent tous les deux avec Next 16.3.5, React 19.3.0,
`@react-three/fiber` 9.7.0 et `@react-three/drei` 10.7.8.

**Raisons, par poids.** 1. TS 7 casse aujourd'hui, de façon datée : `next build` plantait en SIGSEGV
faute du point d'entrée JS historique (vercel/next.js#95490, corrigé en 16.2.x), l'issue monorepo de
Next 16.3 est encore ouverte (#96589), et `typescript-eslint` n'est pas prêt de l'aveu de ses
mainteneurs (#10940). 2. R3F et drei n'ont **aucune** issue de compatibilité TS 7 — un angle mort,
pas une garantie. 3. Le gain de TS 7 est la vitesse de compilation : zéro bénéfice pour un site
vitrine. 4. TS 6 porte tous les **avertissements de dépréciation** que TS 7 transforme en erreurs,
donc la bascule future se prépare gratuitement.

**Écarté.** TS 7.0.2 — l'argument « dépôt neuf, aucune dette » était faux : la dette n'est pas dans
notre code mais dans les types des dépendances. Un incident identique a déjà eu lieu dans ce hub le
2026-08-16 sur `Atlas-etude` (même mécanisme : point d'entrée de paquet disparu). TS 5.9 — plus
ancienne que 6.0 et sans le filet de dépréciation, aucun avantage.

**Préparation de la bascule.** `tsconfig.json` évite déjà tout ce que TS 7 supprime : pas de cible
`es5`, pas de `baseUrl` (les alias passent par `paths` seul), `strict: true`.
Note : `moduleResolution` est `"bundler"` et non `"nodenext"` — c'est `"node"` (node10) que TS 6
déprécie, pas `"bundler"`, qui reste la valeur attendue par Next.

**Ce qui rouvrirait la question.** Un `create-next-app` frais avec `typescript@latest` qui passe
`next build` + lint + tests **sans aucun paquet de compatibilité**. Fenêtre réaliste : fin 2026 /
début 2027, après TS 7.1 et son API programmatique stable. ⚠️ Le linting passe par
`typescript-eslint` (voir l'entrée ESLint) : c'est lui le blocage le plus lourd de cette bascule, et
il faudra soit qu'il publie un support de TS 7, soit basculer le lint vers Oxlint ce jour-là.

## 2026-09-15 — ESLint + `eslint-config-next`, pas Oxlint

**Question.** Oxlint avait été retenu au montage. Patrick a objecté : « pourquoi Oxlint ? je pensais
qu'on utilisait ESLint avec Next.js ». Il avait raison.

**Tranché.** ESLint 9 + `eslint-config-next` 16.3.5, configuration `eslint.config.mjs` **identique**
à celle d'`alpine-website` et d'`adjointe-virtuelle` (les deux sont déjà identiques entre elles —
c'est le motif maison).

**Pourquoi le choix précédent est tombé.** Il reposait sur un seul argument porteur : Oxlint ne passe
jamais par l'ancienne API du compilateur, donc il survit à la bascule TypeScript 7, là où
`typescript-eslint` est le blocage n°1. Cet argument est vrai **sous TS 7** — mais la décision
précédente a retenu **TS 6**, sous lequel `typescript-eslint` fonctionne parfaitement. La conclusion
avait survécu au retrait de sa prémisse.

**Raisons du choix retenu.** 1. `eslint-config-next` porte des règles que rien d'autre ne connaît
aussi bien (`no-img-element`, `no-html-link-for-pages`, `no-sync-scripts`, `google-font-display`).
2. Tous les autres projets Next du parc l'utilisent : un solo dev qui jongle entre cinq dépôts gagne
à ce qu'ils se ressemblent. 3. L'avantage d'Oxlint est la vitesse (12 à 18×) — inexistant sur un
projet de trois fichiers.

**Écarté.** Oxlint seul. Il reste une bonne option **en complément** si le lint traîne un jour ; les
deux cohabitent sans conflit.

**Ce qui rouvrirait la question.** La bascule vers TS 7 (voir l'entrée TypeScript) : ce jour-là,
`typescript-eslint` redevient un blocage et Oxlint reprend l'avantage.

## 2026-09-15 — Vercel, pas Cloudflare Pages

**Question.** Le plan de conception disait Cloudflare Pages, par analogie avec `portfolio-website` et
`viking-website`. Patrick a objecté : « je pensais qu'on était sur Vercel + Next.js ? »

**Tranché.** **Vercel.** L'argument initial — « une bascule DNS de moins à apprendre » — ne tenait
pas : on abandonne entièrement `portfolio-website` et le domaine est neuf, donc il n'y a aucun acquis
à réutiliser. C'était un raisonnement par habitude.

**Raisons.** 1. Avec `output: "export"`, le site est du statique pur : ni Server Action, ni route API,
ni middleware, ni optimiseur d'images serveur. Les deux hébergeurs servent alors exactement la même
chose, et l'avantage classique de Vercel pour Next.js (rendu serveur, ISR, edge) ne s'applique pas
plus que celui de Cloudflare. À équivalence technique, on prend la moindre friction. 2.
`alpine-website`, le projet Next le plus récent du parc, est déjà sur Vercel dans la même
configuration d'export statique. 3. Le connecteur Vercel est disponible en séance : création de
projet et déploiement sans manipulation manuelle, là où Cloudflare demanderait un `wrangler login`
dans un navigateur.

**Écarté.** Cloudflare Pages. Sa seule vraie raison d'être — l'usage **commercial** permis sur le
palier gratuit, qui avait fait le choix de `viking-website` — ne s'applique pas à un portfolio
personnel.

**Ce qui rouvrirait la question.** Un usage commercial sur ce domaine (vendre un service, héberger
une page de client), qui sortirait du palier Hobby de Vercel. Ou un besoin de bande passante que le
palier gratuit ne couvre pas.

## 2026-09-15 — React Three Fiber pour orchestrer, Three vanilla seulement si le compute l'exige

**Question.** `viking-website` a tranché l'inverse le 2026-09-05 : Three.js vanilla **contre** R3F.
Pourquoi le contraire ici ?

**Tranché.** R3F comme couche d'orchestration de scène ; Three.js brut encapsulé dans un composant si
— et seulement si — une partie exige du compute GPU.

**Raisons.** Les raisons de viking étaient contextuelles et ne s'appliquent pas : ses recettes de
référence et ses skills installés étaient vanilla, et il pilote un chemin de caméra continu plus du
post-processing hors React, ce qui est plus simple sans réconciliation. Ici, il n'y a pas de monde
continu décidé (le rôle de la 3D est ouvert jusqu'à S4), le site est un portfolio React classique où
la scène doit se monter et se démonter proprement au fil des routes, et le surcoût de R3F est
négligeable — il compile vers les mêmes objets Three.js.

**Écarté.** Three vanilla partout : coûterait de la colle manuelle de cycle de vie pour un bénéfice
nul tant qu'il n'y a pas de compute GPU.

**Ce qui rouvrirait la question.** Si S4 choisit un **monde traversé au scroll** plutôt qu'une pièce
maîtresse, l'arbitrage de viking redevient le bon et cette entrée doit être rouverte. C'est aussi le
cas si la pièce maîtresse dépend de compute shaders : R3F v10, qui les apporte de série, est encore
en alpha.

## 2026-09-15 — React 19.3.0 malgré l'avertissement de peer de R3F

**Question.** `@react-three/fiber` 9.7.0 déclare `react >=19 <19.3` ; pnpm avertit à chaque install.
Faut-il rétrograder React ?

**Tranché.** Non. On reste en 19.3.0.

**Raisons.** Mesuré le jour même : `tsc --noEmit` et `next build` passent tous les deux. C'est une
borne de version que R3F n'a pas rafraîchie après la sortie de React 19.3 (2026-09-09, six jours
avant), pas une incompatibilité. Rétrograder désalignerait le projet du reste du parc
(`alpine-website` est en 19.3.0) pour éteindre un avertissement cosmétique.

**Ce qui rouvrirait la question.** Un bug de rendu ou d'hydratation réel attribuable à R3F sous React
19.3 — auquel cas on épingle 19.2.x le temps que R3F publie une version qui élargit son peer.
