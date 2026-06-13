"use client";

import templates from '../../(data)/Template';

import React, {
  useEffect,
  useState,
} from 'react';

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

function TemplateListSection({
  userSearchInput,
}: TemplateListSectionProps) {
  const [templateList, setTemplateList] =
    useState<TEMPLATE[]>(templates);

  useEffect(() => {
    if (userSearchInput) {
      const filteredData = templates.filter(
        (item: TEMPLATE) =>
          item.name
            .toLowerCase()
            .includes(
              userSearchInput.toLowerCase()
            )
      );

      setTemplateList(filteredData);
    } else {
      setTemplateList(templates);
    }
  }, [userSearchInput]);

  return (
    <div className="px-3 py-5 md:px-5 md:py-10 lg:px-10 lg:py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {templateList.map(
        (
          item: TEMPLATE,
          index: number
        ) => (
          <TemplateCard
            key={index}
            {...item}
          />
        )
      )}
    </div>
  );
}

export default TemplateListSection;