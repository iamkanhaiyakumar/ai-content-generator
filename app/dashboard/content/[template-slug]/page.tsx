"use client";

import React, { useContext, useState } from "react";
import FromSection from "./_components/FromSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"; // Keep the icons import from lucide-react
import Link from "next/link"; // Import Link from next/link
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment"; // Correct moment import
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
  const [userSubscription, setUserSubscription] = useState(false); // Define userSubscription state
  // const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  
  /**
   * Used to generate  content from AI 
   * @param formData 
   * @returns 
   */



  const GenerateAIContent = async (formData: any) => {
      if(totalUsage>=100000&&!userSubscription){
          
          console.log('Please upgrade your plan');
          router.push('/dashboard/billing');
          return;
      }
    setLoading(true);

    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt || "";
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);

      const aiResponse = await result.response.text();
      console.log(aiResponse);
      setAiOutput(aiResponse);

      await SaveInDb(formData, selectedTemplate?.slug, aiResponse);
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
      
      // setUpdateCreditUsage(Date.now());
    }
  };

  const SaveInDb = async (formData: any, slug: any, aiRes: string) => {
    try {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiRes,
        createdBy: user?.primaryEmailAddress?.emailAddress || "Unknown",
        createdAt: moment().format("DD/MM/YYYY"),
      });

      console.log(result);
    } 
    catch (error) {
      console.error("Error saving to DB:", error);
    }
  };

  return (
    <div className="p-10">
      {/* Link back to the dashboard */}
      <Link href="/dashboard">
        <Button className="flex items-center gap-2 py-5">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {/* Form Section */}
        <FromSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />

        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
