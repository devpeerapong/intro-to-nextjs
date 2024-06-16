import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { Anchor } from "../components/Anchor";

/**
 *
 * @param {import("next").InferGetServerSidePropsType<typeof getServerSideProps>} param
 * @returns
 */
export default function Index({ data: initialData }) {
	const { data, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: () => api.listPosts(),
		initialData,
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

/**
 *
 * @param {import("next").GetServerSidePropsContext} params
 */
export async function getServerSideProps() {
	return {
		props: {
			data: await api.listPosts(),
		},
	};
}
