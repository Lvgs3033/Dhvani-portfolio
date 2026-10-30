// ============================================================================
// PORTFOLIO CONTENT CONFIG
// Edit everything about Dhvani's portfolio from this single file.
// Any field shaped { en: string; de: string; fr: string } is trilingual — fill all three.
// ============================================================================

export type Bilingual = { en: string; de: string; fr: string };

export const profile = {
  name: "Dhvani Kakadiya",
  roles: [
  { en: "Computer Engineer", de: "Informatikingenieurin", fr: "Ingénieure Informatique" },
  { en: "AI/ML Engineer", de: "KI-/ML-Ingenieurin", fr: "Ingénieure IA/ML" },
  { en: "Python Developer", de: "Python-Entwicklerin", fr: "Développeuse Python" },
  { en: "Data Analyst", de: "Datenanalystin", fr: "Analyste de données" },
  { en: "Data Scientist", de: "Data Scientist", fr: "Data Scientist" },
  { en: "Power BI Developer", de: "Power-BI-Entwicklerin", fr: "Développeuse Power BI" },
  { en: "Cybersecurity Learner", de: "Cybersicherheit-Lernende", fr: "Apprentie en cybersécurité" }
] as Bilingual[],
  location: { en: "India", de: "Indien", fr: "Inde" } as Bilingual,
  photo: "/profile-photo.jpg", // replace with your own photo in /public
  resumeUrl: "/MLr.pdf", // drop your CV pdf into /public with this name  

intro: {
  en: "I'm a Computer Engineer with a genuine passion for coding and transforming ideas into real-world solutions. Driven, confident, and endlessly curious, I'm passionate about Artificial Intelligence (AI), Machine Learning (ML), Data Science, and Data Analytics. I enjoy leveraging these technologies to solve complex problems, uncover meaningful insights, and build innovative, impactful applications.",

  de: "Ich bin Informatikingenieur mit einer echten Leidenschaft für das Programmieren und dafür, Ideen in praxisnahe Lösungen zu verwandeln. Zielstrebig, selbstbewusst und stets neugierig begeistere ich mich für Künstliche Intelligenz (KI), Maschinelles Lernen (ML), Data Science und Datenanalyse. Ich setze diese Technologien gerne ein, um komplexe Probleme zu lösen, wertvolle Erkenntnisse aus Daten zu gewinnen und innovative Anwendungen mit echtem Mehrwert zu entwickeln.",

  fr: "Je suis ingénieur en informatique, animé par une véritable passion pour la programmation et la transformation d'idées en solutions concrètes. Déterminé, confiant et toujours curieux, je suis passionné par l'intelligence artificielle (IA), le machine learning (ML), la science des données et l'analyse de données. J'aime mettre ces technologies à profit pour résoudre des problèmes complexes, extraire des informations pertinentes à partir des données et développer des applications innovantes à fort impact."
} as Bilingual,

  bio: {
  en: "I am a Computer Engineering student passionate about Artificial Intelligence (AI), Machine Learning (ML), Data Science, Data Analytics, and Cybersecurity. I enjoy solving real-world problems using technology and continuously improving my technical skills. I am currently preparing for professional opportunities while building industry-level projects.",

  de: "Ich bin Student der Informatiktechnik mit einer Leidenschaft für Künstliche Intelligenz (KI), Maschinelles Lernen (ML), Data Science, Datenanalyse und Cybersicherheit. Ich löse gerne reale Probleme mithilfe von Technologie und erweitere kontinuierlich meine technischen Fähigkeiten. Derzeit bereite ich mich auf berufliche Möglichkeiten vor und entwickle praxisnahe Projekte auf professionellem Niveau.",

  fr: "Je suis étudiant en ingénierie informatique, passionné par l'intelligence artificielle (IA), le machine learning (ML), la science des données, l'analyse de données et la cybersécurité. J'aime résoudre des problèmes concrets grâce à la technologie et améliorer continuellement mes compétences techniques. Je me prépare actuellement à des opportunités professionnelles tout en développant des projets de niveau professionnel."
} as Bilingual,

social: {
    github: "https://github.com/Lvgs3033",
    linkedin: "https://www.linkedin.com/in/dhvani-kakadiya-2811a8252/",
    email: "mailto:dhvani1215@gmail.com",
    instagram: "",
  },
  stats: [
    { value: 5, suffix: "+", label: { en: "Projects", de: "Projekte", fr: "Projets" } as Bilingual },
    { value: 2, suffix: "", label: { en: "Internships", de: "Praktika", fr: "Stages" } as Bilingual },
    { value: 9.10, suffix: "", label: { en: "CGPA", de: "Notendurchschnitt", fr: "Moyenne générale" } as Bilingual },
    { value: 2, suffix: "", label: { en: "Languages", de: "Sprachen", fr: "Langues" } as Bilingual },
  ],
};

export const languages = [
  {
    name: "English",
    level: "Fluent",
    flag: "🇬🇧",
    note: { en: "Professional", de: "Beruflich", fr: "Professionnel" },
  },
  {
    name: "Hindi",
    level: "Native",
    flag: "🇮🇳",
    note: { en: "Mother tongue", de: "Muttersprache", fr: "Langue maternelle" },
  },
{
  name: "French",
  level: "Basic",
  flag: "FR",
  note: {
    en: "",
    de: "",
    fr: ""
  },
},
];

