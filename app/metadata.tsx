import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "AI Content Generator is a web-based application built using Next.js and TypeScript. It is designed to create AI-driven content generation tools with modern development frameworks. The project aims to provide efficient and scalable content workflows to improve productivity, and it is deployable via Vercel for quick and easy hosting.",
  keywords: "AI, Content Generator, Next.js, TypeScript, Vercel, scalable workflows",
  authors: [{ name: "Team AI Content Generator" }],

  openGraph: {
    title: "AI Content Generator",
    description: "AI Content Generator is a web-based application built using Next.js and TypeScript.",
    url: "http://localhost:3001", 
    siteName: "AI Content Generator",
    images: [
      {
        url: "/path/to/your/image.jpg", 
        width: 800,
        height: 600,
        alt: "AI Content Generator Preview",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image", 
    title: "AI Content Generator",
    description: "AI Content Generator is a web-based application built using Next.js and TypeScript.",
    images: ["/path/to/your/image.jpg"], 
    site: "@your_twitter_handle", 
    creator: "@your_twitter_handle", 
  },
};
