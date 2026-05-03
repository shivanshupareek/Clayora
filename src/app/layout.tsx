import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../styles/globals.scss";

// =============================================================================
// FONTS
// PLACEHOLDER: Replace with Figma-specified fonts when designs are shared.
// Swapping fonts = change these two declarations + update fallbacks below.
// CSS variables --font-heading and --font-body are used throughout the SCSS
// system, so the swap propagates everywhere automatically.
// =============================================================================

// Primary body font — preloaded for LCP
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-body",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// Heading / display font — not preloaded (decorative/secondary per AGENTS.md)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-heading",
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// =============================================================================
// METADATA
// Root defaults — every page must override alternates.canonical with its own URL.
// OG images must exist at the referenced public/ paths (1200×630px).
// =============================================================================

export const metadata: Metadata = {
  metadataBase: new URL("https://claylabs.com.au"),

  title: {
    default: "ClayLabs — Pottery Classes in Australia",
    template: "%s | ClayLabs",
  },

  description:
    "Join ClayLabs for intimate pottery classes in small groups. A peaceful, welcoming community-based studio in Australia for all skill levels.",

  keywords: [
    "pottery classes",
    "pottery studio",
    "clay classes",
    "wheel throwing",
    "handbuilding",
    "ceramics workshop",
    "pottery Australia",
    "community pottery",
  ],

  authors: [{ name: "ClayLabs", url: "https://claylabs.com.au" }],
  creator: "ClayLabs",
  publisher: "ClayLabs",

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

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://claylabs.com.au",
    siteName: "ClayLabs",
    title: "ClayLabs — Pottery Classes in Australia",
    description:
      "Join ClayLabs for intimate pottery classes in small groups. A peaceful, welcoming community-based studio in Australia for all skill levels.",
    images: [
      {
        url: "/assets/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "ClayLabs — Pottery Classes in Australia",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ClayLabs — Pottery Classes in Australia",
    description:
      "Join ClayLabs for intimate pottery classes in small groups. A peaceful, welcoming community-based studio in Australia for all skill levels.",
    images: ["/assets/og/og-default.jpg"],
  },

  alternates: {
    canonical: "https://claylabs.com.au",
  },

  icons: {
    icon: [
      { url: "/assets/favicons/favicon.ico" },
      {
        url: "/assets/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: "/assets/favicons/apple-touch-icon.png" }],
  },

  manifest: "/site.webmanifest",
};

// =============================================================================
// VIEWPORT
// Exported separately — Next.js 16 requires this outside the metadata object.
// =============================================================================

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#B5622D", // terracotta — update when brand colour is confirmed
};

// =============================================================================
// JSON-LD — Site-wide structured data
// LocalBusiness + EducationalOrganization for a pottery teaching studio.
// Page-specific schemas (Course, Event, etc.) belong in their own page.tsx.
// XSS note: < is replaced with \u003c per Next.js 16 JSON-LD guide.
// =============================================================================

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "ClayLabs",
  description:
    "Intimate pottery classes in small groups. A peaceful, community-based pottery studio in Australia for all skill levels.",
  url: "https://claylabs.com.au",
  logo: "https://claylabs.com.au/assets/og/og-default.jpg",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pottery Classes",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Pottery Classes",
          description:
            "Small-group pottery classes covering wheel throwing and handbuilding for all skill levels.",
        },
      },
    ],
  },
};

// =============================================================================
// ROOT LAYOUT
// =============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <body>
        {/* Skip-to-main-content — first focusable element, WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {children}

        {/* Site-wide JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
