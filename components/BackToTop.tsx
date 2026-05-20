"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    const onScroll = useCallback(() => {
        setVisible(window.scrollY > 300);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
                position: "fixed",
                bottom: "24px",
                right: "80px",  // pushes it to the left of the chat button
                zIndex: 9999,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#704ef8",
                color: "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(112, 78, 248, 0.4)",
            }}
        >
            <ArrowUp size={18} strokeWidth={2.5} />
        </button>
    );
}