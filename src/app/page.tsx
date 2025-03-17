import { Button } from "@/components/ui/button";
import HomeWidget from "./_widgets/home.widget";

export default function Home() {
	return (
		<div className="container m-auto">
			<HomeWidget />
			<Button>Click me</Button>
		</div>
	);
}
