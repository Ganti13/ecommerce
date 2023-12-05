"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query-api";
import { GlobalStyle } from "../GlobalStyles";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      {children}
    </QueryClientProvider>
  );
};
