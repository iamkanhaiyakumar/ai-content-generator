export {};

declare global {
  interface Window {
    embeddedChatbotConfig: {
      chatbotId: string;
      domain: string;
    };
  }

  interface HTMLScriptElement {
    chatbotId?: string;
    domain?: string;
  }
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "framer-motion";
declare module "react-icons/fi";
