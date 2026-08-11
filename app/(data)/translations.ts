// Lightweight i18n dictionaries for the multi-language support system.
// Add a language by adding an entry to LANGUAGES and a matching block below;
// any key missing from a language falls back to English (see LanguageProvider).

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.useCases": "Use Cases",
    "nav.pricing": "Pricing",
    "cta.signIn": "Sign In",
    "cta.getStarted": "Get Started",
    "cta.dashboard": "Dashboard",
    "hero.title": "AI-Powered Content Generation",
    "hero.getStartedFree": "Get Started Free",
  },
  hi: {
    "nav.home": "होम",
    "nav.features": "विशेषताएँ",
    "nav.useCases": "उपयोग के मामले",
    "nav.pricing": "मूल्य निर्धारण",
    "cta.signIn": "साइन इन",
    "cta.getStarted": "शुरू करें",
    "cta.dashboard": "डैशबोर्ड",
    "hero.title": "एआई-संचालित सामग्री निर्माण",
    "hero.getStartedFree": "मुफ़्त में शुरू करें",
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.useCases": "Casos de uso",
    "nav.pricing": "Precios",
    "cta.signIn": "Iniciar sesión",
    "cta.getStarted": "Comenzar",
    "cta.dashboard": "Panel",
    "hero.title": "Generación de contenido con IA",
    "hero.getStartedFree": "Comienza gratis",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.useCases": "Cas d'usage",
    "nav.pricing": "Tarifs",
    "cta.signIn": "Se connecter",
    "cta.getStarted": "Commencer",
    "cta.dashboard": "Tableau de bord",
    "hero.title": "Génération de contenu par IA",
    "hero.getStartedFree": "Commencez gratuitement",
  },
};
