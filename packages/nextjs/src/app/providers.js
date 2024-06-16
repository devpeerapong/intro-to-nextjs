"use client";

import { queryClient } from "@/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
