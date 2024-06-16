import { useLoaderData } from "react-router-dom";
import { api } from "../api";

export default function PostDetail() {
	/**
	 * @type {Awaited<ReturnType<typeof loader>>}
	 */
	const data = useLoaderData();

	return (
		<div>
			<h1 className="text-3xl font-bold mb-8">{data?.title}</h1>
		</div>
	);
}

/**
 *
 * @param {import("react-router-dom").LoaderFunctionArgs} params
 */
export function loader({ params }) {
	return api.getPost(params.id);
}
