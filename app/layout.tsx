import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import {Tabs1} from "@/components/tabs";
import Head from "next/head";
import modular from "../public/modular.jpeg";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	// image from https://www.flaticon.com/
	icons: {
		icon: "/cubes.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* <Head> <meta property="og:image" content="https://i.ibb.co/nQmMgGQ/modular.jpg" /></Head> */}
			
			<head />
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-1G3CDZQZJE"></Script>
      <Script> 
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1G3CDZQZJE');
        `}
      </Script>
			
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
							{/* <Tabs1 /> */}

						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<div
								className="items-center gap-1 text-current"
							>
								<span className="text-default-600">Improve by creating PR or report issues at </span>
								<Link isExternal className="text-primary" href="https://github.com/chandn0/modular">GitHub</Link> 
								||
								<span className="text-default-600">  Made by </span>
								<Link isExternal className="text-primary" href="https://twitter.com/chandan1_">Chandan</Link>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
			{/* <GoogleAnalytics gaId="G-1G3CDZQZJE" /> */}
		</html>
	);
}