export const skillCategories = [
  {
  title: {
    en: "Programming",
    de: "Programmierung",
    fr: "Programmation"
  } as Bilingual,
  skills: ["Python", "HTML", "CSS", "JavaScript", "R", "Java"],
},
{
  title: {
    en: "Machine Learning",
    de: "Maschinelles Lernen",
    fr: "Apprentissage automatique"
  } as Bilingual,
  skills: [
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "TensorFlow/Keras",
    "PyTorch",
    "Pydantic",
    "Matplotlib/Seaborn",
  ],
},
{
  title: {
    en: "Artificial Intelligence",
    de: "Künstliche Intelligenz",
    fr: "Intelligence artificielle"
  } as Bilingual,
  skills: [
    "AI/ML Concepts",
    "RAG",
    "LangChain/LangGraph",
    "Vector Databases/Embeddings",
    "Fine-tuning",
    "LLMOps",
    "MCP",
    "AI Agents",
    "Prompt Engineering",
    "Fine tuning"
  ],
},
{
  title: {
    en: "Data Analytics",
    de: "Datenanalyse",
    fr: "Analyse de données"
  } as Bilingual,
  skills: ["Power BI", "Advanced Excel", "PostgreSQL", "Tableau"],
},
{
  title: {
    en: "Databases",
    de: "Datenbanken",
    fr: "Bases de données"
  } as Bilingual,
  skills: ["SQL", "PostgreSQL", "MongoDB"],
},
{
  title: {
    en: "Tools",
    de: "Werkzeuge",
    fr: "Outils"
  } as Bilingual,
  skills: [
    "Git",
    "GitHub",
    "Docker",
    "Docker Compose",
    "Uvicorn",
    "Kubernetes",
    "Jupyter",
    "Google Colab",
    "Spyder",
    "Kaggle Notebooks",
  ],
},
{
  title: {
    en: "Web Development",
    de: "Webentwicklung",
    fr: "Développement Web"
  } as Bilingual,
  skills: ["React", "PHP", "MySQL", "XAMPP", "Tailwind CSS"],
},
{
  title: {
    en: "Cybersecurity",
    de: "Cybersicherheit",
    fr: "Cybersécurité"
  } as Bilingual,
  skills: [
    "Cybersecurity Basics",
    "VAPT",
    "Network Analysis",
    "Digital Forensics",
  ],
},
{
  title: {
    en: "Core Computer Science",
    de: "Grundlagen der Informatik",
    fr: "Fondamentaux de l'informatique"
  } as Bilingual,
  skills: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management",
    "Operating Systems",
  ],
},
];

export const experience = [

  {
  company: "Canopas, Gujarat",
  role: {en: "AI / ML Engineer", de: "Praktikantin im Bereich KI-/ML-Engineering", fr: "Stagiaire ingénieure en IA / ML" } as Bilingual,
  duration: "Jan 2026 – Present",
  logo: "",
  points: [
    {
      en: "Currently working  as an AI Engineer, developing AI/ML and Generative AI solutions using LLMs, RAG, embeddings, and Python. Building and integrating scalable AI applications focused on real-world business use cases and production deployment. do same",
      de: "Derzeit arbeite ich als AI Engineer und entwickle AI/ML- sowie Generative-AI-Lösungen mit LLMs, RAG, Embeddings und Python. Ich entwickle und integriere skalierbare KI-Anwendungen mit Fokus auf praxisnahe Geschäftsanwendungen und produktionsreife Bereitstellung.", 
      fr: "Je travaille actuellement en tant qu’AI Engineer, où je développe des solutions d’IA/ML et d’IA générative utilisant des LLMs, le RAG, les embeddings et Python. Je développe et intègre des applications d’IA évolutives, axées sur des cas d’utilisation métier concrets et leur déploiement en production."
    } as Bilingual,
  ],
},

{
 company: "Code4x, Bengaluru",
role: {
  en: "Generative AI Development Intern (Remote)",
  de: "Praktikant für Generative KI-Entwicklung (Remote)",
  fr: "Stagiaire en développement d'IA générative (à distance)"
} as Bilingual,

duration: "Dec 2025 – Jan 2026",
logo: "",

points: [
  {
    en: "In my this internship i've built an AI-powered e-commerce operations agent using LLMs, RAG, and tool calling to automate order management workflows. Developed workflows to understand customer requests, retrieve order and product information, verify refund and replacement policies, track shipments, and execute actions through APIs, enabling faster and more efficient customer order resolution.same",
    de: "Während meines Praktikums entwickelte ich einen KI-gestützten E-Commerce-Operations-Agenten mit LLMs, RAG und Tool Calling zur Automatisierung von Workflows im Bestellmanagement. Ich entwickelte Workflows zur Verarbeitung von Kundenanfragen, zum Abrufen von Bestell- und Produktinformationen, zur Überprüfung von Rückerstattungs- und Ersatzrichtlinien, zur Sendungsverfolgung und zur Ausführung von Aktionen über APIs, wodurch eine schnellere und effizientere Bearbeitung von Kundenanfragen ermöglicht wurde.",
    fr: "Lors de mon stage, j’ai développé un agent d’opérations e-commerce basé sur l’IA utilisant des LLMs, le RAG et le Tool Calling afin d’automatiser les workflows de gestion des commandes. J’ai développé des workflows permettant de comprendre les demandes des clients, de récupérer les informations sur les commandes et les produits, de vérifier les politiques de remboursement et de remplacement, de suivre les expéditions et d’exécuter des actions via des API, permettant ainsi une résolution plus rapide et plus efficace des demandes clients."
  } as Bilingual,
],
}
];

export const projectCategories = [
  "Company Project",
  "Leetcode",
  "AI",
  "Machine Learning",
  "Data analytics",
  "Python Web",
  "Web Development"
] as const;

