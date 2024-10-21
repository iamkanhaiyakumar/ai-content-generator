"use client";

import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FromSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<string | null>(null); // For validation
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // For success message

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation function
  const validateForm = () => {
    if (!formData || Object.keys(formData).length === 0) {
      setError("Please fill in all required fields.");
      return false;
    }
    setError(null);
    return true;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (validateForm()) {
      userFormInput(formData);
      setSuccessMessage("Form submitted successfully!"); // Show success message
    }
  };

  const resetForm = () => {
    setFormData({}); // Clear form data
    setError(null); // Clear error message
    setSuccessMessage(null); // Clear success message
  };

  return (
    <div className="p-5 shadow-md border rounded-lg">
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} alt="icon" width={70} height={50} />
      )}
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                value={formData[item.name] || ""}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                value={formData[item.name] || ""}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}

        {error && <p className="text-red-500">{error}</p>} {/* Validation error */}
        {successMessage && <p className="text-green-500">{successMessage}</p>} {/* Success message */}

        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader className="animate-spin" />} Generate
        </Button>
        <Button
          type="button"
          className="w-full py-2 mt-3 bg-gray-300"
          onClick={resetForm}
          disabled={loading}
        >
          Reset
        </Button>
      </form>
    </div>
  );
}

export default FromSection;
