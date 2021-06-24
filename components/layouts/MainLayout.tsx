import {ReactNode} from "react";
import Head from "next/head";

export type LayoutProps = {
	children: ReactNode,
	pageTitle?: string,
	pageDescription?: string
}

export default function MainLayout({children, pageTitle, pageDescription}:LayoutProps){
	return (
		<>
			<Head>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<title>{pageTitle ? `${pageTitle} • ProjectFunction` : "ProjectFunction"}</title>
				<meta name="description" content={pageDescription ?? ""} />
			</Head>

			{children}
		</>
	)
}