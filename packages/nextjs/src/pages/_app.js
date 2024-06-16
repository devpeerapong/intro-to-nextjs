import { Layout } from "../components/Layout";
import { queryClient } from "../queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}
