import { Anchor } from "./Anchor";

export function Layout({ children }) {
	return (
		<div>
			<div className="navbar bg-base-100 border-b">
				<div className="flex-1">
					<Anchor className="btn btn-ghost text-xl" href="/">
						Post
					</Anchor>
				</div>
				<Anchor className="btn btn-sm btn-primary" href="/create">
					Create Post
				</Anchor>
			</div>
			<div className="max-w-screen-md mx-auto py-8">{children}</div>
		</div>
	);
}
