# PORTFOLIO_AUDIT.md

> **Audit Date:** August 15, 2026  
> **Repository:** `Ruturaj Nawale Portfolio`  
> **Status:** Discovery & Audit Complete (No code modifications made)  
> **Auditor:** Senior Frontend Architect & UX Auditor (Antigravity AI)

---

## 1. Tech Stack Overview

### Framework, Library & Core Dependencies
The application is a modern Single Page Application (SPA) built on top of the **Next.js App Router** with React 19 Canary, TypeScript, and Three.js 3D graphics rendering.

* **Core Framework:** Next.js `16.1.6` (App Router configuration)
* **UI Library:** React `19.3.0-canary-65db1000-20260206` & React-DOM `19.3.0-canary-65db1000-20260206`
* **Language & Build Tooling:** TypeScript `^5`, Turbopack (`next dev` / `next build`), PostCSS `^8`, Autoprefixer `^10.4.20`
* **3D & Canvas Stack:** Three.js `^0.182.0`, `@react-three/fiber` `^9.5.0`, `@react-three/drei` `^10.7.7`, `maath` `^0.10.8`
* **Animation & Motion:** `framer-motion` `^11.0.0`
* **Styling Utilities:** Tailwind CSS `^3.4.1`, `clsx` `^2.1.0`, `tailwind-merge` `^2.2.0`, `class-variance-authority` `^0.7.0`, `tailwindcss-animate` `^1.0.7`
* **Icons:** `lucide-react` `^0.300.0`
* **Smooth Scroll (Unused Dependency):** `lenis` `^1.3.17`

### Complete Package Dependency Inventory (`package.json`)

| Package Name | Version | Type | Status / Audit Notes |
| :--- | :--- | :--- | :--- |
| `next` | `^16.1.6` | Production | Current major version |
| `react` | `^19.3.0-canary-65db1000-20260206` | Production | **Flagged:** Using experimental Canary build |
| `react-dom` | `^19.3.0-canary-65db1000-20260206` | Production | **Flagged:** Using experimental Canary build |
| `@react-three/fiber` | `^9.5.0` | Production | React 19 compatibility warnings / peer dep mismatch |
| `@react-three/drei` | `^10.7.7` | Production | Helper utilities for R3F |
| `three` | `^0.182.0` | Production | 3D WebGL engine |
| `@types/three` | `^0.182.0` | Production | TypeScript declarations |
| `framer-motion` | `^11.0.0` | Production | Motion animation engine |
| `lucide-react` | `^0.300.0` | Production | Icon set |
| `lenis` | `^1.3.17` | Production | **Flagged:** Installed in `package.json` but **never imported** |
| `clsx` | `^2.1.0` | Production | Class utility |
| `tailwind-merge` | `^2.2.0` | Production | Class merge utility |
| `class-variance-authority` | `^0.7.0` | Production | Variant helper |
| `@radix-ui/react-slot` | `^1.0.2` | Production | Radix Slot primitive for UI components |
| `maath` | `^0.10.8` | Production | Math utilities for 3D graphics |
| `typescript` | `^5` | Development | Type checking |
| `@types/node` | `^20` | Development | Node type definitions |
| `@types/react` | `^19` | Development | React type definitions |
| `@types/react-dom` | `^19` | Development | React DOM type definitions |
| `tailwindcss` | `^3.4.1` | Development | CSS Framework |
| `autoprefixer` | `^10.4.20` | Development | CSS vendor prefixer |
| `postcss` | `^8` | Development | CSS processor |
| `tailwindcss-animate` | `^1.0.7` | Development | Tailwind animation plugin |
| `eslint` | `^9.39.2` | Development | Linter |
| `eslint-config-next` | `^16.1.6` | Development | Next.js ESLint rules |

### Routing Setup
* **Model:** Single-Page Application (SPA) anchor routing inside Next.js App Router (`src/app/page.tsx`).
* **Section Anchors:** `#hero`, `#about`, `#skills`, `#projects`, `#journey`, `#research`, `#contact`.
* **Smooth Scrolling:** Handled via JavaScript smooth scroll (`window.scrollTo({ top: offsetTop, behavior: "smooth" })`) inside `Navbar.tsx` and CSS `scroll-behavior: smooth` in `src/app/globals.css`.
* **URL Rewrites:** `vercel.json` maps `/resume` to `/RuturajNawale_30_01_2026_Resume.pdf`.

### Styling Approach & Variables
* **Framework:** Tailwind CSS v3 with CSS variables defined in HSL format inside `src/app/globals.css`.
* **Theme:** Hardcoded Dark Mode (`darkMode: ["class"]` in `tailwind.config.ts`, `bg-[#050505]` background on `body`).
* **Global Background Overlay:** SVG noise texture loaded via external URL (`https://grainy-gradients.vercel.app/noise.svg`).
* **Custom SVG Grids:** Data URI inline SVG background grid `.bg-grid-white` defined in `globals.css`.

