import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
