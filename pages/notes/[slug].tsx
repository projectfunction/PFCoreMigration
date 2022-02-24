import {GetStaticPaths, GetStaticProps} from "next";
import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import ArticleBlock from "../../components/ArticleBlock";
import Head from "next/head"
import {isPathLocal} from "../../utils/convinienceHelper";

export default function NotePage({posts, slug}){
	const {summary, name, content, publishDate, category, coverImage, createdBy, socialsCoverImage} = posts;
	const siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageDescription={summary} pageTitle={name}>
			<Head>
				<meta property="og:image" content={ isPathLocal(socialsCoverImage ?? coverImage) ? `https://projectfunction.io/public/core/images${socialsCoverImage ?? coverImage}` : socialsCoverImage ??coverImage } />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:url" content={`https://projectfunction.io/notes/${ slug }`} />
			</Head>

			<ContentContainer>
				<ArticleBlock
					title={name}
					publishDate={publishDate}
					category={category}
					summary={summary}
					children={content}
					coverImage={coverImage}
					createdBy={createdBy}/>
			</ContentContainer>

		</MainLayout>
	)

}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetch("https://api.projectfunction.io/open/notes/list-summary");

	return {
		paths: (await posts.json()).map(post => `/notes/${post.slug}`),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params.slug as string;
	const posts = await fetch(`https://api.projectfunction.io/open/notes/list?p=${slug}`);

	return {
		props: {
			posts: (await posts.json())[0],
			slug
		},
		revalidate: 60
	};
};