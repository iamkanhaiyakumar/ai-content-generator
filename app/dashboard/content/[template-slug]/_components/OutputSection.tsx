import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor>(null);

  // Update editor's content when aiOutput changes
  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  // Function to handle copying the content to clipboard
  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const markdownContent = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdownContent).then(() => {
        alert('Content copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-black font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          <Copy className='w-4 h-4' /> Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