export const projects = [

    {
title: "Voice Customer Support Agent",
category: "Company Project",
description: {
en: "AI-powered voice customer support agent for a jewelry brand using LLMs, speech recognition, tool calling, and API/database integration to handle order status, product information, availability, returns, exchanges, and delivery queries with low-latency real-time conversations.",
de: "KI-gestützter Sprach-Kundensupport-Agent für eine Schmuckmarke mit LLMs, Spracherkennung, Tool Calling und API-/Datenbankintegration zur Bearbeitung von Anfragen zu Bestellstatus, Produktinformationen, Verfügbarkeit, Rückgaben, Umtausch und Lieferungen mit geringer Latenz.",
fr: "Agent de support client vocal basé sur l’IA pour une marque de bijoux, utilisant des LLMs, la reconnaissance vocale, le Tool Calling et l’intégration d’API et de bases de données pour gérer les demandes concernant les commandes, les produits, la disponibilité, les retours, les échanges et les livraisons avec une faible latence.",
} as Bilingual,
tech: ["Python", "LLMs", "Speech-to-Text", "Text-to-Speech", "LangChain", "FastAPI", "n8n", "REST APIs", "SQL", "Docker"],
},

{
title: "Financial Document Intelligence",
category: "Company Project",
description: {
en: "Financial document analysis system combining LLM fine-tuning with LoRA and RAG to extract financial metrics, answer questions, summarize annual reports, and provide evidence-based responses from relevant financial documents.",
de: "System zur Analyse von Finanzdokumenten, das die LLM-Feinabstimmung mit LoRA und RAG kombiniert, um Finanzkennzahlen zu extrahieren, Fragen zu beantworten, Geschäftsberichte zusammenzufassen und evidenzbasierte Antworten aus relevanten Finanzdokumenten bereitzustellen.",
fr: "Système d’analyse de documents financiers combinant le fine-tuning des LLMs avec LoRA et le RAG pour extraire des indicateurs financiers, répondre aux questions, résumer les rapports annuels et fournir des réponses basées sur des sources financières pertinentes.",
} as Bilingual,
tech: ["Python", "PyTorch", "Hugging Face", "LoRA/PEFT", "LLMs", "RAG", "Embeddings", "Vector Database", "PDF Parsing", "LangChain", "FastAPI", "Docker"],
},

{
title: "ETA Prediction and Monitoring System",
category: "Company Project",
description: {
en: "Machine learning-based delivery ETA prediction and monitoring system using distance, traffic, weather, location, time, driver, restaurant, road conditions, and historical delivery data to generate probabilistic ETA predictions and monitor predicted versus actual delivery times.",
de: "Maschinelles Lernsystem zur Vorhersage und Überwachung von Lieferzeiten, das Entfernungs-, Verkehrs-, Wetter-, Standort-, Zeit-, Fahrer-, Restaurant-, Straßen- und historische Lieferdaten nutzt, um probabilistische ETA-Prognosen zu erstellen und vorhergesagte mit tatsächlichen Lieferzeiten zu vergleichen.",
fr: "Système de prédiction et de suivi des délais de livraison basé sur le machine learning, utilisant la distance, le trafic, la météo, la localisation, l’heure, le chauffeur, le restaurant, les conditions routières et les données historiques pour générer des prédictions ETA probabilistes et comparer les temps prévus aux temps réels.",
} as Bilingual,
tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "FastAPI", "SQL", "Docker"],
},

{
title: "Duplicate Document Detection System",
category: "Company Project",
description: {
en: "AI-powered document duplicate detection system that identifies duplicate and near-duplicate documents using OCR, text and image embeddings, metadata analysis, and vector similarity search to generate duplicate probability scores.",
de: "KI-gestütztes System zur Erkennung von Duplikaten und nahezu identischen Dokumenten unter Verwendung von OCR, Text- und Bild-Embeddings, Metadatenanalyse und Vektorähnlichkeitssuche zur Berechnung von Duplikat-Wahrscheinlichkeitswerten.",
fr: "Système de détection des documents en double basé sur l’IA, capable d’identifier les documents dupliqués et presque identiques à l’aide de l’OCR, des embeddings de texte et d’image, de l’analyse des métadonnées et de la recherche par similarité vectorielle afin de générer des scores de probabilité de duplication.",
} as Bilingual,
tech: ["Python", "OCR", "PyTorch", "OpenCV", "Sentence Transformers", "Embeddings", "Vector Database", "FAISS", "FastAPI", "Docker"],
},


  {
  title: "LeetCode Profile",
  category: "Leetcode",
  description: {
    en: "Personal LeetCode profile showcasing problem-solving skills, competitive programming progress, and coding achievements.",
    de: "Persönliches LeetCode-Profil mit Problemlösungsfähigkeiten, Fortschritten im Competitive Programming und Programmiererfolgen.",
    fr: "Profil LeetCode personnel mettant en valeur mes compétences en résolution de problèmes, ma progression en programmation compétitive et mes réussites en programmation.",
  } as Bilingual,
  tech: ["Python", "Data Structures", "Algorithms"],
  demo: "https://leetcode.com/u/Lvgs3033/",
},

{
  title: "Q & A Bot",
  category: "AI",
  description: {
    en: "AI-powered document question-answering system built with LangChain, FAISS, and a local LLM using Retrieval-Augmented Generation (RAG) to provide accurate, context-aware answers from uploaded policy documents.",
    de: "KI-gestütztes Dokumenten-Frage-Antwort-System mit LangChain, FAISS und einem lokalen LLM unter Verwendung von Retrieval-Augmented Generation (RAG) für kontextbezogene Antworten auf hochgeladene Dokumente.",
    fr: "Système de questions-réponses documentaire propulsé par l'IA, développé avec LangChain, FAISS et un LLM local utilisant la génération augmentée par récupération (RAG) pour fournir des réponses précises et contextuelles à partir de documents de politique téléchargés.",
  } as Bilingual,
  tech: ["Python", "Streamlit", "LangChain", "FAISS", "LLM"],
  github: "https://github.com/Lvgs3033/Q_A-Chatboat",
  demo: "https://www.linkedin.com/posts/dhvani-kakadiya-2811a8252_im-excited-to-share-my-project-company-policy-activity-7407113687913779200-EXDe",
},

