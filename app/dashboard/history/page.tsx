<<<<<<< HEAD
import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
=======
import Template from "@/app/(data)/Template";       
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm';
>>>>>>> da9f43d58dda20c4dde4924d05e5d0bff2b8fab7
import React from "react";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  // Fetching the history list from the database
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.createdAt));

  // Function to get the template name by its slug
  const GetTemplateName = (slug: string) => {
    const template = TEMPLATE?.find((item: any) => item.slug === slug);
    return template?.name || "Unknown Template";
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI content history</p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {HistoryList.length > 0 ? (
        HistoryList.map((item: HISTORY, index: number) => (
          <div key={item.id} className="grid grid-cols-7 my-5 py-3 px-3 border-b">
            <h2 className="col-span-2 flex gap-2 items-center">
              <Image
                src={GetTemplateName(item.templateSlug)?.icon || "/default-icon.png"}
                width={25}
                height={25}
                alt={GetTemplateName(item.templateSlug)}
              />
              {GetTemplateName(item.templateSlug)}
            </h2>
            <h2 className="col-span-2 line-clamp-3">{item.aiResponse}</h2>
            <h2>{new Date(item.createdAt).toLocaleDateString()}</h2>
            <h2>{item.aiResponse.split(" ").length}</h2>
            <h2>
              <Button
                variant="ghost"
                className="text-primary"
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              >
                Copy
              </Button>
            </h2>
          </div>
        ))
      ) : (
        <p className="text-center mt-5">No history found for your account.</p>
      )}
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> da9f43d58dda20c4dde4924d05e5d0bff2b8fab7
export default History;


































































// "user client"
// import Template from "@/app/(data)/Template";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import { desc, eq } from "drizzle-orm";
// import Image from "next/image";
// import React from "react";
// import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";

// export interface HISTORY {
//     id: Number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

// async function History() {
//   const user = await currentUser();

//   {
//     /*@ts-ignore*/
//   }
//   const HistoryList: HISTORY[] = await db
//     .select()
//     .from(AIOutput)
//     .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
//     .orderBy(desc(AIOutput.createdAt));

//   const GetTemplateName = (slug: string) => {
//     const template = Template?.find((item: any) => item.slug === slug);
//     return template;
//   };

//   return (
//     <>
//       <div className="m-5 p-5 border rounded-lg bg-white">
//         <h2 className="font-bold test-3xl">History</h2>
//         <p className="text-gray-500">Search your previously history genrated AI content</p>
//         <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3"> 
//             <h2 className="col-span-2 ">TEMPLATE</h2>
//             <h2 className="col-span-2">AI RESp</h2>
//             <h2>DATE</h2>
//             <h2>WORDS</h2>
//             <h2>COPY</h2>
//         </div>
    
//         {HistoryList.map((item:HISTORY,index:number) => (
//         <div className="grid grid-cols-7 my-5 py-3 px-3"></div>
//         <h2 className="col-span-2 flex gap-2 items-center">
//           <Image
//             src={
//               GetTemplateName(item?.templateSlug)?.icon || "/default-icon.png"
//             }
//             width={25}
//             height={25}
//             alt={""}
//           />
//           {GetTemplateName(item.tempalateSlug)?.name}
//         </h2>
//         <h2 className="col-span-2 line-clamp-3">{item?.aiResponse}</h2>
//         <h2>{item.createdBy}</h2>
//         <h2>{item?.aiResponse.length}</h2>
//         <h2>
//           <Button variant="ghost" className="text-primary" onClick={()=>navigator.clipboard.writeText(item.aiResponse)}>
//                   Copy
//                 </Button>
//         </h2>
//       </div>
//       <hr />
//     </>
// )};
//   </div>
// }

















































/*
import Template from "@/app/(data)/Template";       
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "@/app/dashboard/components/TemplateListSection";

interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

async function History() {
    // Get the current user
    const user = await currentUser();

    // Fetch history data from the database for the logged-in user
    const HistoryList: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.createdAt));

    // Function to get the template name by slug
    const GetTemplateName = (slug: string) => {
        const template = TEMPLATE.find((item: any) => item.slug === slug);
        return template?.name || 'Unknown Template'; // Return template name or 'Unknown' if not found
    };

    return (
        <div className="m-5 p-5 border rounded-lg bg-white">
            <h2 className="font-bold text-3xl mb-4">History</h2>
            <p className="mb-4">Search your previously generated AI responses</p>
            
            {/* Display History List */
// }
/*      {HistoryList.length > 0 ? (
                <div className="space-y-4">
                    {HistoryList.map((history) => (
                        <div key={history.id} className="p-4 border rounded-lg bg-gray-50">
                            <h3 className="font-semibold text-lg">
                                Template: {GetTemplateName(history.templateSlug)}
                            </h3>
                            <p className="text-sm text-gray-600">Generated at: {new Date(history.createdAt).toLocaleString()}</p>
                            <p className="mt-2">Response: {history.aiResponse}</p>
                            <Button variant="link" className="mt-2">
                                View Full Response
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No history found for your account.</p>
            )}
        </div>
    );
}

export default History;
*/
