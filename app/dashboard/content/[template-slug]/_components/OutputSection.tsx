import React, { useEffect, useState } from 'react';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Copy, XCircle } from 'lucide-react';
import OriginalityReport from './OriginalityReport';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  aiOutput: string;
  originalityResult?: any;
}

const TOAST_DISPLAY_DURATION = 2000;

function OutputSection({ aiOutput, originalityResult }: Props) {
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

      {originalityResult && (
        <div className='border-t p-5'>
          <OriginalityReport result={originalityResult} />
        </div>
      )}

      {/* Generated the output in the output section */}
      <div className='p-5 border-t max-h-96 overflow-y-auto prose max-w-none text-gray-900'>
        {aiOutput ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiOutput}</ReactMarkdown>
        ) : (
          <p className='text-gray-400 text-center py-8'>Your generated content will appear here</p>
        )}
      </div>
    </div>
  );
}

export default OutputSection;
