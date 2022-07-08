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
import {arrayOverlaps, dateDiffInDays} from "../../utils/convinienceHelper";
import Anchor from "../../components/Anchor";
import {LocalCourses} from "../../utils/localCoursesCopy";


export default function Courses({courseList}){
	let siteTheme = useTheme();

	const [courses, setCourses] = useState({
		future: [],
		current: [],
		past: []
	});
	const {query} = useSearchQueries();

	useEffect(()=>{
		let list = courseList;
		if (query['cat']) {
			let cats = query['cat'].split(",").map(w => decodeURIComponent(w).trim());
			list = courseList.filter(c => arrayOverlaps(cats, c.categories));
		}

		if (query['by']) {
			let by = query['by'].split(",").map(w => decodeURIComponent(w).trim());
			list = courseList.filter(c => arrayOverlaps(by, c.leadInstructors.map(i => i.username)));
		}

		setCourses({
				current: list.filter(c => {
					let startDate = new Date(c.startDate);
					let endDate = new Date(c.endDate);
					let currentDate = new Date();

					let daysSinceStart = dateDiffInDays(startDate, currentDate);
					let daysSinceEnd = dateDiffInDays(endDate, currentDate);

					return (daysSinceStart > -30 && daysSinceEnd <= 20);
				}),
				future: list.filter(c => {
					let startDate = new Date(c.startDate);
					let currentDate = new Date();

					let daysSinceStart = dateDiffInDays(startDate, currentDate);

					return (daysSinceStart <= -30);
				}).reverse(),
				past: list.filter(c => {
					let currentDate = new Date();
					let endDate = new Date(c.endDate);

					let daysSinceEnd = dateDiffInDays(endDate, currentDate);

					return (daysSinceEnd > 20);
				})
			});
	}, [query]);

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Our courses"}>
			<ContentContainer>
				<SimplePaper title={":COURSES"} >

					{courses.current.length > 0 && <><br/><h3>CURRENT COURSES</h3></>}

					<Grid className={noteStyles.noteGrid}>
						{courses.current.map((b, i) => {
							return (
								<CourseCard key={i} {...b}/>
							)
						})}
					</Grid>

					{courses.future.length > 0 && <><br/><h3>FUTURE COURSES</h3></>}

					<Grid className={noteStyles.noteGrid}>
						{courses.future.map((b, i) => {
							return (
								<CourseCard key={i} {...b}/>
							)
						})}
					</Grid>

					{courses.past.length > 0 && <><br/><h3>PAST COURSES</h3></>}

					<Grid className={noteStyles.noteGrid}>
						{courses.past.map((b, i) => {
							return (
								<CourseCard key={i} {...b}/>
							)
						})}
					</Grid>

					<br/>
					{(query['by'] || query['cat']) && <Anchor href={"/courses"}>View all</Anchor>}

				</SimplePaper>

			</ContentContainer>
		</MainLayout>
	)
}

export async function getStaticProps(params) {
	return {
		props: {
			courseList: LocalCourses
		},
		revalidate: 60
	}
}