{
  title: "Face Recognition Attendance System",
  category: "Machine Learning",
  description: {
    en: "Automated attendance management system using OpenCV-based facial recognition to register users, recognize faces in real time, and generate attendance records.",
    de: "Automatisiertes Anwesenheitssystem mit OpenCV-basierter Gesichtserkennung zur Registrierung von Nutzern, Echtzeiterkennung und automatischen Anwesenheitsprotokollen.",
    fr: "Système de gestion des présences automatisé utilisant la reconnaissance faciale basée sur OpenCV pour enregistrer les utilisateurs, reconnaître les visages en temps réel et générer des registres de présence.",
  } as Bilingual,
  tech: ["Python", "OpenCV", "Computer Vision", "SQLite"],
  github: "https://github.com/Lvgs3033/Face_attendance",
},

{
  title: "Beautiful Math Visualizer",
  category: "Machine Learning",
  description: {
    en: "Interactive mathematical function visualization and analysis tool that plots user-defined functions with live parsing and validation, symbolic differentiation using SymPy, numerical integration using the trapezoidal rule, animated derivative and Riemann-sum visualizations, and Fourier transform analysis using NumPy FFT.",
de: "Interaktives Tool zur Visualisierung und Analyse mathematischer Funktionen mit Live-Parsing und Validierung, symbolischer Differentiation mit SymPy, numerischer Integration mit der Trapezregel, animierten Ableitungs- und Riemann-Summen-Visualisierungen sowie Fourier-Transformationsanalyse mit NumPy FFT.",
fr: "Outil interactif de visualisation et d’analyse de fonctions mathématiques permettant de tracer des fonctions définies par l’utilisateur avec analyse et validation en temps réel, dérivation symbolique avec SymPy, intégration numérique par la méthode des trapèzes, visualisations animées de la dérivée et des sommes de Riemann, ainsi qu’une analyse de Fourier avec NumPy FFT.",
} as Bilingual,
  tech: ["Flask","SymPy","NumPy","Plotly.js"],
  github: "https://github.com/Lvgs3033/Math-visualizer",
  demo: "https://math-visualizer-gdzu.onrender.com/",
},

{
  title: "AUTODS — Autonomous Data Scientist",
  category: "Machine Learning",
  description: {
    en: "Python-based AutoML platform that transforms raw CSV files into complete machine learning pipelines with automated preprocessing, EDA, feature selection, model comparison, prediction, and interactive dashboards.",
    de: "Python-basierte AutoML-Plattform, die CSV-Dateien automatisch in vollständige Machine-Learning-Pipelines mit Datenvorverarbeitung, EDA, Feature-Auswahl, Modellvergleich und Dashboards umwandelt.",
    fr: "Plateforme AutoML basée sur Python qui transforme des fichiers CSV bruts en pipelines complets de machine learning, avec prétraitement automatisé, analyse exploratoire des données (EDA), sélection de variables, comparaison de modèles, prédiction et tableaux de bord interactifs.",
  } as Bilingual,
  tech: ["Python", "Flask", "Pandas", "Scikit-learn", "XGBoost", "Chart.js"],
  github: "https://github.com/Lvgs3033/Datascien_Pipeline",
  demo: "https://datascien-pipeline-2.onrender.com/",
},

{
  title: "Codeglass — AI Code Review Platform",
  category: "Python Web",
  description: {
    en: "AI-assisted code review platform combining static code analysis with Google Gemini to detect bugs, security vulnerabilities, code smells, and improvement opportunities.",
    de: "KI-gestützte Code-Review-Plattform, die statische Codeanalyse mit Google Gemini kombiniert, um Fehler, Sicherheitslücken und Verbesserungspotenziale zu erkennen.",
    fr: "Plateforme de revue de code assistée par IA combinant l'analyse statique du code avec Google Gemini pour détecter les bugs, les failles de sécurité, les mauvaises pratiques et les opportunités d'amélioration.",
  } as Bilingual,
  tech: ["Python", "Flask", "Google Gemini", "Static Analysis"],
  github: "https://github.com/Lvgs3033/Codeglass",
  demo: "https://codeglass.onrender.com/",
},

{
  title: "Solvit — Math Problem Solver",
  category: "Python Web",
  description: {
    en: "Web-based mathematical problem solver supporting algebra, calculus, matrices, and graph plotting using symbolic computation with SymPy.",
    de: "Webbasierter Mathematik-Löser für Algebra, Analysis, Matrizen und Graphen mit symbolischer Berechnung durch SymPy.",
    fr: "Résolveur de problèmes mathématiques en ligne prenant en charge l'algèbre, le calcul, les matrices et le tracé de graphiques grâce au calcul symbolique avec SymPy.",
  } as Bilingual,
  tech: ["Python", "Flask", "SymPy", "Matplotlib", "JavaScript"],
  github: "https://github.com/Lvgs3033/Mathsolver",
  demo: "https://mathsolver-2.onrender.com/",
},

{
  title: "NeuraDocs — Intelligent Document Assistant",
  category: "Python WebI",
  description: {
    en: "AI-powered document assistant that enables PDF-based conversations, document summarization, and context-aware question answering using Google Gemini.",
    de: "KI-gestützter Dokumentenassistent für PDF-Konversationen, Dokumentenzusammenfassungen und kontextbezogene Fragen mit Google Gemini.",
    fr: "Assistant documentaire propulsé par l'IA permettant des conversations basées sur des PDF, le résumé de documents et des réponses contextuelles aux questions grâce à Google Gemini.",
  } as Bilingual,
  tech: ["Python", "Flask", "Google Gemini", "PDF Processing"],
  github: "https://github.com/Lvgs3033/NeuraDocs-AI",
  demo: "https://neuradocs-ai.onrender.com/",
},

