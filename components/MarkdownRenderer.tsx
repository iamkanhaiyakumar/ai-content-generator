'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Reusable component to render markdown content with proper styling
 * Supports:
 * - Headings (h1-h6)
 * - Bold/italic text
 * - Lists (ordered and unordered)
 * - Code blocks and inline code
 * - Links
 * - Blockquotes
 * - Tables
 * - Line breaks
 */
export default function MarkdownRenderer({ 
  content, 
  className = 'prose prose-sm sm:prose-base prose-slate max-w-none' 
}: MarkdownRendererProps) {
  return (
    <article className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className='text-3xl font-bold mt-6 mb-3' {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className='text-2xl font-bold mt-5 mb-3' {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className='text-xl font-bold mt-4 mb-2' {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className='text-lg font-bold mt-3 mb-2' {...props} />
          ),
          h5: ({ node, ...props }) => (
            <h5 className='text-base font-bold mt-2 mb-1' {...props} />
          ),
          h6: ({ node, ...props }) => (
            <h6 className='text-sm font-bold mt-2 mb-1 text-gray-600' {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className='text-base leading-relaxed mb-3' {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className='text-primary hover:underline break-words' {...props} />
          ),
          code: ({ node, ...props }: any) => (
            <code 
              className='bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono' 
              {...props} 
            />
          ),
          pre: ({ node, ...props }) => (
            <pre className='bg-gray-900 p-4 rounded-lg overflow-x-auto my-3' {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className='border-l-4 border-primary pl-4 py-1 italic text-gray-700 bg-gray-50 rounded my-3' 
              {...props} 
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className='list-disc list-inside my-3 space-y-2 pl-4' {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className='list-decimal list-inside my-3 space-y-2 pl-4' {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className='ml-2' {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className='overflow-x-auto my-3'>
              <table className='border-collapse border border-gray-300 w-full text-sm' {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className='bg-gray-100' {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className='border border-gray-300 px-3 py-2 font-bold text-left' {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className='border border-gray-300 px-3 py-2' {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className='my-4 border-t-2 border-gray-300' {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className='max-w-full h-auto rounded my-3' {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className='font-bold' {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className='italic' {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
