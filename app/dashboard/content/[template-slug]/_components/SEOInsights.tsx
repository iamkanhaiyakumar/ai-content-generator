"use client";

import React from "react";
import { SEOMetrics } from "@/utils/seoOptimizer";
import { TrendingUp, AlertCircle } from "lucide-react";

interface SEOInsightsProps {
  metrics: SEOMetrics;
}

export default function SEOInsights({ metrics }: SEOInsightsProps) {
  const getSEOColor = (score: number): string => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getSEOBg = (score: number): string => {
    if (score >= 8) return "bg-green-50";
    if (score >= 6) return "bg-yellow-50";
    return "bg-red-50";
  };

  const MetricBar = ({
    label,
    value,
    max = 10,
  }: {
    label: string;
    value: number;
    max?: number;
  }) => {
    const percentage = (value / max) * 100;
    const color = value >= 7 ? "bg-green-500" : value >= 5 ? "bg-yellow-500" : "bg-red-500";

    return (
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-700">{label}</span>
          <span className="text-sm font-semibold text-gray-900">{value}/10</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className={`h-2 rounded-full ${color}`} style={{ width: `${percentage}%` }} />
        </div>
      </div>
    );
  };

  return (
    <div className={`border rounded-lg p-4 ${getSEOBg(metrics.score)}`}>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className={`w-5 h-5 ${getSEOColor(metrics.score)}`} />
        <h3 className="font-semibold text-black">SEO Optimization Score: {metrics.score}/10</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Metrics</h4>
          <MetricBar label="Keyword Density" value={metrics.keywordDensity} />
          <MetricBar label="Readability Score" value={metrics.readabilityScore} />
        </div>

        <div className="border-t pt-3">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Content Length:</span> {metrics.contentLength} characters
          </p>
        </div>

        {metrics.suggestions.length > 0 && (
          <div className="border-t pt-3">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Recommendations
            </h4>
            <ul className="space-y-1">
              {metrics.suggestions.map((suggestion, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
