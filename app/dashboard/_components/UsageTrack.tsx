"use client";

import { Button } from "@/components/ui/button";
import React from "react";

function UsageTrack() {
  return (
    <div className="p-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>

        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>

        <h2 className="text-sm my-2">
          30,000 / 100,000 credit used
        </h2>
      </div>

      <Button
        variant={"secondary"}
        className="text-primary w-full my-3"
      >
        Upgrade Plan
      </Button>
    </div>
  );
}

export default UsageTrack;