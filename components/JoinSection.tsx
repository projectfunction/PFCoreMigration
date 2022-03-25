import joinUpcomingStyle from "./../styles/joinUpcoming.module.scss"
import {CourseDetail, CourseDetailCard} from "./CourseDetailCard";
import Grid from "./Grid"
import {useEffect, useState} from "react";
import {dateParse} from "../utils/dateHelper";
import ContentContainer from "./ContentContainer";

export default function JoinSection({}){

	const [courses, setCourses] = useState<CourseDetail[]>([]);

	useEffect(()=>{
		setCourses([
			{
				name: "INTRO TO\nWEB DEV",
				applicationStatus: "Open",
				signupLink: "https://campus.projectfunction.io/x/enrol/wdb22022ts40",
				duration: "9 Weeks",
				location: "Nonsuch Studios, 2 Lower Parliament St, Nottingham, NG1 1EH",
				startDate: dateParse("12 apr 2022", "DD MMM YYYY")
			},
			{
				name: "INTRO TO\nNEXT.JS",
				applicationStatus: "Opening Soon",
				duration: "6 Hours",
				location: "TBC"
			},
			{
				name: "GET STARTED\nWITH C#.NET",
				applicationStatus: "Cancelled",
				duration: "9 Weeks",
				location: "Remote/Online",
				startDate: dateParse("3rd aug 2021", "DD MMM YYYY")
			}
		])
	}, []);

	return (
		<ContentContainer>
			<div className={joinUpcomingStyle.header}>
				<h2>Join our next waves</h2>

				<p>At ProjectFunction, each cohort is called a <strong><em>wave</em></strong>.<br/>
					Join a wave and experience <strong><em>not</em></strong> learning alone.</p>
			</div>

			<Grid columnCount={3}>
				{courses.map((courseInfo,i) => {
					return <CourseDetailCard {...courseInfo} key={`course-detail-${i}`}/>
				})}
			</Grid>
		</ContentContainer>
	)
}