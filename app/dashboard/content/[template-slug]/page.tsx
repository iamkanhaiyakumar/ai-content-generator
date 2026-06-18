"use client";

import React, { useContext, useState } from "react";
import FromSection from "./_components/FromSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"; 
import Link from "next/link"; 
import { chatSession } from "@/utils/AiModal";
import { saveGeneratedContent } from "@/app/actions/dbActions";
import { useUser } from "@clerk/nextjs";

import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (items) => items.slug === props.params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage } = useContext(TotalUsageContext);
  const [userSubscription, setUserSubscription] = useState(false); 

  // --- NEW: Tone and Length States ---
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");

  const GenerateAIContent = async (formData: any) => {
      if(totalUsage>=100000 && !userSubscription){
          console.log('Please upgrade your plan');
          router.push('/dashboard/billing');
          return;
      }
    setLoading(true);

    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt || "";
      
      // --- NEW: Inject Tone and Length into the Prompt ---
      const styleInstructions = `\n\nCRITICAL INSTRUCTIONS: The tone of the generated content MUST be strictly ${tone}. The output length MUST be roughly ${length}.`;
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt + styleInstructions;

      const result = await chatSession.sendMessage(FinalAIPrompt);

      const aiResponse = await result.response.text();
      console.log(aiResponse);
      setAiOutput(aiResponse);

      await SaveInDb(formData, selectedTemplate?.slug, aiResponse);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: any, slug: any, aiRes: string) => {
    try {
      const userEmail = user?.primaryEmailAddress?.emailAddress || "Unknown";
      const result = await saveGeneratedContent(formData, slug, aiRes, userEmail);

      if (result.success) {
        console.log("Successfully saved to DB");
      } else {
        console.error(result.error);
      }
    } 
    catch (error) {
      console.error("Error saving to DB:", error);
    }
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button className="flex items-center gap-2 py-5 mb-5">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        
        {/* Left Column: Customization Options + Form Section */}
        <div className="flex flex-col gap-5">
          
          {/* --- NEW: Tone and Length Customization UI --- */}
          <div className="p-5 shadow-lg border rounded-lg bg-white dark:bg-slate-900">
            <h2 className="font-bold text-lg mb-4 text-primary">⚙️ Customization Options</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Content Tone</label>
                <select
                  className="p-2 border rounded-md w-full bg-transparent text-gray-700 dark:text-gray-300 dark:border-gray-700"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="Professional">Professional 👔</option>
                  <option value="Casual">Casual ☕</option>
                  <option value="Persuasive">Persuasive 🚀</option>
                  <option value="Humorous">Humorous 😂</option>
                  <option value="Empathetic">Empathetic 🤝</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Content Length</label>
                <select
                  className="p-2 border rounded-md w-full bg-transparent text-gray-700 dark:text-gray-300 dark:border-gray-700"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                >
                  <option value="Short">Short (Concise)</option>
                  <option value="Medium">Medium (Standard)</option>
                  <option value="Long">Long (Detailed)</option>
                </select>
              </div>
            </div>
          </div>

          <FromSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
            loading={loading}
          />
        </div>

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;