{
  title: "Power BI Dashboard",
  category: "Data analytics",
  description: {
    en: "A professional Power BI sales dashboard designed to provide actionable insights into sales performance, profitability, customer behavior, and regional trends through interactive visualizations and data-driven reporting.",

    de: "Ein professionelles Power BI-Verkaufsdashboard, das durch interaktive Visualisierungen und datengestützte Berichte wertvolle Einblicke in Verkaufsleistung, Rentabilität, Kundenverhalten und regionale Trends liefert.",

    fr: "Un tableau de bord commercial professionnel sous Power BI conçu pour fournir des informations exploitables sur les performances des ventes, la rentabilité, le comportement des clients et les tendances régionales grâce à des visualisations interactives et des rapports basés sur les données."
  } as Bilingual,

  tech: ["Power BI","DAX","Data Visualization","Data Modeling"],
  demo: "https://www.linkedin.com/posts/dhvani-kakadiya-2811a8252_powerbi-dataanalytics-businessintelligence-activity-7464360651411439617-4ArF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5SDYEBPKTWm7PIT0sJObLfxf9SpjbLlT0",
},

{
  title: "Finance-Dashboard",
  category: "Data analytics",
  description: {
en: "Interactive Power BI dashboard for analyzing bank loan applications, funded and received amounts, interest rates, and borrower DTI trends. Created dynamic visualizations, KPIs, and filters to analyze loan performance across months, states, loan terms, employee length, loan purpose, and home ownership, enabling data-driven insights and decision-making.",
de: "Interaktives Power-BI-Dashboard zur Analyse von Kreditanträgen, ausgezahlten und erhaltenen Beträgen, Zinssätzen und DTI-Trends von Kreditnehmern. Erstellt dynamische Visualisierungen, KPIs und Filter zur Analyse der Kreditperformance nach Monaten, Bundesstaaten, Laufzeiten, Beschäftigungsdauer, Kreditzweck und Wohneigentum für datenbasierte Erkenntnisse und Entscheidungen.",
fr: "Tableau de bord Power BI interactif pour analyser les demandes de prêts bancaires, les montants financés et reçus, les taux d’intérêt et les tendances du ratio dette/revenu (DTI) des emprunteurs. Création de visualisations dynamiques, de KPI et de filtres pour analyser la performance des prêts selon les mois, les États, les durées de prêt, l’ancienneté professionnelle, l’objectif du prêt et le statut de propriété, afin de faciliter l’analyse et la prise de décision basée sur les données.",
} as Bilingual,

  tech: ["Power BI","DAX","Data Visualization","Data Modeling","Python","SQL","KPI"],
  demo: "https://drive.google.com/file/d/1g3buA1u1-w0aaqsN8R4ZYqdFvLYcw5Pg/view?usp=drive_link",
},

{
  title: "Customer-Behavior-Dashboard",
  category: "Data analytics",
  description: {
en: "Power BI dashboard for monitoring customer behavior and business performance using KPIs, slicers, filters, visualizations, and drill-downs. Applied data modeling and DAX measures to create meaningful metrics, dynamic business insights, and business reports with visual storytelling and actionable recommendations.",
de: "Power-BI-Dashboard zur Überwachung des Kundenverhaltens und der Geschäftsperformance mithilfe von KPIs, Slicern, Filtern, Visualisierungen und Drill-downs. Datenmodellierung und DAX-Maße eingesetzt, um aussagekräftige Kennzahlen und dynamische Geschäftseinblicke zu erstellen sowie Geschäftsergebnisse durch visuelles Storytelling und umsetzbare Empfehlungen zu präsentieren.",
fr: "Tableau de bord Power BI interactif permettant de suivre le comportement des clients et la performance de l’entreprise à l’aide de KPI, de segments, de filtres, de visualisations et de fonctionnalités de drill-down. Mise en œuvre de la modélisation des données et de mesures DAX pour créer des indicateurs pertinents, des insights métier dynamiques et présenter les résultats à travers des rapports et un storytelling visuel accompagné de recommandations exploitables.",
} as Bilingual,

  tech: ["Power BI","DAX","Data Visualization","Data Modeling","Python","SQL","KPI"],
  demo: "https://github.com/Lvgs3033/Customer-Behavior-Dashboard/",
},

{
  title: "Sales Dashboard",
  category: "Data analytics",
  description: {
en: " Power BI dashboard for analyzing e-commerce sales, profit, quantity, and AOV. Used Power Query for data cleaning and transformation and DAX for calculated measures, with visualizations and interactive filters to analyze monthly, state-wise, category-wise, payment mode, and sub-category performance.",
de: "Interaktives Power-BI-Dashboard zur Analyse von E-Commerce-Umsätzen, Gewinn, Mengen und AOV. Power Query für Datenbereinigung und -transformation sowie DAX für berechnete Kennzahlen eingesetzt, ergänzt durch Visualisierungen und interaktive Filter zur Analyse der monatlichen, regionalen, kategorienbezogenen und zahlungsbezogenen Performance.",
fr: "Tableau de bord Power BI interactif pour analyser les ventes e-commerce, les bénéfices, les quantités et l’AOV. Utilisation de Power Query pour le nettoyage et la transformation des données et de DAX pour les mesures calculées, avec des visualisations et filtres interactifs pour analyser les performances mensuelles, régionales, par catégorie, mode de paiement et sous-catégorie.",
} as Bilingual,

  tech: ["Power BI","DAX","Data Modeling","Power Query"],
  demo: "https://drive.google.com/file/d/1g3buA1u1-w0aaqsN8R4ZYqdFvLYcw5Pg/view?usp=drive_link",
},

{
  title: "TextDigest AI Summarizer",
  category: "Python Web",
  description: {
    en: "AI-powered document summarization application built with Streamlit and Google Gemini for generating concise summaries from uploaded files or text.",
    de: "KI-gestützte Dokumentenzusammenfassung mit Streamlit und Google Gemini zur Erstellung prägnanter Zusammenfassungen aus Dateien oder Texten.",
    fr: "Application de résumé de documents propulsée par l'IA, développée avec Streamlit et Google Gemini, pour générer des résumés concis à partir de fichiers ou de textes téléchargés.",
  } as Bilingual,
  tech: ["Python", "Streamlit", "Google Gemini"],
  github: "https://github.com/Lvgs3033/TextDigest-AI-Summarizer",
  demo: "https://textdigest-ai-summarizer.streamlit.app/",
},

