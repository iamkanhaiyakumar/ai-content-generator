"use client";

import React, { useState } from "react";
import { WRITING_STYLES, TONE_OPTIONS } from "@/utils/writingStyles";
import { Button } from "@/components/ui/button";

interface WritingStyleSelectorProps {
  onStyleChange: (styleId: string, toneId: string) => void;
}

export default function WritingStyleSelector({
  onStyleChange,
}: WritingStyleSelectorProps) {
  const [selectedStyle, setSelectedStyle] = useState("professional");
  const [selectedTone, setSelectedTone] = useState("neutral");

  const handleStyleChange = (styleId: string) => {
    setSelectedStyle(styleId);
    onStyleChange(styleId, selectedTone);
  };

  const handleToneChange = (toneId: string) => {
    setSelectedTone(toneId);
    onStyleChange(selectedStyle, toneId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-black font-semibold mb-3">Writing Style</h3>
        <div className="grid grid-cols-2 gap-2">
          {WRITING_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => handleStyleChange(style.id)}
              className={`p-3 rounded-lg border-2 transition text-left ${
                selectedStyle === style.id
                  ? "border-violet-600 bg-violet-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <p className="font-medium text-black text-sm">{style.name}</p>
              <p className="text-xs text-gray-600">{style.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-black font-semibold mb-3">Tone</h3>
        <div className="grid grid-cols-2 gap-2">
          {TONE_OPTIONS.map((tone) => (
            <button
              key={tone.id}
              onClick={() => handleToneChange(tone.id)}
              className={`p-3 rounded-lg border-2 transition text-left ${
                selectedTone === tone.id
                  ? "border-violet-600 bg-violet-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <p className="font-medium text-black text-sm">{tone.name}</p>
              <p className="text-xs text-gray-600">{tone.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs text-blue-900">
          The selected writing style and tone will be applied to your generated
          content to match your preferred writing approach.
        </p>
      </div>
    </div>
  );
}
