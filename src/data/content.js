export const CONTACT = {
  email: 'info@yumni.net',
  // Lien d'invitation Discord / Slack
  chat: 'mailto:info@yumni.net',
  booking: '#contact',
};

export const NAV = [
  { label: 'Parcours', href: '#parcours' },
  { label: 'Audit gratuit', href: '#audit' },
  { label: 'Solutions', href: '#expertise' },
  { label: 'Études de cas', href: '#cas' },
  { label: 'Contact', href: '#contact' },
];

export const FLOW = ['Problème', 'Automatisation', 'Donnée', 'Décision'];

export const STEPS = [
  {
    id: 1,
    label: "Visite",
    sub: "Premier contact et prise de connaissance.",
    active: true
  },
  {
    id: 2,
    label: "Identification des besoins",
    sub: "Audit gratuit de vos processus actuels."
  },
  {
    id: 3,
    label: "Mini cadrage",
    sub: "Définition précise du périmètre d'intervention."
  },
  {
    id: 4,
    label: "MVP",
    sub: "Validation concrète de l'expression du besoin."
  },
  {
    id: 5,
    label: "Validation client",
    sub: "Test de la solution avec le client."
  },
  {
    id: 6,
    label: "Chiffrage & Négociation",
    sub: "Définition des coûts et de l'infrastructure."
  }
];

export const MVP = {
  title: "Qu'est-ce qu'un MVP ?",
  text: "MVP signifie « Minimum Viable Product » : le produit minimum qui permet de vérifier que la solution répond au besoin avant de tout développer. Exemple : pour une pharmacie qui veut gérer ses entrées et sorties de stock, nous construisons d'abord une version simple, que le client teste. Si elle convient, nous passons au chiffrage.",
};


export const DOMAINS = [
  { mark: '01', title: 'Automatisation', tools: 'n8n · Huginn · Airtable' },
  { mark: '02', title: 'Intelligence artificielle', tools: 'GPT · Claude · Mistral' },
  { mark: '03', title: "Système d'information", tools: 'SQL · open source · hébergement' },
];

// Contenu affiché par domaine quand aucun processus n'est choisi
export const DEFAULT_CONTENT = [
  'Éliminer les tâches manuelles répétitives et fiabiliser vos processus.',
  "Intégrer l'IA directement dans vos flux de travail, pas comme un gadget à part.",
  'Centraliser et héberger vos données avec des outils ouverts, pour les exploiter facilement.',
];

// domains = [automatisation, IA, système d'information] ; description, example, tools et caseNum sont optionnels
export const PROCESSES = [
  {
    id: 'veille', name: "Veille & collecte d'informations",
    description: "Recherche, collecte et consolidation d'informations provenant de plusieurs sources.",
    example: 'Parti politique ou agence de communication devant suivre la couverture médiatique sur plusieurs sources.',
    domains: [
      'Collecte planifiée multi-sources : un workflow récupère automatiquement les articles, posts et flux RSS selon une fréquence définie.',
      'Résumé automatique, classification par thème et détection de signaux faibles dans les contenus collectés.',
      'Plateforme de veille cloud avec tableaux de bord, alertes et historique consultable.',
    ],
    tools: ['NUITEL', 'GCP', 'DMSI', 'Veille Cloud'], caseNum: '01',
  },
  {
    id: 'analyse', name: 'Analyse & reporting',
    description: 'Données dispersées, tableaux Excel multiples et reporting chronophage.',
    example: 'Entreprise devant consolider des ventes issues de plusieurs fichiers Excel chaque semaine.',
    domains: [
      'Génération automatique des rapports périodiques (quotidien, hebdomadaire, mensuel) sans intervention manuelle.',
      'Détection d’anomalies dans les indicateurs et résumé automatique des points clés à retenir.',
      'Centralisation des sources de données dans un entrepôt léger, accessible et sécurisé.',
    ],
    tools: ['GCP', 'Power BI', 'Open Source'], caseNum: '02',
  },
  {
    id: 'documents', name: 'Traitement documentaire',
    description: 'Lecture, tri, extraction et traitement manuel de documents.',
    example: 'Pharmacie ou cabinet devant traiter manuellement des factures, bons de livraison et ordonnances.',
    domains: [
      'Indexation, classement et archivage automatiques des documents dès leur réception.',
      'OCR et recherche sémantique : retrouver un document par son contenu, pas seulement par son nom.',
      'Gestion électronique de documents (GED) open source, hébergée et sécurisée.',
    ],
    tools: ['NUITEL', 'DMSI', 'GED Open Source'], caseNum: '03',
  },
  {
    id: 'relances', name: 'Relances clients',
    domains: [
      'Relances envoyées automatiquement aux bonnes dates, selon le statut du client.',
      'Messages personnalisés et priorisation des clients à relancer.',
      'Un suivi unique des échéances, des paiements et des réponses.',
    ],
  },
  {
    id: 'saisie', name: 'Saisie de données',
    domains: [
      "Les informations passent d'un outil à l'autre sans ressaisie.",
      'Extraction des données depuis des formulaires, e-mails ou PDF.',
      'Contrôles de cohérence et base propre, sans doublons.',
    ],
  },
  {
    id: 'commercial', name: 'Suivi commercial',
    domains: [
      'Mise à jour automatique du suivi des prospects et rappels de rendez-vous.',
      'Résumé des échanges et suggestion de la prochaine action.',
      "Vue claire du suivi commercial, accessible à toute l'équipe.",
    ],
  },
  { id: 'autre', name: 'Autre' },
];

