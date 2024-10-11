import Template from "@/app/(data)/Template";       
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm';
import React from "react";

export interface HISTORY{
    forEach(arg0: (element: any) => void): unknown;
    
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdBy:string,
    createdAt:string
}

async function History(){
    
    const user=await currentUser();

    {/*@ts-ignore*/}
    const HistoryList: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.createdAt));

    const GetTemplateName = (slug: string) => {
        const template = Template?.find((item: any) => item.slug === slug);
        return template;
    }

    return (
        <div className="m-5 p-5 border rounded-lg bg-white">
            <h2 className="font-bold test-3xl">History</h2>
            <p>Search your previously history genrated AI content</p>
            <div></div>
            
        </div>
    );
}
export default History;






















































































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
