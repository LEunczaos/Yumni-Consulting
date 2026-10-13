# YUMNI Consulting — Refonte du site vitrine

Refonte UX/UI et développement frontend en React du site vitrine de **YUMNI Consulting**, avec pour objectif de mieux présenter ses solutions en automatisation, intelligence artificielle et systèmes d'information, de clarifier le parcours client et de faciliter la prise de contact.

**Site existant :** [www.yumni.net](https://www.yumni.net/)

## 1. Description du projet

Ce projet consiste à transformer une maquette Figma en une application React structurée autour des besoins métier des prospects.

L'approche privilégie les problèmes opérationnels rencontrés par les entreprises — veille, reporting, saisie de données et traitement documentaire — afin de présenter les solutions de YUMNI à travers des exemples concrets plutôt qu'un discours exclusivement technique.

### Objectifs

- Clarifier la proposition de valeur et les domaines d'intervention de YUMNI.
- Structurer les contenus autour des besoins des prospects.
- Présenter les solutions à travers des études de cas concrètes.
- Fluidifier le parcours entre la découverte des services et la prise de contact.
- Créer une interface responsive et une base frontend facile à maintenir.

## 2. Modifications apportées

### 2.1. Reproduction de la maquette et identité visuelle

- Conversion de la maquette Figma en composants React.
- Extraction et centralisation des couleurs, polices, espacements et bordures dans des variables CSS.
- Mise en place d'une direction visuelle sobre associant bleu nuit, or et ivoire.
- Utilisation de Space Grotesk pour les titres et de Source Serif 4 pour le texte courant.
- Organisation des styles pour faciliter la maintenance et les évolutions de l'interface.

### 2.2. Parcours client en six étapes

Mise en place d'un parcours présentant les différentes étapes de collaboration :

1. Visite du site.
2. Identification des besoins et audit gratuit.
3. Mini-cadrage du besoin.
4. Développement d'un MVP (*Minimum Viable Product*).
5. Validation par le client.
6. Chiffrage et négociation.

Une section complémentaire explique le principe du MVP à l'aide d'un exemple de gestion de stock en pharmacie, illustrant l'intérêt de tester une solution simple avant un déploiement plus complet.

### 2.3. Qualification dynamique des besoins

Création d'une section interactive permettant au visiteur d'identifier le processus métier qui lui prend le plus de temps.

Les choix proposés comprennent :

- Veille et collecte d'informations.
- Analyse et reporting.
- Traitement documentaire.
- Relances clients.
- Saisie de données.
- Suivi commercial.
- Autre besoin.

La sélection actualise les informations affichées : description du problème, exemple concret et domaines d'intervention pertinents.

Trois domaines sont mis en avant :

- **Automatisation** — réduction des tâches répétitives et optimisation des processus.
- **Intelligence artificielle** — assistance au traitement de l'information et à certaines tâches métier.
- **Système d'information** — structuration, centralisation et circulation des données.

Pour les trois premiers processus, la section présente également les outils associés et permet d'accéder à l'étude de cas correspondante.

Le positionnement éditorial reste centré sur les besoins opérationnels des entreprises, avec des explications accessibles aux visiteurs non techniques.

### 2.4. Études de cas interactives

Structuration de trois études de cas illustrant des applications concrètes :

- **Veille médiatique automatisée** — collecte et suivi d'informations.
- **Centralisation des données et reporting** — regroupement des données et simplification du suivi d'activité.
- **Traitement documentaire assisté par IA** — amélioration du traitement et de l'exploitation des documents.

Chaque étude de cas s'ouvre dans une fenêtre modale présentant :

- L'objectif.
- Le problème à résoudre.
- Les technologies envisagées ou mobilisées.
- Le résultat attendu ou obtenu, selon le cas.
- Un paragraphe consacré au contexte de YUMNI au Gabon.
- Des vidéos YouTube intégrées à l'aide du domaine `youtube-nocookie.com`.

Les exemples présentés servent à illustrer les possibilités des solutions. Ils ne doivent pas être interprétés comme des références clients réelles sans validation préalable.

### 2.5. Contact et conversion

Refonte de la section Contact pour simplifier la prise de contact et orienter les visiteurs vers une prochaine étape.

- Remplacement du canal WhatsApp par une entrée « Échangez avec nous », dont le lien Discord ou Slack reste à renseigner.
- Préparation d'un formulaire de contact avec les champs nom, e-mail et besoin.
- Présentation d'une option de prise de rendez-vous.
- Organisation du pied de page avec les coordonnées et les liens utiles au référencement.

Le branchement de l'envoi du formulaire et la validation des liens externes font partie des éléments à finaliser avant la mise en ligne.



### Séparation des données et de l'interface

Les textes, étapes du parcours, processus métier, études de cas, vidéos et informations de contact sont regroupés dans `src/data/content.js`.

Cette organisation permet de modifier les contenus sans devoir réécrire la structure des composants.

### Gestion de l'état partagé

Le composant `App.jsx` centralise notamment :

- Le processus sélectionné par le visiteur.
- L'étude de cas actuellement ouverte.

Cet état permet de synchroniser la section de qualification des besoins avec les domaines d'intervention et les études de cas.

### Fenêtres modales

Utilisation de l'élément HTML natif `<dialog>` pour afficher les détails des études de cas.

Les interactions prévues comprennent la fermeture par bouton, par clic extérieur et par la touche Échap.

### Accessibilité

Plusieurs mécanismes contribuent à rendre l'interface plus accessible :

- Attribut `aria-pressed` sur les choix interactifs concernés.
- Attribut `aria-live` pour certains contenus dynamiques.
- Indicateurs de focus visibles pour la navigation au clavier.
- Prise en compte de la préférence système `prefers-reduced-motion`.

### Responsive design

Mise en place de points de rupture CSS à **860 px** et **520 px** pour adapter la présentation aux différentes largeurs d'écran.

Des tests restent nécessaires pour confirmer le comportement de l'ensemble des composants sur ordinateur, tablette et mobile.

## 3. Structure du projet

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Parcours.jsx
│   ├── Audit.jsx
│   ├── Expertise.jsx
│   ├── Cases.jsx
│   ├── CaseModal.jsx
│   ├── Quote.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Button.jsx
├── data/
│   └── content.js
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── sections.css
├── App.jsx
└── main.jsx
```

Cette arborescence présente l'organisation prévue du projet ; elle doit être synchronisée avec les fichiers effectivement présents dans le dépôt.

| Technologie | Utilisation |
|---|---|
| React | Construction de l'interface et des composants interactifs |
| Vite | Environnement de développement et génération du build |
| JavaScript / JSX | Logique applicative et rendu des composants |
| CSS3 | Mise en page, identité visuelle et responsive design |
| JSON / objets JavaScript | Organisation des contenus métier |
| Figma | Maquette et référence UX/UI |
| `@fontsource` | Intégration des polices dans le projet |

**Versions ciblées :** React 18 et Vite 5.

## 4. Installation et lancement

### Prérequis

- Node.js et npm.
- Git, si le projet est récupéré depuis un dépôt distant.

### Installation

```bash
git clone <url>
cd <chemin>
npm install
```

### Commandes disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Générer la version de production
npm run build

# Prévisualiser le build de production
npm run preview
```

Avec la configuration Vite standard, le serveur de développement est accessible à l'adresse `http://localhost:5173`.

## 5. Perspectives d'évolution

- Améliorer progressivement l'accessibilité et l'expérience mobile.
- Compléter les études de cas avec des résultats mesurables et des références validées.
- Finaliser les mécanismes de conversion et de prise de rendez-vous.
- Optimiser le référencement naturel et les performances avant publication.
- Faire évoluer les contenus et les composants selon les retours de YUMNI.

---

**Projet :** Refonte du site vitrine de YUMNI Consulting  
**Périmètre :** UX/UI, intégration frontend et interactions React  
**Objectif :** rendre l'offre plus compréhensible, relier les besoins métier aux solutions proposées et faciliter la prise de contact.