import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { jetbrainsMono, manrope } from "./fonts";
import { profile } from "@/lib/portafolio-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://portafolio-alexisdev.vercel.app",
  jobTitle: profile.role,
  worksFor: {
    "@type": "Organization",
    name: "Daira IT Group",
  },
  sameAs: [profile.githubUrl, profile.linkedinUrl],
  knowsAbout: ["React", "Next.js", "Svelte", "TypeScript", "Tailwind CSS"],
  description:
    "Desarrollador frontend especializado en React, Svelte y Next.js. Construyo interfaces modernas, accesibles y de alto rendimiento.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-alexisdev.vercel.app"),
  title: {
    default: "Alexis Escobar · Desarrollador Frontend",
    template: "%s · Alexis Escobar",
  },
  description:
    "Portafolio de Alexis Escobar, desarrollador frontend especializado en React, Next.js, Svelte y TypeScript. Construyo interfaces modernas, accesibles y de alto rendimiento.",
  keywords: [
    "Alexis Escobar",
    "desarrollador frontend",
    "React",
    "Next.js",
    "Svelte",
    "TypeScript",
    "Tailwind CSS",
    "portafolio",
  ],
  authors: [{ name: "Alexis Escobar" }],
  creator: "Alexis Escobar",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.svg",
        type: "image/svg+xml",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "AlexisDev",
    title: "Alexis Escobar · Desarrollador Frontend",
    description: "Construyo interfaces modernas con React, Next.js y Svelte.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alexis Escobar — Desarrollador Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Escobar · Desarrollador Frontend",
    description: "Construyo interfaces modernas con React, Next.js y Svelte.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf5" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f0e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-xs focus:font-medium focus:text-white"
        >
          Saltar al contenido
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
