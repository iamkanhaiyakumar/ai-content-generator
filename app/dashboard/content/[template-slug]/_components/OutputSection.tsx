import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Copy, XCircle, AlertTriangle, Shield } from 'lucide-react';

interface Props {
  aiOutput: string;
  safetyWarnings?: string[];
  safetyScore?: number;
  needsReview?: boolean;
}

const TOAST_DISPLAY_DURATION = 2000;

function OutputSection({ aiOutput, safetyWarnings = [], safetyScore = 0, needsReview = false }: Props) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isErrorToast, setIsErrorToast] = useState(false);
  const [toastId, setToastId] = useState(0);

  const getSafetyColor = (score: number): string => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getSafetyBg = (score: number): string => {
    if (score >= 8) return "bg-green-50";
    if (score >= 6) return "bg-yellow-50";
    return "bg-red-50";
  };

  useEffect(() => {
    if (!toastMessage) return;

    const timeoutId = window.setTimeout(() => setToastMessage(null), TOAST_DISPLAY_DURATION);
    return () => window.clearTimeout(timeoutId);
  }, [toastMessage, toastId]);

  const handleCopy = async () => {
    if (!aiOutput?.trim()) return;
    try {
      await navigator.clipboard.writeText(aiOutput);
      setIsErrorToast(false);
      setToastMessage('Copied!');
      setToastId((id) => id + 1);
    } catch (error) {
      console.error('Failed to copy text:', error);
      setIsErrorToast(true);
      setToastMessage('Copy failed');
      setToastId((id) => id + 1);
    }
  };

  const toastBorderClass = isErrorToast ? 'border-red-500' : 'border-white/20';

  return (
    <div className='bg-white rounded-lg shadow-lg border relative'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-black font-medium text-lg'>Your Result</h2>
        <div className='relative'>
          <Button className='flex gap-2' onClick={handleCopy} disabled={!aiOutput?.trim()}>
            <Copy className='w-4 h-4' /> Copy
          </Button>
          {toastMessage && (
            <div
              role='status'
              aria-live='polite'
              aria-atomic='true'
              className={`absolute top-full right-0 mt-2 text-sm px-3 py-2 rounded-md shadow-md border whitespace-nowrap flex items-center gap-2 bg-black text-white ${toastBorderClass}`}
            >
              {isErrorToast ? <XCircle className='w-4 h-4' /> : <CheckCircle2 className='w-4 h-4' />}
              {toastMessage}
            </div>
          )}
        </div>
      </div>

      {safetyScore > 0 && (
        <div className={`border-t p-4 ${getSafetyBg(safetyScore)}`}>
          <div className='flex items-center gap-3'>
            <Shield className={`w-5 h-5 ${getSafetyColor(safetyScore)}`} />
            <div className='flex-1'>
              <p className='font-semibold text-black'>Safety Score: {safetyScore}/10</p>
              {needsReview && (
                <p className='text-sm text-red-700 font-medium mt-1'>
                  This content requires your review before use
                </p>
              )}
              {safetyWarnings.length > 0 && (
                <ul className='text-sm text-gray-700 mt-2 space-y-1'>
                  {safetyWarnings.map((warning, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <AlertTriangle className='w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0' />
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      <div className='p-5 border-t max-h-96 overflow-y-auto'>
        {aiOutput ? (
          <div className='prose prose-sm max-w-none dark:prose-invert'>
            <p className='text-black whitespace-pre-wrap'>{aiOutput}</p>
          </div>
        ) : (
          <p className='text-gray-400 text-center py-8'>Your generated content will appear here</p>
        )}
      </div>
    </div>
  );
}

export default OutputSection;
