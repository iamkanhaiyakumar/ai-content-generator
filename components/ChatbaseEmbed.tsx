"use client";

import { useEffect } from "react";

const ChatbaseEmbed = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "ovbho5wpUTjf5qmaFHSIt",
      domain: "www.chatbase.co",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.chatbotId = window.embeddedChatbotConfig.chatbotId;
    script.domain = window.embeddedChatbotConfig.domain;
    script.defer = true;
    script.id = "chatbase-script";

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("chatbase-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default ChatbaseEmbed;
