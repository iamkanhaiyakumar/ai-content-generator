import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

function billing() {
  return (
    <div className="mx-5 py-5">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="font-medium">Billing</h2>
      </div>
      <div className="mt-5 py-6 rounded">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>$1 One-Time Purchase</CardTitle>
            <CardDescription>
              Utlimite Credit Point
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p>
                <Check></Check>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default billing;
