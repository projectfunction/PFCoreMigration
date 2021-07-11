import {GetStaticPaths, GetStaticProps} from "next";
import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import SimplePaper from "../../components/SimplePaper";
import ContentContainer from "../../components/ContentContainer";
import SimpleArticle from "../../components/SimpleArticle";

export default function NotePage({summary, name, content}){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageDescription={summary}>

			<ContentContainer>
				<SimpleArticle title={"Notes:"+name}>
					{content}
				</SimpleArticle>
			</ContentContainer>

		</MainLayout>
	)

}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetch("https://api.projectfunction.io/open/notes/list-summary");

	return {
		paths: (await posts.json()).map(post => `/notes/${post.slug}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params.slug as string;
	const posts = await fetch(`https://api.projectfunction.io/open/notes/list?p=${slug}`);

	return {
		props: (await posts.json())[0]
	};
};