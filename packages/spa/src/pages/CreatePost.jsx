import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function CreatePost() {
	const navigate = useNavigate();

	/**
	 *
	 * @param {import("react").FormEvent<HTMLFormElement>} event
	 */
	async function onSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const json = Object.fromEntries(formData.entries());

		const result = await api.createPost(json);
		navigate(`/${result.id}`);
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
			<h1 className="text-3xl font-bold mb-8">Create Post</h1>
			<label className="form-control">
				<span className="label font-bold">Title</span>
				<input id="title" name="title" className="input input-bordered" required />
			</label>
			<button className="btn btn-primary ml-auto">Submit</button>
		</form>
	);
}
