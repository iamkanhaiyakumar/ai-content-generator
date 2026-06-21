'use client';

import { useAuthCheck } from '@/app/(hooks)/useAuthCheck';
import React from 'react';

/**
 * AuthGuard wrapper component
 * Prevents child components from rendering until authentication is verified
 * Shows loading state while auth check is in progress
 */
interface AuthGuardProps {
  children: React.ReactNode;
  loadingFallback?: React.ReactNode;
}

export function AuthGuard({ children, loadingFallback }: AuthGuardProps) {
  const { isAuthVerified, isLoading } = useAuthCheck();

  if (isLoading) {
    return loadingFallback || <AuthLoadingFallback />;
  }

  if (!isAuthVerified) {
    return <AuthLoadingFallback />;
  }

  return <>{children}</>;
}

/**
 * Default loading fallback component
 */
function AuthLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <p className="text-gray-600 font-medium">Verifying authentication...</p>
      </div>
    </div>
  );
}
