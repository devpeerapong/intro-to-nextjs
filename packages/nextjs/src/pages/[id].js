import { api } from "../api";

/**
 *
 * @param {import("next").InferGetServerSidePropsType<typeof getServerSideProps>} param
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
 * @param {import("next").GetServerSidePropsContext} params
 */
export async function getServerSideProps({ params }) {
	return {
		props: {
			data: await api.getPost(params.id),
		},
	};
}
