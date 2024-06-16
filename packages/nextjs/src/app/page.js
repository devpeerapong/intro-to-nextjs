import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { api } from "../api";
import { queryClient } from "../queryClient";
import Index from "./Index";

export default async function Page() {
	await queryClient.prefetchQuery({
		queryKey: ["posts"],
		queryFn: api.listPosts,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Index />
		</HydrationBoundary>
	);
}