### Deployment & Infrastructure Config
* **Vercel Deployment (`vercel.json`):**
  * Region: `iad1` (US East)
  * Framework: `nextjs`
  * Deploy Command: `npm run build`
  * Dev Command: `npm run dev`
  * Install Command: `npm install`
  * Cache Headers: 1-year immutable caching for `/fonts/` and `/*.pdf`
  * Rewrite: `/resume` -> `/RuturajNawale_30_01_2026_Resume.pdf`
* **Node Engine:** `>=18.17.0`, `npm >=9.0.0`

### Environment Variables & External Services (`.env.example`)
* `NEXT_PUBLIC_SITE_URL`: Fallback to `https://ruturaj-nawale.vercel.app` (in `src/app/layout.tsx`).
* `NEXT_PUBLIC_SITE_NAME`: Default `"Ruturaj Nawale Portfolio"`.
* **Analytics Placeholders:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` (commented out).
* **Contact Service Placeholders:** `RESEND_API_KEY`, `CONTACT_EMAIL`, `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL` (commented out).
* **Current Operational State:** No external contact API is actively wired in code. The Contact component handles clicks by copying the email address directly to the clipboard.

---

## 2. Repo Structure

```
Ruturaj Nawale Portfolio/
├── .env.example              # Environment variable documentation template
├── .eslintrc.json            # ESLint configuration (extends next/core-web-vitals)
├── .gitignore                # Git exclusion rules
├── .npmrc                    # NPM package manager configuration
├── components.json           # Shadcn UI configuration file
├── next.config.mjs           # Next.js configuration (images, headers, turbopack)
├── package.json              # Dependencies and scripts manifest
├── postcss.config.mjs        # PostCSS configuration with Tailwind CSS & Autoprefixer
├── tailwind.config.ts        # Tailwind theme extension & custom color definitions
├── tsconfig.json             # TypeScript compiler options and path aliases (@/*)
├── vercel.json               # Vercel deployment configuration & rewrites
│
├── public/                   # Static assets directory
│   ├── campus.png            # Project preview image (1.43 MB)
│   ├── cardio.png            # Project preview image (87.5 KB)
│   ├── gsbg.jpeg             # Project preview image (214 KB)
│   ├── hd.jpeg               # Project preview image (45.3 KB)
│   ├── hero-image.jpeg       # Hero image asset (59.3 KB)
│   ├── hero-portrait.png     # OpenGraph & Twitter social preview image (59.3 KB)
│   ├── rehab.jpeg            # Project preview image (80.8 KB)
│   ├── robots.txt            # Search engine crawler instructions
│   ├── site.webmanifest      # PWA web manifest file
│   ├── student-perf.png      # Project preview image (754.8 KB)
│   └── text2img.jpeg         # Project preview image (192.8 KB)
│
├── src/                      # Application source code
│   ├── app/                  # Next.js App Router root
│   │   ├── globals.css       # Global styles, Tailwind directives, CSS HSL variables
│   │   ├── layout.tsx        # Root layout, Inter font, SEO metadata
│   │   └── page.tsx          # Main single-page application view
│   │
│   ├── components/           # React UI Components
│   │   ├── layout/           # Shared structural components
│   │   │   ├── Footer.tsx    # Page footer with copyright and back-to-top button
│   │   │   └── Navbar.tsx    # Floating navigation bar with desktop links & mobile drawer
│   │   │
│   │   ├── sections/         # Section views loaded on the home page
│   │   │   ├── About.tsx     # Bento grid presentation of mission, stats, and philosophy
│   │   │   ├── Contact.tsx   # Contact CTA, IST clock, copy email magnet & social links
│   │   │   ├── Hero.tsx      # Container pinning 3D canvas and scroll transitions
│   │   │   ├── Hero3D.tsx    # Three.js 12,000 particle sphere shader Canvas
│   │   │   ├── HeroOverlay.tsx # Parallax scroll text overlay & spotlight gradient
│   │   │   ├── Insights.tsx  # Blog/Articles section (Commented out in page.tsx)
│   │   │   ├── Journey.tsx   # Timeline of experience, education, and credentials
│   │   │   ├── Projects.tsx  # Horizontal scroll showcase of selected works
│   │   │   ├── Research.tsx  # Academic publications and conference paper card
│   │   │   ├── ScrollyVideo.tsx # Video scroll sync component (Unused)
│   │   │   ├── Skills.tsx    # Interactive 3D particle text sphere (R3F Trackball)
│   │   │   └── Testimonials.tsx # Testimonials grid (Unused / Not rendered)
│   │   │
│   │   └── ui/               # Reusable UI primitives
│   │       ├── badge.tsx     # Shadcn Badge component (Unused)
│   │       ├── button.tsx    # Shadcn Button component (Unused)
│   │       ├── card.tsx      # Shadcn Card component (Unused)
│   │       ├── input.tsx     # Shadcn Input component (Unused)
│   │       ├── SplitText.tsx # Framer Motion word/letter text reveal animation
│   │       └── textarea.tsx  # Shadcn Textarea component (Unused)
│   │
│   └── lib/                  # Shared data and utility functions
│       ├── data.ts           # Central source of truth for portfolio content & arrays
│       └── utils.ts          # Classname merger helper (`cn`)
│
└── temp_ref_repo/            # [ANOMALY] Embedded separate git repo inside root directory
```

### Anomaly / Workspace Noise Note
The repository root contains multiple unused log files (`build_error_v2.log`, `build_final.log`, `build_log.txt`, `build_output.log`, `build_output.txt`, `build_test.log`, `dev_error.log`, `install.log`, `lint_log_v2.txt`, `lint_output.log`, `type_check.log`, `verify.js`) and a sub-directory named `temp_ref_repo` which is an isolated clone of another repository.

---

## 3. Content Inventory (per section/page)

### 3.1 Global & Meta Configuration

#### Navigation & Header Bar (`src/components/layout/Navbar.tsx`)
* **Logo Text:** `"RN."`
* **Navigation Links:**
  1. `"About"` -> `#about`
  2. `"Skills"` -> `#skills`
  3. `"Projects"` -> `#projects`
  4. `"Journey"` -> `#journey`
  5. `"Research"` -> `#research`
  6. `"Contact"` -> `#contact`
