import {GetStaticPaths, GetStaticProps} from "next";
import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import ArticleBlock from "../../components/ArticleBlock";
import Head from "next/head"
import {isPathLocal} from "../../utils/convinienceHelper";
import {CourseCardProps} from "../../components/CourseCard";
import CourseBlock from "../../components/CourseBlock";
import MailingListCTA from "../../components/MailingListCTA";

export default function CoursePage({course, shortCode}:{course:CourseCardProps, shortCode:string}){
	const siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageDescription={course.description} pageTitle={course.name}>
			<Head>
				<meta property="og:image" content={ isPathLocal(course.coverImage) ? `https://projectfunction.io${course.coverImage}` : course.coverImage } />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:url" content={`https://projectfunction.io/courses/${ shortCode }`} />
			</Head>

			<ContentContainer>
				<CourseBlock {...course} />
			</ContentContainer>

			<MailingListCTA listIdentifier={`courses:${[...course.categories].sort().join(',')}`}/>

		</MainLayout>
	)

}

export const getStaticPaths: GetStaticPaths = async () => {
	const course = await fetch("https://api.projectfunction.io/open/courses/list");

	return {
		paths: (await course.json()).map(course => `/courses/${course.shortCode}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const shortCode = params.shortCode as string;
	const posts = await fetch(`https://api.projectfunction.io/open/courses/list?c=${shortCode}`);

	return {
		props: {
			course: (await posts.json())[0],
			shortCode
		}
	};
};