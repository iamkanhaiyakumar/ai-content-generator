import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Copy, XCircle } from 'lucide-react';

interface Props {
  aiOutput: string;
  loading?: boolean;
}

const TOAST_DISPLAY_DURATION = 2000;

function OutputSection({ aiOutput, loading }: Props) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isErrorToast, setIsErrorToast] = useState(false);
  const [toastId, setToastId] = useState(0);

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
          <Button className='flex gap-2' onClick={handleCopy} disabled={!aiOutput?.trim() || loading}>
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

      {loading ? (
        <div className="p-5 space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
          <div className="h-4 bg-gray-200 rounded w-3/5" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
        </div>
      ) : aiOutput ? (
        <div className="p-5 text-gray-700 whitespace-pre-wrap">{aiOutput}</div>
      ) : (
        <div className="p-5 text-gray-400">Your result will be displayed here</div>
      )}
    </div>
  );
}

export default OutputSection;