* **CTA Button:** `"Let's Talk"` (Scrolls to `#contact`)

#### Footer (`src/components/layout/Footer.tsx`)
* **Copyright Line:** `© 2026 Ruturaj Nawale. All rights reserved.` (Dynamically rendered using `new Date().getFullYear()`)
* **Back to Top Control:** Button with `"Back to Top"` text and `ArrowUp` icon.

#### SEO Metadata (`src/app/layout.tsx`)
* **Title:** `Ruturaj Nawale Portfolio` (Template: `%s | Ruturaj Nawale Portfolio`)
* **Description:** `"Full-stack developer specializing in AI/ML, cloud architecture, and modern web technologies. Explore my projects, research, and professional journey."`
* **Keywords:** `["Ruturaj Nawale", "Full Stack Developer", "AI/ML Engineer", "React Developer", "Next.js", "TypeScript", "Cloud Architecture", "Portfolio"]`
* **Author / Creator / Publisher:** `"Ruturaj Nawale"`
* **OpenGraph Image:** `${siteUrl}/hero-portrait.png`
* **Twitter Card:** `summary_large_image`
* **Favicon & Webmanifest:** Icon: `/favicon.ico`, Apple touch icon: `/apple-touch-icon.png`, Manifest: `/site.webmanifest`
* **Robots Config:** Index: `true`, Follow: `true` (Points to `https://your-domain.vercel.app/sitemap.xml`)

---

### 3.2 Hero Section (`src/components/sections/Hero.tsx`, `Hero3D.tsx`, `HeroOverlay.tsx`)

#### Literal Text Copy
* **Slide 1 (Identity):**
  * Headline: `"RUTURAJ NAWALE"`
  * Subtitle: `"AI-ENABLED FULL-STACK ENGINEER"`
* **Slide 2 (Statement - Left Aligned):**
  * Headline Line 1: `"INTELLIGENCE"`
  * Headline Line 2: `"ARCHITECT"` (Highlighted in Blue)
  * Paragraph: `"Constructing the digital nervous systems of tomorrow with scalable code and adaptive AI modules."`
* **Slide 3 (Value Prop - Right Aligned):**
  * Headline Line 1: `"FULL STACK"`
  * Headline Line 2: `"MASTERY"` (Highlighted in Purple)
  * Terminal Lines:
    * `"> Systems designed for scale."`
    * `"> UI crafted for impact."`
* **Scroll Indicator:** `"INITIALIZE"`

---

### 3.3 About Section (`src/components/sections/About.tsx` & `src/lib/data.ts`)

#### Literal Text Copy
* **Header Tag:** `"01. THE ARCHITECT"`
* **Mission Log (`personalInfo.about`):**
  * Paragraph 1: `"I am a passionate Full-Stack Engineer with a strong focus on Artificial Intelligence and Machine Learning. My journey involves bridging the gap between complex algorithms and intuitive user experiences."`
  * Paragraph 2: `"With a founder's mindset, I look for opportunities to innovate and optimize. Whether it's developing predictive models for healthcare or building scalable web platforms for campus communities, I am driven by impact."`
* **Stats Cards:**
  * Card 1 Value: `"1+"` | Label: `"YEARS EXP"`
  * Card 2 Value: `"10+"` | Label: `"SYSTEMS BUILT"`
* **Tech Stack Badges (`ACTIVE_MODULES`):** `["Next.js", "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "Sqlite", "TailwindCSS", "deep learning", "machine learning", "Gen AI", "RAG", "Framer Motion", "...and more"]`
* **Core Philosophy Quote:** `"/ CORE_PHILOSOPHY"` -> `"Code is not just functionality; it's the architecture of intelligence."`

---

### 3.4 Skills Section (`src/components/sections/Skills.tsx` & `src/lib/data.ts`)

#### Literal Text Copy & Categorization
* **Header:** `"Skills"`
* **Subheader:** `"( Drag to Rotate )"`

