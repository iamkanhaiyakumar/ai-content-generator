"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput).then(() => {
      // Could add a toast notification here in the future
      console.log('Content copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className='bg-white rounded-lg shadow-lg border'>
      <div className='flex justify-between items-center p-5 border-b'>
        <h2 className='text-black font-medium text-lg'>Your Result</h2>
        <Button 
          className='flex gap-2' 
          onClick={handleCopy}
          disabled={!aiOutput}
        >
          <Copy className='w-4 h-4' /> Copy
        </Button>
      </div>

      <div className='p-5'>
        {aiOutput ? (
          <article className='prose prose-sm sm:prose-base prose-slate max-w-none'>
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className='text-3xl font-bold mt-6 mb-3' {...props} />,
                h2: ({node, ...props}) => <h2 className='text-2xl font-bold mt-5 mb-3' {...props} />,
                h3: ({node, ...props}) => <h3 className='text-xl font-bold mt-4 mb-2' {...props} />,
                code: ({node, ...props}: any) => (
                  <code className='bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono' {...props} />
                ),
                pre: ({node, ...props}) => <pre className='bg-gray-900 p-4 rounded-lg overflow-x-auto my-3' {...props} />,
                blockquote: ({node, ...props}) => <blockquote className='border-l-4 border-primary pl-4 py-1 italic text-gray-700 bg-gray-50 rounded my-3' {...props} />,
                ul: ({node, ...props}) => <ul className='list-disc list-inside my-3 space-y-2 pl-4' {...props} />,
                ol: ({node, ...props}) => <ol className='list-decimal list-inside my-3 space-y-2 pl-4' {...props} />,
                li: ({node, ...props}) => <li className='ml-2' {...props} />,
                a: ({node, ...props}) => <a className='text-primary hover:underline break-words' {...props} />,
                table: ({node, ...props}) => <div className='overflow-x-auto my-3'><table className='border-collapse border border-gray-300 w-full text-sm' {...props} /></div>,
                th: ({node, ...props}) => <th className='border border-gray-300 px-3 py-2 bg-gray-100 font-bold text-left' {...props} />,
                td: ({node, ...props}) => <td className='border border-gray-300 px-3 py-2' {...props} />,
              }}
            >
              {aiOutput}
            </ReactMarkdown>
          </article>
        ) : (
          <div className='text-center py-12 text-gray-400'>
            <p>Your result will appear here once generated.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputSection;
