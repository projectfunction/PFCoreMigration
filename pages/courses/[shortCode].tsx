import {GetStaticPaths, GetStaticProps} from "next";
import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import Head from "next/head"
import {isPathLocal} from "../../utils/convinienceHelper";
import {CourseCardProps} from "../../components/CourseCard";
import CourseBlock from "../../components/CourseBlock";
import MailingListCTA from "../../components/MailingListCTA";
import {useRouter} from "next/router";
import PlaceholderText from "../../components/PlaceholderText";
import {getByShortcode, LocalCourses} from "../../utils/localCoursesCopy";

export default function CoursePage({course, shortCode}:{course?:CourseCardProps, shortCode:string}){
	const siteTheme = useTheme();
	const router = useRouter();

	if (!course) return <p>Failed to load posts</p>

	return (
		<MainLayout siteTheme={siteTheme} pageDescription={course?.description ?? ""} pageTitle={course?.name ?? ""}>

			{!router.isFallback && course ? (
				<>
					<Head>
						<meta property="og:image" content={ isPathLocal(course.coverImage) ? `https://projectfunction.io${course.coverImage}` : course.coverImage } />
						<meta name="twitter:card" content="summary_large_image" />
						<meta property="og:url" content={`https://projectfunction.io/courses/${ shortCode }`} />
						<link rel="canonical" href={`https://projectfunction.io/courses/${ shortCode }`} />
					</Head>

					<ContentContainer>
						<CourseBlock {...course} />
					</ContentContainer>

					<MailingListCTA listIdentifier={`courses:${[...course?.categories].sort().join(',')}`}/>
				</>
			) : (
				<ContentContainer fullHeight={true}>
					<PlaceholderText
						title={"OH NO!"}
						message={"Sorry, something went wrong :/"}
					/>
				</ContentContainer>
			)}

		</MainLayout>
	)

}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: LocalCourses.map(course => `/courses/${course.shortCode}`),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const shortCode = params.shortCode as string;
	const posts = getByShortcode(shortCode);

	return {
		props: {
			course: (posts)?.[0] ?? null,
			shortCode
		},
		revalidate: 60
	};
};