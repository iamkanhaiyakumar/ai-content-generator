"user client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { eq } from 'drizzle-orm';
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageTrack() {
   const{user}=useUser();
   const{totalUsage,setTotalUsage}=useContext(TotalUsageContext);
   

    useEffect(() => {
      user&&GetData();
    }, [user])

    const GetData=async()=>{
      {/*@ts-ignore */}
      const results:HISTORY=await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));

      GetTotalUsage(results);
    }

    const GetTotalUsage=(results:HISTORY)=>{
      let total:number=0;
      results.forEach((element: { aiResponse: string | any[]; }) => {
        total=total+Number(element.aiResponse?.length)
    });
     setTotalUsage(total);
     console.log(total);

    }


  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
          <div className='h-2 bg-white rounded-full ' style={
            { width: (totalUsage/100000)*100+"%" }
          }> </div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/100,000 credit used</h2>
      </div>
      <Button variant={'secondary'} className='text-primary w-full my-3 '>Upgrade Plan</Button>
    </div>
  )
}

export default UsageTrack
