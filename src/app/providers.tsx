// app/providers.tsx
'use client';

import { AuthProvider } from '@/lib/auth';
import { CacheProvider } from '@chakra-ui/next-js';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

export default function Providers({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </AuthProvider>

  );
}