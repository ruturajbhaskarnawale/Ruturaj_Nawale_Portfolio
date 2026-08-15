import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ruturaj-nawale.vercel.app";
const siteName = "Ruturaj Nawale | AI Engineer — Enterprise Systems";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Ruturaj Nawale`,
  },
  description: "AI Engineer specializing in Computer Vision, OCR, Deepfake Detection, Biometric Forensics, Fraud Scoring, and Banking Intelligence. Explore production AI architectures, research, and career milestones.",
  keywords: [
    "Ruturaj Nawale",
    "AI Engineer",
    "Computer Vision Engineer",
    "Deep Learning Engineer",
    "OCR Specialist",
    "Deepfake Detection",
    "Fraud Detection AI",
    "FastAPI",
    "PyTorch",
    "LayoutLMv3",
    "InsightFace",
    "Machine Learning Portfolio",
    "Enterprise AI Systems",
  ],
  authors: [{ name: "Ruturaj Bhaskar Nawale", url: siteUrl }],
  creator: "Ruturaj Bhaskar Nawale",
  publisher: "Ruturaj Bhaskar Nawale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: "AI Engineer architecting production-grade enterprise systems across Computer Vision, OCR, Deepfake Detection, Fraud Forensics, and Banking Intelligence.",
    siteName: "Ruturaj Nawale Portfolio",
    images: [
      {
        url: `${siteUrl}/hero-portrait.png`,
        width: 1200,
        height: 630,
        alt: "Ruturaj Nawale - AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "AI Engineer building enterprise AI systems — Computer Vision, Biometric Forensics, Fraud Detection, and Banking Analytics.",
    images: [`${siteUrl}/hero-portrait.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/hero-portrait.png",
    shortcut: "/hero-portrait.png",
    apple: "/hero-portrait.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  alternateName: personalInfo.shortName,
  jobTitle: personalInfo.title,
  description: personalInfo.tagline,
  url: siteUrl,
  sameAs: [
    "https://github.com/ruturajbhaskarnawale",
    "https://www.linkedin.com/in/ruturaj-nawale-863418288/",
  ],
  knowsAbout: [
    "Computer Vision",
    "Deep Learning",
    "OCR Systems",
    "Deepfake Detection",
    "Fraud Forensics",
    "PyTorch",
    "FastAPI",
    "Python",
    "Machine Learning",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Changu Kana Thakur College of Arts, Commerce and Science",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen bg-[#050505] text-foreground font-sans antialiased selection:bg-blue-500/30 selection:text-white", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
