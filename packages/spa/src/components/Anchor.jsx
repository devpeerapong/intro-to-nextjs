import { Link } from "react-router-dom";

/**
 *
 * @param {object} props
 * @param {string} props.href
 * @param {import("react").ReactNode} props.children
 * @returns
 */
export function Anchor({ href, ...props }) {
	return <Link {...props} to={{ pathname: href }} />;
}
