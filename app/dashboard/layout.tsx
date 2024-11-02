'use client';

import { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';
import UserSubscriptionContext from '../(context)/UserSubscriptionContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize state for total usage
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [UpdateCreditUsageContext, setUpdateCreditUsage] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {/* <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}> */}
      <UpdateCreditUsageContext.Provider value={{ UpdateCreditUsageContext, setUpdateCreditUsage }} >
        <div className="flex min-h-screen">
          {/* Desktop Sidebar */}
          <aside className="sticky top-0 left-0 hidden w-64 bg-white text-gray-800 lg:block h-screen">
            <SideNav />
          </aside>

          {/* Main Content */}
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 ">{children}</main>
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
      {/* </UserSubscriptionContext.Provider> */}
    </TotalUsageContext.Provider>
  );
};

export default Layout;
