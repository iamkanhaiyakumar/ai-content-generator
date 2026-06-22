"use client";
import React, { useContext } from 'react';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';
import { SearchContext } from '../(context)/SearchContext';

function DashBoard() {
  const { userSearchInput, setUserSearchInput } = useContext(SearchContext);

  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />

      {/* Template List Section */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default DashBoard;
