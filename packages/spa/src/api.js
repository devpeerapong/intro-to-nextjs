/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {number} likes
 */

export const api = {
	/**
	 *
	 * @returns {PromiseLike<Array<Post>>}
	 */
	listPosts: () => fetch("http://localhost:4000/posts").then((response) => response.json()),

	/**
	 *
	 * @param {string} id
	 * @returns {PromiseLike<Post | null>}
	 */
	getPost: (id) =>
		fetch(`http://localhost:4000/posts/${id}`)
			.then((response) => (response.ok ? response.json() : null))
			.catch((_) => null),

	/**
	 *
	 * @param {object} params
	 * @param {string} params.title
	 * @returns {PromiseLike<Post>}
	 */
	createPost: (params) =>
		fetch(`http://localhost:4000/posts`, {
			method: "POST",
			body: JSON.stringify({ ...params, id: crypto.randomUUID() }),
		})
			.then((response) => (response.ok ? response.json() : null))
			.catch((_) => null),
};
