"use client";
import '@/styles/bento.css';

import React, { useState } from "react";
import { Sparkles, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  text: string;
  author: string;
  position: string;
  emotion: string;
  techStack: string[];
  aiContribution: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This AI is a game-changer! It's like having an entire research team that never sleeps. My productivity has skyrocketed.",
    author: "Liam Garcia",
    position: "AI Enthusiast",
    emotion: "amazed",
    techStack: ["Deep Learning", "Predictive Analytics", "GPT"],
    aiContribution: "Productivity boosted by 400%",
    image: "/Liam.jpg",
  },
  {
    text: "It feels like magic – the AI adjusts to each project's needs! From generating fresh ideas to refining complex designs, it's my creative assistant.",
    author: "Ava Thompson",
    position: "Tech Explorer",
    emotion: "inspired",
    techStack: ["Adaptive Learning", "Creative Networks", "AI Art"],
    aiContribution: "Idea generation speed increased by 5x",
    image: "/ava.jpg",
  },
  {
    text: "I never imagined AI could understand niche industry jargon so well. It's been a lifesaver for technical content creation.",
    author: "James Kim",
    position: "Content AI Specialist",
    emotion: "mindblown",
    techStack: ["Natural Language Processing", "Custom GPT Models", "Content AI"],
    aiContribution: "Content accuracy improved by 85%",
    image: "/james.jpg",
  },
  {
    text: "AI-powered insights have made data visualization so intuitive! Now I can see trends that would've taken weeks to identify before.",
    author: "Sophia Perez",
    position: "Data Enthusiast",
    emotion: "amazed",
    techStack: ["Data Visualization", "Machine Learning", "NLP"],
    aiContribution: "Data insight speed increased by 3x",
    image: "/sophia.jpg",
  },
  {
    text: "Using AI to handle customer support queries was the best decision ever! It provides immediate responses, keeping customers happy and saving me time.",
    author: "Zara Williams",
    position: "Customer Support Lead",
    emotion: "inspired",
    techStack: ["Customer AI", "Sentiment Analysis", "Automated Support"],
    aiContribution: "Customer response time reduced by 75%",
    image: "/zara.jpg",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-brand-deep border-t border-brand-light/12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-16 gap-3">
          <Sparkles className="w-5 h-5 text-brand-light" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream">
            Our Success Stories
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bento-card flex flex-col h-auto"
            >
              <div className="mb-8">
                <blockquote className="text-lg leading-relaxed italic text-brand-cream/75">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>

              <div className="mt-auto pt-8 border-t border-brand-light/10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-12 h-12 rounded-full object-cover" 
                    width={48} 
                    height={48} 
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-brand-cream">
                      {testimonials[currentIndex].author}
                    </h3>
                    <p className="text-xs text-brand-light/60">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {testimonials[currentIndex].techStack.slice(0, 2).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-md text-xs font-medium bg-brand-mid/10 border border-brand-light/15 text-brand-light/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-brand-light/60">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{testimonials[currentIndex].aiContribution}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-brand-mid/15 border border-brand-light/20 text-brand-light hover:bg-brand-mid/25 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex 
                      ? "w-8 bg-brand-light" 
                      : "w-2 bg-brand-light/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-brand-mid/15 border border-brand-light/20 text-brand-light hover:bg-brand-mid/25 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-xs text-brand-light/60">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