// Exemples types rédigés à partir de la maquette : à valider avec la direction.
// `videos` : vidéos YouTube externes (url complète ou identifiant). À vérifier une par une avant mise en ligne.
export const CASES = [
  {
    num: '01', sector: 'Agence de communication / institution',
    problem: 'Veille médiatique dispersée sur plusieurs sources', solution: 'Workflow multi-sources automatisé', result: 'Réduction du temps consacré à la collecte et au reporting',
    objectif: "Suivre en continu ce que la presse en ligne et les réseaux disent d'un client (institution, parti, marque) sans y consacrer des heures chaque jour.",
    probleme: 'Les sources sont nombreuses et dispersées. La revue de presse est faite à la main, tardivement et de façon incomplète.',
    techs: ['n8n : collecte automatique des sources', 'GPT / Claude : tri par thème et résumés', 'Airtable : archive des articles', 'Rapport quotidien envoyé par e-mail'],
    gabon: "Chez Yumni, nous configurons ce type de veille pour les organisations gabonaises : sources locales et internationales, thèmes suivis et format de rapport adaptés à votre activité.",
    videos: [
      { title: "Automatiser votre veille avec l'IA", channel: 'NOFLOW', url: 'https://www.youtube.com/watch?v=6bFzJ8_3WfM' },
      { title: 'Automatisation alternative Make / n8n', channel: '', url: 'https://www.youtube.com/watch?v=3zUOwm1BGWY' },
    ],
  },
  {
    num: '02', sector: 'Institution / entreprise',
    problem: 'Données économiques éclatées, décisions ralenties', solution: 'Dashboard décisionnel centralisé', result: 'Centralisation et visualisation de plusieurs sources de données',
    objectif: 'Réunir en un seul tableau de bord les chiffres utiles pour décider vite.',
    probleme: 'Les données viennent de fichiers et de services différents. Chaque point de situation demande des heures de consolidation.',
    techs: ['n8n : récupération automatique des données', 'SQL : base centrale hébergée', 'Metabase : tableau de bord partagé'],
    gabon: 'Nous aidons les organisations gabonaises à rassembler leurs fichiers et sources dans un tableau de bord simple, en commençant par les deux ou trois indicateurs qui servent vraiment à décider.',
    videos: [
      { title: 'Créer un dashboard Power BI pour analyser les ventes', channel: 'Capital Data', url: 'https://www.youtube.com/watch?v=YVteZK3VjBE' },
      { title: 'Gabon numérique : AI Hub', channel: 'Gabon 24', url: 'https://www.youtube.com/watch?v=c-Ste0zFN5A' },
    ],
  },
  {
    num: '03', sector: 'Cabinet / administration',
    problem: 'Traitement documentaire manuel et chronophage', solution: 'Assistant documentaire basé IA', result: 'Réduction des tâches manuelles répétitives de traitement documentaire',
    objectif: "Retrouver et traiter rapidement l'information contenue dans de gros volumes de documents.",
    probleme: 'Les documents arrivent en scan ou en PDF, sont classés à la main et il faut les relire pour retrouver une information.',
    techs: ['OCR : lecture des scans', 'GPT / Claude : extraction et réponses aux questions', 'Stockage open source hébergé'],
    gabon: 'Nous construisons des assistants documentaires pour les organisations gabonaises, en tenant compte de vos types de documents (scans, PDF, courriers) et de vos exigences de confidentialité.',
    videos: [
      { title: 'Comprendre les agents IA en 10 minutes', channel: 'theyo', url: 'https://www.youtube.com/watch?v=1auRbtW3b3s' },
      { title: 'Démonstration assistant documentaire IA', channel: 'Therefore TV - francais', url: 'https://www.youtube.com/watch?v=l1mJ0r3MMBA' },
    ],
  },
];

export const SEO_LINKS = [
  'Automatisation des processus au Gabon',
  'Automatisation n8n à Libreville',
  'IA pour entreprises au Gabon',
  'Business Intelligence au Gabon',
  'Reporting automatisé',
  'Transformation digitale au Gabon',
];
