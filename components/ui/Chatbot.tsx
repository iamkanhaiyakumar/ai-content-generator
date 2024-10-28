"use client";
import { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.embeddedChatbotConfig = {
            chatbotId: "ovbho5wpUTjf5qmaFHSIt",
            domain: "www.chatbase.co"
          };
        `,
      }}
    />
  );
};

export default ChatbotEmbed;
