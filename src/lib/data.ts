import { Github, Linkedin, Mail, Phone, FileText, ExternalLink, ShieldCheck, Eye, Database, Cpu, Brain, Layers, ArrowUpRight } from "lucide-react";

export const personalInfo = {
    name: "Ruturaj Bhaskar Nawale",
    shortName: "Ruturaj Nawale",
    title: "AI Engineer",
    subtitle: "Enterprise AI Systems & Production Pipelines",
    tagline: "Architecting production-grade AI pipelines across Computer Vision, OCR, Biometric Forensics, Fraud Detection, and Banking Intelligence.",
    location: "Navi Mumbai, India 410206",
    email: "ruturajnawale888@gmail.com",
    phone: "+91-9833097874",
    phoneFormatted: "+91 98330 97874",
    about: {
        p1: "I am an AI Engineer specializing in designing and developing production-grade enterprise applications across Computer Vision, Multi-Engine OCR, Biometric Deepfake Detection, and High-Throughput Banking Analytics.",
        p2: "Proficient in Python, FastAPI, PyTorch, and OpenCV, I build scalable end-to-end pipelines that integrate machine learning models, Vision Transformers, and LLMs into explainable, mission-critical operational intelligence workflows.",
        philosophy: "Code is the conduit; architecture is the intelligence. Production AI must be robust, explainable, and engineered for real-world reliability.",
    },
    stats: [
        {
            value: 1,
            suffix: "+",
            label: "Years in AI & Systems",
            subtext: "Production & Research",
        },
        {
            value: 10,
            suffix: "+",
            label: "Production Pipelines",
            subtext: "Models & Architectures",
        },
        {
            value: 9.4,
            decimal: 2,
            suffix: "",
            label: "Academic SGPA",
            subtext: "B.Sc. Computer Science",
        },
    ],
    socials: [
        {
            label: "GitHub",
            href: "https://github.com/ruturajbhaskarnawale",
            icon: Github,
            display: "github.com/ruturajbhaskarnawale",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ruturaj-nawale-863418288/",
            icon: Linkedin,
            display: "linkedin.com/in/ruturaj-nawale",
        },
        {
            label: "Email",
            href: "mailto:ruturajnawale888@gmail.com",
            icon: Mail,
            display: "ruturajnawale888@gmail.com",
        },
        {
            label: "Phone",
            href: "tel:+919833097874",
            icon: Phone,
            display: "+91 98330 97874",
        },
    ],
};

export const chapters = [
    { id: "hero", number: "I", title: "The Signal", cue: "> 01_INIT // RESOLVING SIGNAL_" },
    { id: "about", number: "II", title: "The Origin", cue: "> 02_ORIGIN // PRODUCTION CORE_" },
    { id: "skills", number: "III", title: "The Arsenal", cue: "> 03_ARSENAL // MODEL STACK_" },
    { id: "projects", number: "IV", title: "The Proof", cue: "> 04_PROOF // DEPLOYED SYSTEMS_" },
    { id: "journey", number: "V", title: "The Path", cue: "> 05_TRAJECTORY // CAREER PATH_" },
    { id: "research", number: "VI", title: "The Frontier", cue: "> 06_FRONTIER // EMPIRICAL STUDY_" },
    { id: "contact", number: "VII", title: "Transmission", cue: "> 07_TRANSMIT // OPEN CHANNEL_" },
];

export const navigation = [
    { label: "Origin", href: "#about", number: "II" },
    { label: "Arsenal", href: "#skills", number: "III" },
    { label: "Proof", href: "#projects", number: "IV" },
    { label: "Path", href: "#journey", number: "V" },
    { label: "Frontier", href: "#research", number: "VI" },
    { label: "Transmit", href: "#contact", number: "VII" },
];

