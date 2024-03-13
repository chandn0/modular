import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Tabs1} from "@/components/tabs";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-6">
			<div className="inline-block  text-center justify-center">
				<h1 className={title({ color: "violet" })}>
				Curating all the protocols being developed within modular ecosystems.
				</h1>
			</div>
			<Tabs1 />

		</section>
	);
}