{
  title: "Resume Analyzer",
  category: "Python Web",
  description: {
    en: "AI-powered resume analyzer providing ATS evaluation, resume scoring, and personalized suggestions to improve job application success.",
    de: "KI-gestützter Lebenslauf-Analysator mit ATS-Bewertung, Lebenslaufanalyse und personalisierten Verbesserungsvorschlägen.",
    fr: "Analyseur de CV propulsé par l'IA offrant une évaluation ATS, une notation du CV et des suggestions personnalisées pour améliorer les chances de succès des candidatures.",
  } as Bilingual,
  tech: ["Python", "AI", "NLP", "React"],
  github: "https://github.com/Lvgs3033/ResumeAnalyzer",
  demo: "https://aaa-rrrrr-f4rs.vercel.app/",
},

{
  title: "AI Grammar Corrector",
  category: "Python Web",
  description: {
    en: "Grammar correction and paraphrasing web application using LanguageTool API to improve writing through automatic error detection and sentence rewriting.",
    de: "Webanwendung zur Grammatikprüfung und Paraphrasierung mit der LanguageTool API zur automatischen Fehlererkennung und Textverbesserung.",
    fr: "Application web de correction grammaticale et de paraphrase utilisant l'API LanguageTool pour améliorer l'écriture grâce à la détection automatique des erreurs et à la reformulation des phrases.",
  } as Bilingual,
  tech: ["Python", "Flask", "LanguageTool API", "JavaScript"],
  github: "https://github.com/Lvgs3033/Grammar-checker",
  demo: "https://www.linkedin.com/posts/dhvani-kakadiya-2811a8252_tech-stack-python-flask-html-css-javascript-activity-7444407184655982592-7N3m",
},

{
  title: "Deepfake Detector",
  category: "Machine Learning",
  description: {
    en: "Deep learning-based image classification system that detects whether an image is authentic or AI-generated using convolutional neural networks.",
    de: "Deep-Learning-basiertes Bildklassifikationssystem zur Erkennung von echten und manipulierten Bildern mit Convolutional Neural Networks.",
    fr: "Système de classification d'images basé sur le deep learning qui détecte si une image est authentique ou générée par IA à l'aide de réseaux de neurones convolutifs.",
  } as Bilingual,
  tech: ["Python", "CNN", "TensorFlow", "OpenCV"],
  github: "https://github.com/Lvgs3033/Deepfake_Detector",
  demo: "https://drive.google.com/file/d/1lUp9ljftitUIXOBpS5ySIHNiFAR5QSmj/view?usp=drive_link",
},

{
  title: "InterviewIQ — AI Interview Assistant",
  category: "Python Web",
  description: {
    en: "AI-powered interview preparation platform featuring speech recognition, NLP-based interview analysis, and intelligent feedback for candidate improvement.",
    de: "KI-gestützte Interviewplattform mit Spracherkennung, NLP-Analyse und intelligentem Feedback zur Verbesserung der Interviewleistung.",
    fr: "Plateforme de préparation aux entretiens propulsée par l'IA, intégrant la reconnaissance vocale, l'analyse d'entretien basée sur le NLP et des retours intelligents pour aider les candidats à progresser.",
  } as Bilingual,
  tech: ["Python", "NLP", "Speech Recognition", "Claude AI"],
  github: "https://github.com/Lvgs3033/Ai-interview",
},

{
  title: "Resume Scanner",
  category: "Python Web",
  description: {
    en: "AI-powered resume screening application that analyzes resumes, identifies key skills, and provides personalized recommendations for ATS optimization.",
    de: "KI-gestützte Anwendung zur Lebenslaufanalyse mit Kompetenzbewertung und personalisierten Empfehlungen zur ATS-Optimierung.",
    fr: "Application de tri de CV propulsée par l'IA qui analyse les CV, identifie les compétences clés et fournit des recommandations personnalisées pour l'optimisation ATS.",
  } as Bilingual,
  tech: ["Python", "Machine Learning", "NLP", "Flask"],
  github: "https://github.com/Lvgs3033/Resume_Selector",
  demo: "https://drive.google.com/file/d/1dbtL2EaS0ZKGTw5-R20khNVHSkP4GeLn/view",
},

{
  title: "House Price Predictor",
  category: "Machine Learning",
  description: {
    en: "Regression-based machine learning model for predicting house prices using historical housing data.",
    de: "Regressionsbasiertes Machine-Learning-Modell zur Vorhersage von Immobilienpreisen anhand historischer Wohnungsdaten.",
    fr: "Modèle de machine learning basé sur la régression pour prédire les prix immobiliers à partir de données historiques du marché du logement.",
  } as Bilingual,
  tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
  github: "https://github.com/dhvani1215/House-price-predictor",
},
{
  title: "Style Me",
  category: "Web Development",
  description: {
    en: "AI-powered personal styling platform that provides personalized fashion recommendations through skin tone analysis, seasonal color matching, body type assessment, and jewelry suggestions.",
    de: "KI-gestützte Styling-Plattform mit personalisierten Modeempfehlungen durch Hautfarbenanalyse, saisonale Farbberatung, Körpertypanalyse und Schmuckempfehlungen.",
    fr: "Plateforme de stylisme personnel propulsée par l'IA offrant des recommandations de mode personnalisées grâce à l'analyse du teint, à l'harmonisation des couleurs saisonnières, à l'évaluation de la morphologie et à des suggestions de bijoux.",
  } as Bilingual,
  tech: ["React", "TypeScript", "AI", "Computer Vision"],
  github: "https://github.com/Lvgs3033/Style-Me",
  demo: "https://style-me-6w49.vercel.app/",
},

