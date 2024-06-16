import Link from "next/link";

/**
 *
 * @param {object} props
 * @param {string} props.href
 * @param {import("react").ReactNode} props.children
 * @returns
 */
export function Anchor(props) {
	return <Link {...props} />;
}