export interface SkillCategory {
    category: string;
    description: string;
    iconName: string;
    color: string;
    glowColor: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "AI & Machine Learning",
        description: "Core algorithms, vision pipelines, and intelligent inference models.",
        iconName: "Brain",
        color: "#60a5fa", // Cyan Blue
        glowColor: "rgba(96, 165, 250, 0.35)",
        items: [
            "Computer Vision",
            "Deep Learning",
            "OCR Systems",
            "NLP",
            "Large Language Models (LLMs)",
            "Generative AI",
            "Prompt Engineering",
            "Fraud Detection",
            "Deepfake Detection",
            "Predictive Analytics",
            "Risk Scoring",
        ],
    },
    {
        category: "Frameworks & Libraries",
        description: "High-performance deep learning architectures and vision libraries.",
        iconName: "Cpu",
        color: "#c084fc", // Purple
        glowColor: "rgba(192, 132, 252, 0.35)",
        items: [
            "PyTorch",
            "OpenCV",
            "PaddleOCR",
            "TrOCR",
            "LayoutLMv3",
            "InsightFace",
            "ArcFace",
            "EfficientNet",
            "Vision Transformer (ViT)",
            "XGBoost",
            "Prophet",
            "Hugging Face",
        ],
    },
    {
        category: "Backend & Data Engineering",
        description: "Asynchronous APIs, distributed data crawlers, and high-throughput pipelines.",
        iconName: "Layers",
        color: "#34d399", // Emerald Green
        glowColor: "rgba(52, 211, 153, 0.35)",
        items: [
            "Python",
            "FastAPI",
            "REST APIs",
            "JSON Data Pipelines",
            "BeautifulSoup",
            "Selenium",
            "Playwright",
            "Pandas",
            "Polars",
        ],
    },
    {
        category: "Databases & Infrastructure",
        description: "Enterprise data persistence, containerization, and cloud deployment.",
        iconName: "Database",
        color: "#fbbf24", // Amber
        glowColor: "rgba(251, 191, 36, 0.35)",
        items: [
            "MSSQL Server",
            "PostgreSQL",
            "SQLite",
            "Docker",
            "AWS",
            "Git & CI/CD",
        ],
    },
];

export interface EnterpriseProject {
    id: string;
    title: string;
    badge: string;
    domain: string;
    summary: string;
    description: string[];
    tech: string[];
    architecture: {
        stage: string;
        description: string;
    }[];
    metrics: string[];
    color: string;
}

