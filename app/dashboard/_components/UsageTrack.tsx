"user client"
// Update this import path based on your directory structure
import { Button } from '@/components/ui/button'; // Check if the file exists

// import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { getUserTotalUsage } from '@/(actions)/dbActions';

import { TotalUsageContext } from '@/(context)/TotalUsageContext';

function UsageTrack() {
   const{user}=useUser();
   const{totalUsage,setTotalUsage}=useContext(TotalUsageContext);
   

    useEffect(() => {
      user&&GetData();
    }, [user])

    const GetData=async()=>{
      if (user?.primaryEmailAddress?.emailAddress) {
        const total = await getUserTotalUsage(user.primaryEmailAddress.emailAddress);
        setTotalUsage(total);
        console.log(total);
      }
    }


  return (
    <div className='p-5'>
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
