'use client';
import '../styles/globals.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <HeaderComponent />
          <main className="mt-28 min-h-screen">{children}</main>
          <FooterComponent />
        </body>

        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </html>
  );
}
