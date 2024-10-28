"use client"; // Enables client-side rendering for this component

import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import ChatbotEmbed from '@/components/ui/Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize state for total usage
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="h-screen flex">
        {/* Sidebar for larger screens */}
        <aside className="md:w-64 hidden md:block fixed">
          <SideNav />
        </aside>

        {/* Main content area */}
        <div className="flex-1 md:ml-64">
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <ChatbotEmbed />
    </TotalUsageContext.Provider>
  );
};

export default Layout;
