import React, { useEffect, useState } from 'react';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Copy, XCircle } from 'lucide-react';

interface Props {
  aiOutput: string;
}

const TOAST_DISPLAY_DURATION = 2000;

function OutputSection({ aiOutput }: Props) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isErrorToast, setIsErrorToast] = useState(false);

  useEffect(() => {
    if (!toastMessage) return;
    const timeoutId = setTimeout(() => setToastMessage(null), TOAST_DISPLAY_DURATION);
    return () => clearTimeout(timeoutId);
  }, [toastMessage]);

  const handleCopy = async () => {
    if (!aiOutput?.trim()) return;
    try {
      await navigator.clipboard.writeText(aiOutput);
      setIsErrorToast(false);
      setToastMessage('Copied!');
    } catch (error) {
      console.error('Failed to copy text:', error);
      setIsErrorToast(true);
      setToastMessage('Copy failed');
    }
  };

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
              className={`absolute top-full right-0 mt-2 text-sm px-3 py-2 rounded-md shadow-md border whitespace-nowrap flex items-center gap-2 ${
                isErrorToast ? 'bg-red-700 border-red-500 text-white' : 'bg-black border-white/20 text-white'
              }`}
            >
              {isErrorToast ? <XCircle className='w-4 h-4' /> : <CheckCircle2 className='w-4 h-4' />}
              {toastMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OutputSection;
