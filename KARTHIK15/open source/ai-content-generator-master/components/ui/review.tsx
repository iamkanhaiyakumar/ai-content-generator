'use client';
import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, Zap, Stars, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  emotion: string;
  techStack: string[];
  aiContribution: string;
  image: string; // New property for image path
}

const testimonials: Testimonial[] = [
  {
    text: "This AI is a game-changer! It's like having an entire research team that never sleeps. My productivity has skyrocketed.",
    author: "Liam Garcia",
    position: "AI Enthusiast",
    emotion: "amazed",
    techStack: ["Deep Learning", "Predictive Analytics", "GPT"],
    aiContribution: "Productivity boosted by 400%",
    image: "/Liam.jpg" // Path to specific image
  },
  {
    text: "It feels like magic – the AI adjusts to each project’s needs! From generating fresh ideas to refining complex designs, it's my creative assistant.",
    author: "Ava Thompson",
    position: "Tech Explorer",
    emotion: "inspired",
    techStack: ["Adaptive Learning", "Creative Networks", "AI Art"],
    aiContribution: "Idea generation speed increased by 5x",
    image: "/ava.jpg"
  },
  {
    text: "I never imagined AI could understand niche industry jargon so well. It’s been a lifesaver for technical content creation.",
    author: "James Kim",
    position: "Content AI Specialist",
    emotion: "mindblown",
    techStack: ["Natural Language Processing", "Custom GPT Models", "Content AI"],
    aiContribution: "Content accuracy improved by 85%",
    image: "/james.jpg"
  },
  {
    text: "AI-powered insights have made data visualization so intuitive! Now I can see trends that would’ve taken weeks to identify before.",
    author: "Sophia Perez",
    position: "Data Enthusiast",
    emotion: "amazed",
    techStack: ["Data Visualization", "Machine Learning", "NLP"],
    aiContribution: "Data insight speed increased by 3x",
    image: "/sophia.jpg"
  },
  {
    text: "Using AI to handle customer support queries was the best decision ever! It provides immediate responses, keeping customers happy and saving me time.",
    author: "Zara Williams",
    position: "Customer Support Lead",
    emotion: "inspired",
    techStack: ["Customer AI", "Sentiment Analysis", "Automated Support"],
    aiContribution: "Customer response time reduced by 75%",
    image: "/zara.jpg"
  }
];

const AITestimonialExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  const getEmotionColor = (emotion: string) => {
    const colors: Record<string, string> = {
      amazed: 'bg-purple-600',
      inspired: 'bg-blue-600',
      mindblown: 'bg-green-600'
    };
    return colors[emotion] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-[#0D131F] text-white p-8">
      <div className="max-w-4xl mx-auto rounded-2xl bg-black/30 backdrop-blur-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="w-8 h-8 mr-2 text-[#704EF8]" />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-white">
            Our Success Stories
          </h2>
        </div>

        <div className="space-y-6 transition-opacity duration-500">
          <div className="relative hover:transform hover:scale-105 transition-transform duration-300">
            <blockquote className="text-2xl font-light italic text-center mb-8">
              "{currentTestimonial.text}"
            </blockquote>
            <div className="absolute -top-4 -left-4">
              <Brain className="w-8 h-8 text-[#704EF8]" />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Image
                src={currentTestimonial.image} // Dynamically set image for each testimonial
                alt={currentTestimonial.author}
                className="w-20 h-20 rounded-full ring-4 ring-[#704EF8] transition-transform duration-300 hover:scale-110"
                width={200}
                height={200}
              />
              <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full ${getEmotionColor(currentTestimonial.emotion)} flex items-center justify-center`}>
                <Stars className="w-4 h-4" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold">{currentTestimonial.author}</h3>
              <p className="text-white">{currentTestimonial.position}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {currentTestimonial.techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#4F46E5] border border-[#4F46E5] cursor-pointer
                           transition-all duration-300 hover:bg-[#4338CA] hover:scale-105"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-white">
              <Zap className="w-4 h-4" />
              <span>{currentTestimonial.aiContribution}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="p-3 rounded-full bg-[#704EF8] hover:bg-[#4338CA] transition-colors duration-300"
          >
            <ArrowLeft/>
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="p-3 rounded-full bg-[#704EF8] hover:bg-[#4338CA] transition-colors duration-300"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITestimonialExperience;