export const enterpriseProjects: EnterpriseProject[] = [
    {
        id: "merchant-bi",
        title: "Merchant Profiling & Business Intelligence Platform",
        badge: "Enterprise BI & Crawling",
        domain: "Corporate Intelligence & Risk Scoring",
        summary: "An automated 360° business intelligence profiling engine extracting multi-source corporate footprints, domain telemetry, and GST/CIN records for real-time risk classification.",
        description: [
            "Engineered an AI-powered merchant profiling platform that generates a comprehensive 360° intelligence profile by accepting domain, GSTIN, CIN, or company identity tokens.",
            "Designed automated multi-source crawlers using BeautifulSoup, Selenium, and Playwright with REST APIs to harvest corporate records, WHOIS/DNS/SSL metadata, technology fingerprints, and public business filings.",
            "Implemented heuristic and ML-based risk assessment algorithms that evaluate digital presence authenticity and generate standardized JSON reports for enterprise risk analysts.",
        ],
        tech: ["Python", "FastAPI", "BeautifulSoup", "Selenium", "Playwright", "Pandas", "JSON", "REST APIs", "LLMs"],
        architecture: [
            { stage: "Ingestion", description: "Identity tokens (GSTIN, CIN, Domain, Company Name)" },
            { stage: "Multi-Source Extraction", description: "Parallel crawlers across registries, WHOIS, DNS & social networks" },
            { stage: "Fingerprinting", description: "Technology stack classification & SSL/security auditing" },
            { stage: "Consolidation & Risk", description: "Standardized JSON synthesis with automated risk scoring" },
        ],
        metrics: [
            "360° Corporate Footprint",
            "Multi-Source Registry Validation",
            "Automated Risk Scoring",
            "Standardized JSON Synthesis",
        ],
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "banking-recon",
        title: "AI 5V Reconciliation & Banking Intelligence Platform",
        badge: "Banking & Payment Systems",
        domain: "High-Volume Transaction Forensics",
        summary: "Enterprise AI-powered reconciliation platform for UPI, NPCI, and Core Banking Systems (CBS) featuring transaction lifecycle anomaly detection and 5 executive intelligence dashboards.",
        description: [
            "Developed an enterprise reconciliation platform for payment rails (UPI, NPCI, CBS), orchestrating end-to-end data ingestion, ledger matching, and operational forecasting.",
            "Integrated Isolation Forest and XGBoost algorithms for unsupervised transaction anomaly detection and exception triage.",
            "Constructed 5 interactive intelligence consoles: Global Overview, Transaction Tracking, Account 360° Profile, Predictive Forecasting (Prophet & ARIMA), and Resolution Intelligence.",
        ],
        tech: ["Python", "FastAPI", "SQL Server", "Polars", "XGBoost", "Prophet", "ARIMA", "Isolation Forest", "REST APIs", "LLMs"],
        architecture: [
            { stage: "Ingestion & Normalization", description: "High-throughput Polars pipelines processing multi-source banking ledgers" },
            { stage: "Reconciliation Engine", description: "Rule-based and probabilistic transaction matching across UPI/NPCI/CBS" },
            { stage: "Anomaly Detection", description: "Isolation Forest & XGBoost outlier scoring for reconciliation exceptions" },
            { stage: "5V Intelligence Suite", description: "Global, Transaction, Account 360°, Predictive & Resolution dashboards" },
        ],
        metrics: [
            "5 Dedicated Intelligence Consoles",
            "High-Throughput Polars Pipelines",
            "AI-Driven Anomaly Detection",
            "Predictive Cash-Flow Forecasting",
        ],
        color: "from-purple-500/20 to-indigo-500/20",
    },
    {
        id: "kyc-fraud",
        title: "Merchant Verification & Fraud Detection System",
        badge: "Computer Vision & KYC Forensics",
        domain: "Biometric Verification & Anti-Fraud",
        summary: "End-to-end digital KYC onboarding engine combining Dual-Engine OCR (PaddleOCR + TrOCR), LayoutLMv3 document classification, and InsightFace biometric anti-spoofing.",
        description: [
            "Architected an automated KYC verification platform managing the complete digital onboarding lifecycle from image upload to risk-based approval routing.",
            "Integrated Dual-Engine OCR combining PaddleOCR for printed text and TrOCR for irregular typography, followed by LayoutLMv3 for spatial key-value extraction.",
            "Built biometric facial comparison and liveness verification using InsightFace and ArcFace with XGBoost classifiers to detect altered documents, impersonation, and metadata tampering.",
        ],
        tech: ["Python", "FastAPI", "PaddleOCR", "TrOCR", "LayoutLMv3", "OpenCV", "InsightFace", "ArcFace", "XGBoost", "PyTorch", "Transformers"],
        architecture: [
            { stage: "Image Quality & Preprocessing", description: "OpenCV skew correction, glare mitigation, and quality gating" },
            { stage: "Dual-Engine OCR", description: "PaddleOCR + TrOCR hybrid extraction with LayoutLMv3 spatial parsing" },
            { stage: "Biometric Matching", description: "InsightFace & ArcFace 512D facial embedding cosine similarity" },
            { stage: "Fraud & Tampering Defense", description: "XGBoost classifier analyzing OCR inconsistencies and metadata" },
        ],
        metrics: [
            "Dual-Engine OCR Parsing",
            "LayoutLMv3 Spatial Understanding",
            "512D Biometric Embeddings",
            "Automated Risk-Based Approval",
        ],
        color: "from-emerald-500/20 to-teal-500/20",
    },
    {
        id: "deepfake-detection",
        title: "Deepfake Detection & Media Authenticity Verification",
        badge: "Deep Learning & Media Forensics",
        domain: "Forensic Video & Live-Stream Verification",
        summary: "Multi-model ensemble detection platform for image, video, and live-stream media analyzing facial artifacts, frequency-domain traces, and temporal inconsistencies.",
        description: [
            "Developed an end-to-end forensic media platform verifying visual authenticity across static imagery, recorded video, and real-time live-streams.",
            "Built a multi-model ensemble detection engine integrating EfficientNet, Vision Transformer (ViT), and XceptionNet with RetinaFace spatial alignment.",
            "Analyzed compression anomalies, blending boundaries, and inter-frame temporal coherence to compute unified authenticity confidence scores.",
        ],
        tech: ["Python", "FastAPI", "PyTorch", "OpenCV", "EfficientNet", "Vision Transformer (ViT)", "XceptionNet", "RetinaFace", "InsightFace", "LLMs"],
        architecture: [
            { stage: "Frame Extraction & Alignment", description: "RetinaFace landmarks detection and affine transformation alignment" },
            { stage: "Spatial Feature Extraction", description: "EfficientNet & Vision Transformer (ViT) artifact anomaly scanning" },
            { stage: "Temporal & Spectral Analysis", description: "XceptionNet inter-frame consistency and frequency-domain checks" },
            { stage: "Ensemble Confidence Scoring", description: "Weighted probabilistic classification: Genuine / Suspicious / Deepfake" },
        ],
        metrics: [
            "Multi-Model Ensemble Engine",
            "Temporal Consistency Checks",
            "Frame-by-Frame Artifact Forensics",
            "Live-Stream Ingestion Support",
        ],
        color: "from-rose-500/20 to-orange-500/20",
    },
];

