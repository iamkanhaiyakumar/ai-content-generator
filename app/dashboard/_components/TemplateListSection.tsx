"use client";
import Template from '@/app/(data)/Template'; // assuming this exports an array of TEMPLATE objects
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';


export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateListSectionProps {
  userSearchInput: string;
}

function TemplateListSection({ userSearchInput }: TemplateListSectionProps) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Template);

  useEffect(() => {
    if (userSearchInput) {
      const filteredData = Template.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredData);
    } else {
      setTemplateList(Template);
    }
  }, [userSearchInput]);

  return (
    <div className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