#### Structured Data Object (`skills` array in `src/lib/data.ts`):
```typescript
export const skills = [
    {
        category: "Machine Learning & AI",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Generative AI", "Predictive Modeling"],
    },
    {
        category: "Full-Stack & Systems",
        items: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        category: "Programming & Data",
        items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Data Structures", "Algorithms"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD"],
    },
];
```
*(Note: In `Skills.tsx`, all 27 skill items are flattened into a 3D interactive Fibonacci spherical word cloud using Three.js / React Three Fiber).*

---

### 3.5 Projects Section (`src/components/sections/Projects.tsx` & `src/lib/data.ts`)

#### Section Header
* **Heading:** `"SELECTED WORKS"`

#### Complete Projects Data Inventory (`projects` array in `src/lib/data.ts`)

```typescript
export const projects = [
    {
        title: "Campus Project Hub",
        description: "A centralized platform for students to showcase projects, collaborate, and find resources within the campus ecosystem.",
        tech: ["Next.js", "MongoDB", "Tailwind CSS"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/campus.git",
            demo: "https://campus-frontend-ten.vercel.app/",
        },
        image: "/campus.png",
    },
    {
        title: "GSBG Official Website",
        description: "Official website for GSBG, featuring modern design, responsive layout, and optimized performance.",
        tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/GSBG.git",
            demo: "https://gsbg.in",
        },
        image: "/gsbg.jpeg",
    },
    {
        title: "AI-Assisted Rehabilitation Platform",
        description: "An innovative system using computer vision to guide patients through rehabilitation exercises with real-time feedback.",
        tech: ["Python", "OpenCV", "React", "Flask"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/rehabilation_project.git",
            demo: "https://github.com/ruturajbhaskarnawale?tab=repositorieshttps://rehabilation-frontend.vercel.app/", // [MALFORMED URL]
        },
        image: "/rehab.jpeg",
    },
    {
        title: "Text-to-Image Generative AI",
        description: "A deep learning model capable of generating realistic images from natural language descriptions.",
        tech: ["PyTorch", "GANs/Diffusion", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale?tab=repositories",
            demo: "https://github.com/ruturajbhaskarnawale?tab=repositories",
        },
        image: "/text2img.jpeg",
    },
    {
        title: "CardioHealth Risk Predictor Pro",
        description: "Advanced cardiovascular risk assessment tool utilizing patient data to provide accurate health risk probabilities.",
        tech: ["Machine Learning", "FastAPI", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/CardioVascularRiskPrediction.git",
            demo: "https://github.com/ruturajbhaskarnawale/CardioVascularRiskPrediction.git",
        },
        image: "/cardio.png",
    },
    {
        title: "Heart Disease Prediction",
        description: "Machine learning model to predict the likelihood of heart disease based on patient data.",
        tech: ["Machine Learning", "FastAPI", "React"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/Heart-disease-Prediction.git",
            demo: "https://github.com/ruturajbhaskarnawale/Heart-disease-Prediction.git",
        },
        image: "/hd.jpeg",
    },
    {
        title: "Student Performance Prediction",
        description: "Machine learning model to analyze student data and predict academic performance, identifying at-risk students EARLY.",
        tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        links: {
            github: "https://github.com/ruturajbhaskarnawale/student_performance_prediction.git",
            demo: "https://student-performance-prediction.vercel.app/",
        },
        image: "/student-perf.png",
    },
];
```

---

### 3.6 Journey Section (`src/components/sections/Journey.tsx` & `src/lib/data.ts`)

#### Section Header
* **Heading:** `"My Journey"`
* **Subtext:** `"Tracing the path from humble beginnings to engineering intelligent systems."`

#### Complete Timeline Inventory (`journey` array in `src/lib/data.ts`)

```typescript
export const journey = [
    {
        year: "2025",
        title: "Salesforce Administrator",
        company: "gsbg.in",
        description: "Designed and implemented scalable Salesforce automation using Flows and custom Lightning Pages to streamline lead assignment and approvals, enhance sales team usability, and improve overall operational efficiency and user experience.",
    },
    {
        year: "2025",
        title: "Web Developer",
        company: "reaEspresso PropTech Pvt. Ltd.",
        description: "Contributed to the development and optimization of production web pages by implementing responsive, high-performance UI components and collaborating closely with designers and developers to deliver client-facing features on schedule in an agile environment.",
    },
    {
        year: "2023-26",
        title: "Bachelor of Computer Science",
        company: "mumbai university",
        description: "Currently pursuing a Bachelor’s degree in Computer Science at the University of Mumbai, maintaining a strong academic record with a 9.40 SGPA, and building a solid foundation in software engineering, data structures, and modern computing systems (June 2023 – July 2026).",
    },
    {
        year: "2023-24",
        title: "HSC",
        company: "maharashtra board",
        description: "Completed Higher Secondary Education with a strong foundation in mathematics, science, and technology with 73%.",
    },
    {
        year: "2022-23",
        title: "SSC",
        company: "maharashtra board",
        description: "Completed Secondary School Education with a strong foundation in mathematics, science, and technology with 83.80%.",
    },
];
```

---

### 3.7 Research & Publications Section (`src/components/sections/Research.tsx` & `src/lib/data.ts`)

#### Section Header
* **Heading:** `"Research & Publications"`
* **Subtext:** `"Contributing to the academic community through rigorous study and technical exploration."`

