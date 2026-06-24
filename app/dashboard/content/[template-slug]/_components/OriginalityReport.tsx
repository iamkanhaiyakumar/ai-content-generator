"use client";

import React from "react";
import { OriginalityResult, getPlagiarismRiskIndicator } from "@/utils/plagiarismDetector";
import { CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";

interface OriginalityReportProps {
  result: OriginalityResult;
}

export default function OriginalityReport({ result }: OriginalityReportProps) {
  const getScoreColor = (score: number): string => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number): string => {
    if (score >= 8) return "bg-green-50";
    if (score >= 6) return "bg-yellow-50";
    return "bg-red-50";
  };

  const getRiskIcon = (level: string) => {
    if (level === "low") return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (level === "medium") return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    return <AlertCircle className="w-5 h-5 text-red-600" />;
  };

  const getRiskColor = (level: string): string => {
    if (level === "low") return "text-green-600";
    if (level === "medium") return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className={`border rounded-lg p-4 ${getScoreBg(result.score)}`}>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-black mb-2">Originality Score</h3>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700">Originality</span>
                <span className={`text-lg font-bold ${getScoreColor(result.score)}`}>
                  {result.score}/10
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    result.score >= 8
                      ? "bg-green-500"
                      : result.score >= 6
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${(result.score / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex items-start gap-3">
            {getRiskIcon(result.riskLevel)}
            <div className="flex-1">
              <p className={`font-semibold ${getRiskColor(result.riskLevel)}`}>
                {getPlagiarismRiskIndicator(result)}
              </p>
              <p className="text-sm text-gray-700 mt-1">{result.analysis}</p>
            </div>
          </div>
        </div>

        {result.suggestions.length > 0 && (
          <div className="border-t pt-3">
            <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
            <ul className="space-y-2">
              {result.suggestions.map((suggestion, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">+</span>
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
