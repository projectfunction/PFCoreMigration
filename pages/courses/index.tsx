import ContentContainer from "../../components/ContentContainer";
import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import Grid from "../../components/Grid";
import noteStyles from "../../styles/notes.module.scss";
import {NoteCard} from "../../components/Notes";
import SimplePaper from "../../components/SimplePaper";
import {useEffect, useState} from "react";
import useSearchQueries from "../../utils/useSearchQueries";
import {CourseCard} from "../../components/CourseCard";


export default function Courses({courses:courseList}){
	let siteTheme = useTheme();

	const [courses, setCourses] = useState(courseList);
	const {query} = useSearchQueries();

	useEffect(()=>{
		if (query['cat']){
			let cats = query['cat'].split(",").map(w => decodeURIComponent(w).trim());
			let list = courseList.filter(function(c){
				return c.categories.filter(function(cx){
					return cats.findIndex(w => w === cx) > -1
				}).length > 0
			})
			setCourses(list);
		}
	}, [query]);

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Our courses"}>
			<ContentContainer>
				<SimplePaper title={"COURSES\nFIND YOUR FIT"} >

					<Grid className={noteStyles.noteGrid}>
						{courses.map((b, i) => {
							return (
								<CourseCard key={i} {...b}/>
							)
						})}
					</Grid>

				</SimplePaper>
			</ContentContainer>
		</MainLayout>
	)
}

export async function getStaticProps(params) {
	const courses = await fetch("https://api.projectfunction.io/open/courses/list");

	return {
		props: {
			courses: await courses.json()
		},
		revalidate: 60
	}
}