#### Structured Data Object (`research` array in `src/lib/data.ts`)

```typescript
export const research = [
    {
        title: "Consumer Sentiment Insights on Smart Ring Using Supervised Classifiers",
        description: "Co-authored a research paper analysing consumer sentiment using supervised machine learning models; conducted comparative evaluation of classifiers on real-world data and presented findings at the National Conference on Robotics & AI.",
        conference: "National Conference on Robotics & AI",
        date: "March 2025",
        link: "https://www.ijsred.com/rcs-2025-part1.html",
    }
];
```

---

### 3.8 Contact Section (`src/components/sections/Contact.tsx` & `src/lib/data.ts`)

#### Literal Text Copy
* **Availability Badge:** `"Available for work"` (Pulsing green indicator)
* **Local Time Widget:** `"Local time: {time} (IST)"` (Live clock formatted to `Asia/Kolkata`)
* **Main Heading:** `"LET'S WORK TOGETHER"`
* **Email Magnet Label:** `"Drop me a line"`
* **Email Target:** `ruturajnawale@gmail.com` (Copies to clipboard on click, displaying `"COPIED!"`)

#### Social Links Array (`personalInfo.socials` in `src/lib/data.ts`)
1. **GitHub:** `https://github.com/ruturajbhaskarnawale`
2. **LinkedIn:** `https://www.linkedin.com/in/ruturaj-nawale-863418288/`
3. **Twitter:** `https://twitter.com/` (Placeholder URL)
4. **Email:** `mailto:ruturajnawale@gmail.com`

---

### 3.9 Unused / Commented Code Assets

#### 1. Insights / Blog Component (`src/components/sections/Insights.tsx`)
* **Status:** Commented out in `src/app/page.tsx` (`{/* <Insights /> */}`).
* **Content:** Two blog cards:
  1. `"The Future of AI in Healthcare"` (Oct 12, 2024, 5 min read, missing image `/images/blog-ai-health.png`).
  2. `"Optimizing Next.js for Performance"` (Sep 28, 2024, 4 min read, missing image `/images/blog-nextjs.png`).

#### 2. Testimonials Component (`src/components/sections/Testimonials.tsx`)
* **Status:** File present in repository but **never imported** in `src/app/page.tsx`.
* **Content:** Two client quotes:
  1. Quote: `"Ruturaj is an exceptional engineer who bridges the gap between AI theory and practical application perfectly."` | Author: `"Project Manager"` (`Tech Solutions Inc.`)
  2. Quote: `"The attention to detail in the UI/UX of the GSBG website was outstanding. Highly recommended."` | Author: `"Client Name"` (`GSBG Director`)

#### 3. ScrollyVideo Component (`src/components/sections/ScrollyVideo.tsx`)
* **Status:** Unused component for syncing video playback frame-by-frame with page scroll position.

---

## 4. Design System

### 4.1 Color Palette & Tokens

The application enforces a dark aesthetic with deep black backgrounds, glassmorphic dark containers, and electric blue/purple accent glows.

| Color Variable / Utility | Hex / HSL Equivalent | Usage Context |
| :--- | :--- | :--- |
| `bg-[#050505]` | `#050505` | Primary body canvas background |
| `--background` / `bg-black` | `hsl(0 0% 3.9%)` / `#000000` | Section backgrounds, canvas overlays |
| `bg-[#0a0a0a]` | `#0a0a0a` | Navbar menu, Journey section, Footer background |
| `--foreground` | `hsl(0 0% 98%)` / `#fafafa` | Primary heading and high-contrast text |
| `text-gray-200` / `text-gray-300` | `#e5e7eb` / `#d1d5db` | Subheadings, card body copy |
| `text-gray-400` / `text-neutral-500` | `#9ca3af` / `#737373` | Muted labels, timeline dates, copyright text |
| `text-blue-500` / `from-blue-400` | `#3b82f6` / `#60a5fa` | Primary accent color, section numbers, buttons |
| `text-purple-500` / `from-purple-400` | `#a855f7` / `#c084fc` | Secondary accent color, company badges, glows |
| `text-green-400` / `bg-green-500` | `#4ade80` / `#22c55e` | Availability status badge indicator |
| `border-white/10` / `border-white/5` | `rgba(255,255,255,0.1)` | Glassmorphic card borders, dividers |
| `bg-white/5` / `bg-white/10` | `rgba(255,255,255,0.05)` | Glassmorphic card containers with backdrop blur |

### 4.2 Typography & Type Scale
* **Font Family:** Inter (`next/font/google`), loaded with variable `--font-sans` and set on `body`.
* **Monospace Font:** Fallback browser monospace used for system tags (`/ MISSION_LOG`, `/ ACTIVE_MODULES`, code highlights).