export interface AcademicProject {
    title: string;
    description: string;
    tech: string[];
    links: {
        github?: string;
        demo?: string;
    };
    category: string;
}

export const academicProjects: AcademicProject[] = [
    {
        title: "CardioHealth Risk Predictor Pro",
        description: "Advanced cardiovascular risk assessment tool utilizing clinical biometric patient data to compute probabilistic health risk trajectories.",
        tech: ["Machine Learning", "FastAPI", "React", "Scikit-learn"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/CardioVascularRiskPrediction.git",
            demo: "https://github.com/ruturajbhaskarnawale/CardioVascularRiskPrediction.git",
        },
        category: "Healthcare ML",
    },
    {
        title: "Student Performance Prediction",
        description: "Machine learning model analyzing behavioral, socio-economic, and academic factors to forecast academic performance and identify at-risk learners early.",
        tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/student_performance_prediction.git",
            demo: "https://student-performance-prediction.vercel.app/",
        },
        category: "Predictive Analytics",
    },
    {
        title: "AI-Assisted Rehabilitation Platform",
        description: "Computer vision system using pose estimation and joint angle kinematics to guide patients through orthopedic exercises with real-time feedback.",
        tech: ["Python", "OpenCV", "React", "Flask"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/rehabilation_project.git",
            demo: "https://rehabilation-frontend.vercel.app/",
        },
        category: "Computer Vision",
    },
    {
        title: "Text-to-Image Generative AI",
        description: "Deep learning generative model synthesizing realistic imagery from descriptive natural language prompts using diffusion techniques.",
        tech: ["PyTorch", "Diffusion Models", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale",
            demo: "https://github.com/ruturajbhaskarnawale",
        },
        category: "Generative AI",
    },
    {
        title: "Heart Disease Classification",
        description: "Supervised classification model evaluating cardiac risk indicators for clinical decision support.",
        tech: ["Machine Learning", "FastAPI", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/Heart-disease-Prediction.git",
            demo: "https://github.com/ruturajbhaskarnawale/Heart-disease-Prediction.git",
        },
        category: "Healthcare ML",
    },
    {
        title: "Campus Project Hub",
        description: "Centralized collaboration platform for university student developers to showcase projects and coordinate development ecosystems.",
        tech: ["Next.js", "MongoDB", "Tailwind CSS"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/campus.git",
            demo: "https://campus-frontend-ten.vercel.app/",
        },
        category: "Full-Stack Web",
    },
];

