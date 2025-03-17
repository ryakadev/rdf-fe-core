import Link from "next/link";

export default function NotFound() {
	return (
		<div className="container m-auto flex h-screen flex-col items-center justify-center space-y-4">
			<h2 className="text-2xl">404 - Page Not Found</h2>
			<p>Sorry, the page you are looking for does not exist.</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
