'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Hook to verify authentication status client-side
 * Automatically redirects to /sign-in if not authenticated
 * Returns isLoading state to allow components to wait for auth verification
 */
export function useAuthCheck() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAuthVerified, setIsAuthVerified] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      const signInUrl = new URL('/sign-in', window.location.origin);
      signInUrl.searchParams.set('redirect_url', window.location.href);
      router.push(signInUrl.pathname + signInUrl.search);
      return;
    }

    setIsAuthVerified(true);
  }, [isLoaded, user, router]);

  return {
    isAuthVerified,
    isLoading: !isLoaded,
    user,
  };
}
