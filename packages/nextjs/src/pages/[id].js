import { api } from "../api";

/**
 *
 * @param {import("next").InferGetStaticPropsType<typeof getStaticProps>} param
 * @returns
 */
export default function PostDetail({ data }) {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-8">{data.title}</h1>
		</div>
	);
}

/**
 *
 * @param {import("next").GetStaticPropsContext} params
 */
export async function getStaticProps({ params }) {
	return {
		props: {
			data: await api.getPost(params.id),
		},
		revalidate: 5,
	};
}

/**
 *
 * @param {import("next").GetStaticPathsContext} params
 * @returns {import("next").GetStaticPathsResult}
 */
export async function getStaticPaths() {
	const posts = await api.listPosts();

	return {
		paths: posts.map(({ id }) => ({ params: { id } })),
		fallback: "blocking",
	};
}
