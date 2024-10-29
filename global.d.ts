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
