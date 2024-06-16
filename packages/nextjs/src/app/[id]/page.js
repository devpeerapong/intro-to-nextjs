import { api } from "@/api";

export default async function Page({ params }) {
	const data = await api.getPost(params.id);

	return (
		<div>
			<h1 className="text-3xl font-bold mb-8">{data.title}</h1>
		</div>
	);
}
