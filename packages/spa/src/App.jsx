import { Outlet } from "react-router-dom";
import { Layout } from "./components/Layout";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Outlet />
			</Layout>
		</QueryClientProvider>
	);
}
