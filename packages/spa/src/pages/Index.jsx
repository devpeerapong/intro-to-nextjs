import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { Anchor } from "../components/Anchor";

export default function Index() {
	const { data, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: () => api.listPosts(),
	});

	return (
		<div>
			<h1 className="text-3xl font-bold mb-8">All Posts</h1>

			{isLoading ? (
				<div className="flex flex-col gap-4">
					<div className="skeleton h-4 w-full"></div>
					<div className="skeleton h-4 w-full"></div>
				</div>
			) : (
				data && (
					<ul>
						{data?.map((item) => (
							<li key={item.id} className="py-2">
								<Anchor href={`/${item.id}`} className="hover:underline inline-flex items-center">
									{item.title}
								</Anchor>
							</li>
						))}
					</ul>
				)
			)}
		</div>
	);
}
