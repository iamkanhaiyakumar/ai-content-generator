import React from 'react';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import LoadingSkeleton from './LoadingSkeleton';

interface Props {
  aiOutput: string;
  loading: boolean;
}

function OutputSection({ aiOutput, loading }: Props) {
  return (
    <div className='bg-white rounded-lg shadow-lg border min-h-[400px]'>

      <div className='flex justify-between items-center p-5 border-b'>
        <h2 className='text-black font-medium text-lg'>
          Your Result
        </h2>

        <Button
          className='flex gap-2'
          onClick={() => navigator.clipboard.writeText(aiOutput)}
        >
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      </div>

      <div className='p-5'>

        {loading ? (

          <LoadingSkeleton />

        ) : (

          <div className='text-gray-700 whitespace-pre-wrap'>
            {aiOutput}
          </div>

        )}

      </div>
    </div>
  );
}

export default OutputSection;