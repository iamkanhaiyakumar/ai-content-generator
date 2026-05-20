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

  const user = null;

  const router = useRouter();

  const { totalUsage } = useContext(TotalUsageContext);

  const [userSubscription, setUserSubscription] = useState(false);

  const GenerateAIContent = async (formData: any) => {

    if (totalUsage >= 100000 && !userSubscription) {

      console.log("Please upgrade your plan");

      router.push("/dashboard/billing");

      return;
    }

    setLoading(true);
    

    try {

      const SelectedPrompt = selectedTemplate?.aiPrompt || "";

      const FinalAIPrompt =
        JSON.stringify(formData) + ", " + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIPrompt);

      const aiResponse = await result.response.text();

      console.log(aiResponse);

      setAiOutput(aiResponse);

    } catch (error) {

      console.error("Error generating AI content:", error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="p-10">

      <Link href="/dashboard">
        <Button className="flex items-center gap-2 py-5">
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">

        <FromSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />

        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>

      </div>
    </div>
  );
}

export default CreateNewContent;