export interface JourneyMilestone {
    year: string;
    title: string;
    company: string;
    location: string;
    type: "role" | "education";
    badge: string;
    description: string;
    bullets: string[];
    tech: string[];
}

export const journey: JourneyMilestone[] = [
    {
        year: "May 2026 – Present",
        title: "AI Engineer",
        company: "Jode Technologies Pvt. Ltd.",
        location: "Navi Mumbai, India",
        type: "role",
        badge: "Production AI Engineering",
        description: "Designing, building, and deploying end-to-end production AI platforms across merchant KYC verification, deepfake detection, merchant profiling, and banking reconciliation.",
        bullets: [
            "Developed production-grade AI platforms for merchant KYC verification, deepfake detection, merchant profiling, and banking reconciliation using Python, FastAPI, PyTorch, OpenCV, OCR, LLMs, and Machine Learning.",
            "Designed scalable end-to-end AI pipelines integrating computer vision, OCR, document understanding, fraud detection, predictive analytics, risk scoring, REST APIs, and explainable AI for intelligent automation.",
        ],
        tech: ["Python", "FastAPI", "PyTorch", "OpenCV", "PaddleOCR", "TrOCR", "LayoutLMv3", "InsightFace", "XGBoost", "LLMs"],
    },
    {
        year: "April 2025 – June 2025",
        title: "Web Developer (Intern)",
        company: "ReaEspresso PropTech Pvt. Ltd.",
        location: "Navi Mumbai, India",
        type: "role",
        badge: "Software Engineering",
        description: "Contributed to production web application development, UI performance optimization, and client-facing feature engineering in an agile sprint environment.",
        bullets: [
            "Contributed to the development and optimization of production web pages in a collaborative, agile environment.",
            "Implemented responsive, accessible UI components aligned with business and performance requirements.",
            "Collaborated closely with designers and senior engineers to deliver client-facing features within strict project timelines.",
        ],
        tech: ["React", "JavaScript", "TypeScript", "Responsive UI", "Agile Sprints"],
    },
    {
        year: "June 2023 – July 2026",
        title: "Bachelor's in Computer Science (B.Sc. CS)",
        company: "Changu Kana Thakur College of Arts, Commerce & Science",
        location: "Navi-Mumbai, Maharashtra, India",
        type: "education",
        badge: "Academic Degree • SGPA: 9.40",
        description: "Completed degree in Computer Science with a strong academic distinction of 9.40 SGPA, specializing in algorithms, machine learning, and computing systems.",
        bullets: [
            "Maintained an exceptional academic record with a cumulative 9.40 SGPA across computing coursework.",
            "Comprehensive foundation in Algorithms, Data Structures, Machine Learning, Computer Vision, Database Systems, and Distributed Computing.",
        ],
        tech: ["Data Structures", "Algorithms", "Machine Learning", "Mathematics", "Operating Systems"],
    },
];

export interface ResearchPublication {
    title: string;
    description: string;
    conference: string;
    date: string;
    link: string;
    badge: string;
    highlights: string[];
}

export const research: ResearchPublication[] = [
    {
        title: "Consumer Sentiment Insights on Smart Ring Using Supervised Classifiers",
        description: "Co-authored a comprehensive research study analyzing consumer sentiment on wearable smart ring technology using multiple supervised machine learning classifiers, conducting empirical comparative evaluation and presenting insights at a national technical conference.",
        conference: "National Conference on Robotics & AI",
        date: "March 2025",
        link: "https://www.ijsred.com/rcs-2025-part1.html",
        badge: "Conference Publication",
        highlights: [
            "Conducted sentiment classification across multi-model supervised ML algorithms",
            "Comparative evaluation of classifier performance on real-world wearable telemetry",
            "Presented empirical findings at the National Conference on Robotics & AI (March 2025)",
        ],
    },
];