{
  title: "Code Compiler",
  category: "Web Application",
  description: {
    en: "Online multi-language code compiler supporting real-time code execution and debugging with AI-assisted programming features.",
    de: "Online-Code-Compiler mit Unterstützung mehrerer Programmiersprachen, Echtzeit-Ausführung und KI-gestützten Programmierfunktionen.",
    fr: "Compilateur de code en ligne multi-langages prenant en charge l'exécution et le débogage en temps réel, avec des fonctionnalités de programmation assistées par IA.",
  } as Bilingual,
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "shadcn/ui",
    "Gemini API",
  ],
  github: "https://github.com/Lvgs3033/Code_complier",
  demo: "https://code-complier-g7oq.vercel.app/",
},

{
  title: "DSAFLOW",
  category: "Web Development",
  description: {
    en: "Interactive web application for learning, practicing, and visualizing data structures and algorithms with an intuitive user interface.",
    de: "Interaktive Webanwendung zum Lernen, Üben und Visualisieren von Datenstrukturen und Algorithmen mit einer benutzerfreundlichen Oberfläche.",
    fr: "Application web interactive pour apprendre, pratiquer et visualiser les structures de données et les algorithmes grâce à une interface utilisateur intuitive.",
  } as Bilingual,
  tech: ["React", "JavaScript", "DSA"],
  github: "https://github.com/Lvgs3033/DSAFLOW",
  demo: "https://dsaflow.vercel.app/",
},

{
  title: "ExamEdge",
  category: "Web Development",
  description: {
    en: "AI-powered English exam preparation platform featuring timed practice tests, progress tracking, performance analytics, and intelligent essay evaluation.",
    de: "KI-gestützte Plattform zur Vorbereitung auf Englischprüfungen mit Zeitprüfungen, Fortschrittsverfolgung, Leistungsanalyse und intelligenter Essaybewertung.",
    fr: "Plateforme de préparation aux examens d'anglais propulsée par l'IA, proposant des tests chronométrés, un suivi de la progression, des analyses de performance et une évaluation intelligente des essais.",
  } as Bilingual,
  tech: ["React", "JavaScript", "AI", "REST API"],
  github: "https://github.com/Lvgs3033/ExamEdge",
  demo: "https://drive.google.com/file/d/1r1nI3WoiX3ESB7vljQW3p2wyWeYZ4oYL/view?usp=drive_link",
},

{
  title: "Book Recommendation System",
  category: "Machine Learning",
  description: {
    en: "Machine learning-based book recommendation system using nearest neighbor algorithms to recommend books based on user ratings.",
    de: "Machine-Learning-basiertes Buchempfehlungssystem mit Nearest-Neighbor-Algorithmen zur Empfehlung von Büchern anhand von Nutzerbewertungen.",
    fr: "Système de recommandation de livres basé sur le machine learning, utilisant des algorithmes des plus proches voisins pour recommander des livres selon les évaluations des utilisateurs.",
  } as Bilingual,
  tech: ["Python", "Scikit-learn", "Pandas", "Nearest Neighbors"],
  github: "https://github.com/Lvgs3033/Internship-project",
  demo: "https://drive.google.com/file/d/1v8z7DaTF4CcwUzaVqmh47aBCeDeDHpZ2/view",
},

{
  title: "Twitter Sentiment Analysis",
  category: "Machine Learning",
  description: {
    en: "AI-powered sentiment analysis application that classifies tweets as positive, negative, or neutral using machine learning and natural language processing.",
    de: "KI-gestützte Sentimentanalyse zur Klassifizierung von Tweets in positiv, negativ oder neutral mithilfe von Machine Learning und NLP.",
    fr: "Application d'analyse de sentiment propulsée par l'IA qui classe les tweets comme positifs, négatifs ou neutres grâce au machine learning et au traitement du langage naturel.",
  } as Bilingual,
  tech: ["Python", "NLP", "Scikit-learn", "Flask"],
  github: "https://github.com/Lvgs3033/Twitter_sentiment-analysis",
  demo: "https://drive.google.com/file/d/1FTzHxdn7spuzN79V2YXoQ2KqKOFPuGjk/view?usp=drive_link",
},

{
  title: "Ved",
  category: "Web Application",
  description: {
    en: "Modern language translation web application with a clean user interface for translating text between multiple languages.",
    de: "Moderne Webanwendung zur Sprachübersetzung mit einer benutzerfreundlichen Oberfläche für Übersetzungen zwischen mehreren Sprachen.",
    fr: "Application web moderne de traduction linguistique dotée d'une interface épurée permettant de traduire du texte entre plusieurs langues.",
  } as Bilingual,
  tech: ["React", "JavaScript", "Translation API"],
  github: "https://github.com/Lvgs3033/Ved",
  demo: "https://ved-fsia.vercel.app/",
},

{
  title: "AI Medical Diagnosis System",
  category: "AI",
  description: {
    en: "Expert system developed with Prolog that predicts medical conditions based on symptoms and provides suggested remedies using prolog.",
    de: "Mit Prolog entwickeltes Expertensystem zur Vorhersage medizinischer Erkrankungen anhand von Symptomen sowie passenden Behandlungsvorschlägen.",
    fr: "Système expert développé avec Prolog qui prédit des affections médicales à partir des symptômes et propose des remèdes suggérés.",
  } as Bilingual,
  tech: ["Prolog", "Artificial Intelligence"],
  github: "https://github.com/Lvgs3033/Health-suggestions",
  demo: "",
},

