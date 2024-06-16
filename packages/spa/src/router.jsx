import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import CreatePost from "./pages/CreatePost";
import PostDetail, { loader as postDetailLoader } from "./pages/PostDetail";
import App from "./App";

export const router = createBrowserRouter([
	{
		path: "",
		element: <App />,
		children: [
			{
				path: "create",
				element: <CreatePost />,
			},
			{
				path: ":id",
				element: <PostDetail />,
				loader: postDetailLoader,
			},
			{
				path: "/",
				element: <Index />,
				index: true,
			},
		],
	},
]);