#### Type Scale Breakdown
* **Display Hero Headlines:** `text-[12vw] leading-[0.85] font-bold` (RUTURAJ NAWALE)
* **Giant Section Headlines:** `text-6xl md:text-9xl font-bold` (INTELLIGENCE ARCHITECT, LET'S WORK TOGETHER)
* **Section Headers:** `text-4xl md:text-6xl font-bold` (01. THE ARCHITECT, SELECTED WORKS)
* **Sub-section Headers:** `text-3xl md:text-5xl font-bold` (Project titles)
* **Card Titles:** `text-2xl md:text-4xl font-bold` (Research paper, Journey item titles)
* **Body Copy:** `text-lg md:text-xl font-light leading-relaxed` (About bio, project descriptions)
* **Tags & Badges:** `text-xs font-mono uppercase tracking-wider`

### 4.3 Spacing, Grid & Responsive Layout System
* **Section Padding Convention:** `py-32 px-4 md:px-12` across major section wrappers.
* **Container Bounds:** `max-w-7xl` centered with `mx-auto` for main content alignment.
* **Bento Grid System (`About.tsx`):** `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]`.
* **Horizontal Scroll Track (`Projects.tsx`):** `h-[400vh]` vertical track translated to `-85%` horizontal `x` transform.
* **Pinned 3D Canvas Track (`Hero.tsx`):** `h-[300vh]` height container with `sticky top-0 h-screen` viewport overlay.

### 4.4 Component Inventory

| Component Name | File Path | Props / Variants | Operational Status / Usage |
| :--- | :--- | :--- | :--- |
| `Navbar` | `src/components/layout/Navbar.tsx` | None | Active (Floating nav header with mobile drawer) |
| `Footer` | `src/components/layout/Footer.tsx` | None | Active (Copyright and smooth top scroll) |
| `Hero` | `src/components/sections/Hero.tsx` | None | Active (3D particle container) |
| `Hero3D` | `src/components/sections/Hero3D.tsx` | `scrollYProgress` | Active (12k Three.js shader particle canvas) |
| `HeroOverlay` | `src/components/sections/HeroOverlay.tsx` | `scrollYProgress` | Active (Parallax text overlay) |
| `About` | `src/components/sections/About.tsx` | None | Active (Bento grid presentation) |
| `BentoCard` | `src/components/sections/About.tsx` | `children, className, delay` | Active sub-component |
| `TechBadge` | `src/components/sections/About.tsx` | `name` | Active sub-component |
| `Skills` | `src/components/sections/Skills.tsx` | None | Active (3D R3F text cloud) |
| `Projects` | `src/components/sections/Projects.tsx` | None | Active (Horizontal scroll slider) |
| `ProjectCard` | `src/components/sections/Projects.tsx` | `project, index` | Active sub-component |
| `Journey` | `src/components/sections/Journey.tsx` | None | Active (Central vertical timeline) |
| `TimelineItem` | `src/components/sections/Journey.tsx` | `item, index` | Active sub-component |
| `Research` | `src/components/sections/Research.tsx` | None | Active (Academic publication card) |
| `Contact` | `src/components/sections/Contact.tsx` | None | Active (Copy email magnet & IST clock) |
| `SplitText` | `src/components/ui/SplitText.tsx` | `children, className, delay` | Active (Text reveal animation utility) |
| `Badge` | `src/components/ui/badge.tsx` | `variant` (default, secondary, etc.) | **Unused** primitive |
| `Button` | `src/components/ui/button.tsx` | `variant, size, asChild` | **Unused** primitive |
| `Card` | `src/components/ui/card.tsx` | `CardHeader, CardTitle, etc.` | **Unused** primitive |
| `Input` | `src/components/ui/input.tsx` | Standard input attributes | **Unused** primitive |
| `Textarea` | `src/components/ui/textarea.tsx` | Standard textarea attributes | **Unused** primitive |
| `Insights` | `src/components/sections/Insights.tsx` | None | **Commented Out** in `page.tsx` |
| `Testimonials` | `src/components/sections/Testimonials.tsx` | None | **Unused** / Not imported |
| `ScrollyVideo` | `src/components/sections/ScrollyVideo.tsx` | `src, children` | **Unused** |

### 4.5 Iconography, Assets & Animations
* **Icon Library:** `lucide-react` (`Github`, `Linkedin`, `Mail`, `Twitter`, `ArrowUp`, `ArrowUpRight`, `Menu`, `X`, `FileText`, `Copy`, `Quote`, `ExternalLink`).
* **Animations Framework:** `framer-motion` for scroll progress hooks (`useScroll`, `useTransform`, `useSpring`), viewport triggers (`whileInView`), and cursor hover transformations (`whileHover={{ scale: 1.05 }}`).
* **3D Shaders:** Custom GLSL Vertex and Fragment shaders in `Hero3D.tsx` morphing a 12,000 particle sphere into a flattened torus ring based on scroll progress.

---

## 5. Layout & Responsive Behavior

### Desktop Layout Structure (>= 1024px)
* **Navbar:** Centered floating pill (`bg-black/60 backdrop-blur-xl border-white/10`) with horizontal link menu and right-aligned "Let's Talk" button.
* **Hero:** Fullscreen pinned WebGL canvas with mouse-following radial spotlight and three distinct text scroll phases (Center -> Left -> Right).
* **About:** 4-column Bento grid with large 2x2 main bio card, stat cards, tech stack array, and full-width quote card.
* **Skills:** Interactive WebGL Trackball sphere centered in screen, allowing click-and-drag rotation.
* **Projects:** 400vh scroll container creating horizontal translation of project cards (`w-[45vw]` per card).
* **Journey:** Dual-sided timeline with central glowing line (`left-1/2`) alternating content cards left and right.
* **Contact:** 2-column layout with left-aligned email copy button and right-aligned social pill links.

### Tablet Layout Structure (768px - 1023px)
* **Navbar:** Adapts to medium width (`md:w-auto`). Navigation items stay visible.
* **About:** Grid collapses to 3 columns (`md:grid-cols-3`).
* **Projects:** Card widths expand to `md:w-[60vw]` to fit smaller screens.
* **Journey:** Timeline keeps central layout but adjusts card padding (`md:pr-16` / `md:pl-16`).

### Mobile Layout Structure (< 768px)
* **Navbar:** Collapses desktop link row into a mobile menu button (`Menu`/`X`). Clicking opens a full-width glassmorphic popup menu (`fixed top-24 left-4 right-4`).
* **Hero:** Text scales down dynamically using viewport units (`text-[12vw]`). Mouse-following gradient defaults to center.
* **About:** Bento grid stacks vertically into a single column (`grid-cols-1`).
* **Projects:** Card widths take up 85% of screen width (`w-[85vw]`).
* **Journey:** Central glowing line shifts from center to left margin (`left-[28px]`). Content cards align to the right of the line (`pl-20`).
* **Contact:** Giant text headline wraps (`text-6xl`). Contact elements stack into a single column.

### Layout Bottlenecks & Inconsistencies
1. **Scroll Trapping on Mobile:** Pinned `300vh` Hero and `400vh` Projects sections require extensive vertical swipe effort on touch screens before the page advances to subsequent sections.
2. **Fixed Viewport Card Dimensions:** Project cards use `h-[70vh] w-[85vw]`, which can cause text overflow or image clipping on small landscape phones or short browser viewports.
3. **Lack of Touch Fallbacks for Shaders:** Mouse-driven particle displacement in `Hero3D.tsx` relies on desktop mouse coordinates (`state.mouse`). On touch screens, particle interaction remains static.

---

## 6. Functionality Audit

### 6.1 Contact Form & Submission Handling
* **Current State:** **No form inputs or backend submit handlers exist.**
* **Behavior:** Clicking the email container triggers `handleCopy()`, copying `ruturajnawale@gmail.com` to `navigator.clipboard` and showing a temporary `"COPIED!"` notification badge for 2000ms.
* **Backend Services:** `Resend` / `SendGrid` credentials in `.env.example` are inactive and not referenced in code.

### 6.2 Resume Download & Viewing
* **Current Link:** `vercel.json` contains a rewrite rule mapping `/resume` to `/RuturajNawale_30_01_2026_Resume.pdf`.
* **Missing File Defect:** The file `RuturajNawale_30_01_2026_Resume.pdf` **does not exist** inside `/public`. Navigating to `/resume` yields a 404 error.
* **UI Absence:** No "Download Resume" button exists on the website UI.

### 6.3 Interactive Widgets
* **Live Clock (`Contact.tsx`):** Calculates current time in Indian Standard Time (`Asia/Kolkata`) using `setInterval` every 1000ms.
* **Horizontal Scroll Slider (`Projects.tsx`):** Uses Framer Motion's `useScroll` target bound to a 400vh section container to transform `x` position smoothly.
* **3D Particle Sphere Shader (`Hero3D.tsx`):** Real-time WebGL canvas calculating GPU noise, particle pulsation, and morphing geometry.
* **3D Word Cloud (`Skills.tsx`):** Fibonacci sphere algorithm placing skill labels in 3D space with TrackballControls rotation.

### 6.4 Hydration & Error Handling
* **SSR Opt-Out:** `Skills` and `Hero3D` components use `next/dynamic` with `{ ssr: false }` to prevent server-side WebGL rendering errors.
* **Missing Error Boundaries:** No `error.tsx`, `loading.tsx`, or `not-found.tsx` routes defined in `src/app/`.

---

## 7. Technical Debt & Known Gaps (Agent Observations)

### 7.1 Outdated / Unused Dependencies & Files
1. **Canary Dependencies:** `react` and `react-dom` are pinned to experimental canary builds (`19.3.0-canary-65db1000-20260206`).
2. **Dead Package:** `lenis` is present in `package.json` but unused in source code.
3. **Unused UI Primitives:** `button.tsx`, `badge.tsx`, `card.tsx`, `input.tsx`, and `textarea.tsx` in `src/components/ui` are unused boilerplate files.
4. **Root Directory Pollution:** Workspace root contains 11 build/lint log files (`build_error_v2.log`, `install.log`, `type_check.log`, etc.) and an embedded repository directory (`temp_ref_repo`).

### 7.2 Broken Links & Missing Assets
1. **Malformed URL in `data.ts`:** Rehabilitation project demo URL is corrupted:  
   `"https://github.com/ruturajbhaskarnawale?tab=repositorieshttps://rehabilation-frontend.vercel.app/"`
2. **Missing Resume PDF:** `/public/RuturajNawale_30_01_2026_Resume.pdf` is missing.
3. **Missing Blog Images:** `Insights.tsx` references `/images/blog-ai-health.png` and `/images/blog-nextjs.png` which do not exist in `/public`.

### 7.3 Accessibility (a11y) Violations
1. **Unoptimized Image Tags:** `Projects.tsx` uses standard HTML `<img>` tags without explicit width/height attributes or descriptive alt text.
2. **Non-Semantic Interactive Elements:** The email copy trigger in `Contact.tsx` uses a clickable `<div>` without ARIA roles (`role="button"`), `tabIndex`, or keyboard `onKeyDown` event handlers.
3. **Canvas Accessibility:** WebGL 3D canvasses in `Hero3D` and `Skills` lack screen-reader fallback text or ARIA labels.

### 7.4 SEO & Meta Gaps
1. **Missing Sitemap:** `robots.txt` points to `https://your-domain.vercel.app/sitemap.xml`, but no `sitemap.ts` or `sitemap.xml` file exists.
2. **Placeholder Site URL:** `layout.tsx` defaults to `https://ruturaj-nawale.vercel.app` if environment variables are unset.
3. **Unlinked Twitter Meta:** `creator: "@yourtwitterhandle"` is commented out in `layout.tsx`.

### 7.5 Performance Concerns
1. **Uncompressed Assets:** `/public/campus.png` (1.43 MB) and `/public/student-perf.png` (754.8 KB) total over 2.1 MB of uncompressed image payload.
2. **Bypassing Next Image Optimization:** `Projects.tsx` uses raw `<img>` elements, preventing automatic WebP/AVIF compression and lazy loading.
3. **High Particle Count on Mobile:** 12,000 WebGL particles in `Hero3D.tsx` render continuously without mobile GPU device tier throttling.

---

## 8. Resume Reconciliation Checklist

When the updated resume is provided, use the following checklist to systematically reconcile the portfolio contents with the new data.

### 8.1 Personal Identity & Summary
- [ ] **Current Site:** Title: `"AI-Enabled Full-Stack Engineer"`, Tagline: `"Building intelligent systems that solve real-world problems."`
- [ ] **Action:** Check if headline, tagline, or mission log paragraphs in `src/lib/data.ts` need updates.

### 8.2 Work Experience (`src/lib/data.ts` -> `journey`)
- [ ] **Current Entry 1:** Salesforce Administrator at `gsbg.in` (2025).
- [ ] **Current Entry 2:** Web Developer at `reaEspresso PropTech Pvt. Ltd.` (2025).
- [ ] **Action:** Confirm company names, exact job titles, employment dates, and key accomplishments/metrics to update or add.

### 8.3 Education & Metrics (`src/lib/data.ts` -> `journey`)
- [ ] **Current Entry 1:** Bachelor of Computer Science at Mumbai University (2023-26, 9.40 SGPA).
- [ ] **Current Entry 2:** HSC Maharashtra Board (2023-24, 73%).
- [ ] **Current Entry 3:** SSC Maharashtra Board (2022-23, 83.80%).
- [ ] **Action:** Reconcile degree completion date, current SGPA/GPA, and decide whether to keep or remove high school entries.

### 8.4 Projects Inventory (`src/lib/data.ts` -> `projects`)
- [ ] **Current Site (7 Projects):** Campus Project Hub, GSBG Official Website, AI-Assisted Rehabilitation Platform, Text-to-Image Generative AI, CardioHealth Risk Predictor Pro, Heart Disease Prediction, Student Performance Prediction.
- [ ] **Action:** 
  - Select top featured projects to highlight.
  - Fix malformed live demo/GitHub URLs.
  - Update tech stack tags and project impact metrics.
  - Replace or add new projects listed on the updated resume.

### 8.5 Technical Skills (`src/lib/data.ts` -> `skills`)
- [ ] **Current Site (27 Skills across 4 categories):** TensorFlow, PyTorch, Scikit-learn, OpenCV, NLP, Next.js, React, Node.js, Express, PostgreSQL, MongoDB, Redis, Python, JavaScript, TypeScript, C++, SQL, Git, Docker, AWS, Vercel, Linux, CI/CD, etc.
- [ ] **Action:** Reconcile skills list with new resume keywords, update categorizations, and add newly acquired tools/frameworks.

### 8.6 Research & Publications (`src/lib/data.ts` -> `research`)
- [ ] **Current Entry:** "Consumer Sentiment Insights on Smart Ring Using Supervised Classifiers" (March 2025, National Conference on Robotics & AI).
- [ ] **Action:** Confirm if paper details, conference names, publication dates, or links require updates or if additional papers need to be added.

### 8.7 Contact Details & Resume File
- [ ] **Current Contact Info:** Email: `ruturajnawale@gmail.com`, GitHub: `ruturajbhaskarnawale`, LinkedIn: `ruturaj-nawale-863418288`.
- [ ] **Action:** Verify email address, phone number, location, and social links.
- [ ] **Resume Asset:** Upload the new PDF resume file to `/public` and ensure the `/resume` rewrite and UI download buttons point to it.