{
  title: "Carbon Neat",
  category: "Web Application",
  description: {
    en: "A modern carbon footprint tracker that helps individuals and organizations monitor, analyze, and reduce their carbon emissions. It calculates emissions from daily activities and provides personalized insights and recommendations for adopting more sustainable practices.",
    de: "Ein moderner CO₂-Fußabdruck-Rechner, der Einzelpersonen und Unternehmen dabei unterstützt, ihre CO₂-Emissionen zu überwachen, zu analysieren und zu reduzieren. Die Anwendung berechnet Emissionen aus alltäglichen Aktivitäten und bietet personalisierte Einblicke sowie Empfehlungen für ein nachhaltigeres Verhalten.",
    fr: "Un outil moderne de suivi de l'empreinte carbone qui aide les particuliers et les organisations à surveiller, analyser et réduire leurs émissions de carbone. Il calcule les émissions liées aux activités quotidiennes et propose des analyses personnalisées ainsi que des recommandations pour adopter des pratiques plus durables.",
  } as Bilingual,
  tech: ["React", "JavaScript"],
  github: "https://github.com/Lvgs3033/Carbonneat",
  demo: "https://carbonneat.vercel.app/",
},

{
  title: "Helper",
  category: "Web Application",
  description: {
    en: "Information portal providing emergency contact numbers, required documents for government IDs, and essential information about Indian laws.",
    de: "Informationsportal mit Notfallnummern, Dokumentenanforderungen für Ausweise sowie wichtigen Informationen über indische Gesetze.",
    fr: "Portail d'information fournissant des numéros de contact d'urgence, les documents requis pour les pièces d'identité officielles et des informations essentielles sur les lois indiennes.",
  } as Bilingual,
  tech: ["React", "JavaScript"],
  github: "https://github.com/Lvgs3033/Helper",
  demo: "https://helper-ruddy.vercel.app/",
},

{
  title: "Whiteboard",
  category: "Web Development",
  description: {
    en: "Collaborative online whiteboard application enabling real-time drawing, brainstorming, and idea sharing.",
    de: "Kollaborative Online-Whiteboard-Anwendung für gemeinsames Zeichnen, Brainstorming und Ideenaustausch in Echtzeit.",
    fr: "Application de tableau blanc collaboratif en ligne permettant le dessin en temps réel, le brainstorming et le partage d'idées.",
  } as Bilingual,
  tech: ["React", "JavaScript", "Canvas API"],
  github: "https://github.com/Lvgs3033/White_Board",
  demo: "https://white-board-nine.vercel.app/",
},

];

export interface EducationEntry {
  degree: Bilingual;
  institution: string;
  location: Bilingual;
  duration: string | Bilingual;
  status?: Bilingual;
  detail: string;
  focus: string[];
}

export const education: EducationEntry[] = [
  {
    degree: { en: "Bachelor of Computer Engineering", de: "Bachelor Informatik-Ingenieurwesen", fr: "Licence en génie informatique" },
    institution: "Gujarat Technological University (GTU)",
    location: { en: "Surat, India", de: "Surat, Indien", fr: "Surat, Inde" },
    duration: "2022 – 2026",
    detail: "CGPA: 9.10 / 10",
    focus: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Python for Data Science",
      "Web Programming",
      "Data Visualization",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud Computing",
      "Software Engineering",
    ],
  },
  {
    degree: { en: "Higher Secondary School (Class 12)", de: "Höhere Sekundarschule (Klasse 12)", fr: "École secondaire supérieure (classe 12)" },
    institution: "Radiant International School",
    location: { en: "Gujarat, India", de: "Gujarat, Indien", fr: "Gujarat, Inde" },
    duration: "2021 – 2022",
    detail: "Grade A2 · 97.74 percentile · 85%",
    focus: [],
  },
  {
    degree: { en: "Secondary School (Class 10)", de: "Sekundarschule (Klasse 10)", fr: "École secondaire (classe 10)" },
    institution: "Nilkanth kanya vidhyalay",
    location: { en: "Gujarat, India", de: "Gujarat, Indien", fr: "Gujarat, Inde" },
    duration: "2019 – 2020",
    detail: "Grade A1 · 99.83 percentile · 91%",
    focus: [],
  },
];

export interface Certification {
  issuer: string;
  name: Bilingual;
  year: string;
  image: string;
}

export const certifications: Certification[] = [
 {
  issuer: "Google Cloud",
  name: {
    en: "Google Cloud Skills Boost",
    de: "Google Cloud Skills Boost",
    fr: "Google Cloud Skills Boost",
  },
  year: "2024",
  image: "/certs/c1.png",
},

{
  issuer: "Udemy",
  name: {
  en: "Deep Learning",
  de: "Tiefes Lernen",
  fr: "Apprentissage profond",
  },
  year: "2026",
  image: "/certs/m2.png",
},

{
  issuer: "Udemy",
  name: {
    en: "Machine Learning",
    de: "Maschinelles Lernen",
    fr: "Apprentissage automatique",
  },
  year: "2026",
  image: "/certs/m1.png",
},

{
  issuer: "Ministry of Electronics and Information Technology, Government of India",
  name: {
    en: "Ethical Hacking",
    de: "Ethisches Hacking",
    fr: "Piratage éthique",
  },
  year: "2025",
  image: "/certs/c11.png",
},

{
  issuer: "Microsoft",
  name: {
    en: "AI Internship",
    de: "KI-Praktikum",
    fr: "Stage en IA",
  },
  year: "2024",
  image: "/certs/AAA.png",
},

{
  issuer: "Google Developer Groups",
  name: {
    en: "Full-Stack Web Development",
    de: "Full-Stack-Webentwicklung",
    fr: "Développement Web Full-Stack",
  },
  year: "2024",
  image: "/certs/c4.png",
},


];


export const theme = {
  colors: {
    inkBg: "#0B0B0B",
    inkBgAlt: "#111111",
    creamBg: "#F5F1E8",
    creamBgAlt: "#EDE6D8",
    goldA: "#C9A227",
    goldB: "#D4AF37",
  },
};
