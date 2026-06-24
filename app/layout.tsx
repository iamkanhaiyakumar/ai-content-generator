import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import ChatbaseEmbed from "@/components/ChatbaseEmbed";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"] });

// Define metadata
export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "AI-Powered Content Generation - Write faster, think smarter, create better.",
  openGraph: {
    title: "AI Content Generator",
    description: "AI-Powered Content Generation - Write faster, think smarter, create better.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generator",
    description: "AI-Powered Content Generation - Write faster, think smarter, create better.",
  },
};

/**
 * Conditionally wraps children with ClerkProvider.
 * During build (SSG/SSR pre-render), NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
 * may not be available on the build server, which causes Clerk to throw.
 * We skip the provider in that case so the build succeeds.
 */
function ConditionalClerkProvider({ children }: { children: React.ReactNode }) {
  const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPubKey) {
    // Build-time: no key available, render without Clerk
    return <>{children}</>;
  }

  return <ClerkProvider publishableKey={clerkPubKey}>{children}</ClerkProvider>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConditionalClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.className}>
          <ThemeProvider>
            <main>
              {children}
              <ChatbaseEmbed />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ConditionalClerkProvider>
  );
}