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
				name: "GET STARTED\nWITH C#.NET",
				applicationStatus: "Opening Soon",
				duration: "9 Weeks",
				location: "Remote/Online",
				startDate: dateParse("3rd aug 2021", "DD MMM YYYY")
			},
			{
				name: "INTRO TO\nWEB DEV",
				applicationStatus: "Opening Soon",
				duration: "9 Weeks",
				location: "Remote/Online",
				startDate: dateParse("22nd jan 2022", "DD MMM YYYY")
			},
			{
				name: "PROGRAMMING\nFUNDAMENTALS",
				applicationStatus: "Closed",
				duration: "6 Hours",
				location: "Remote/Online",
				startDate: dateParse("3rd july 2021", "DD MMMM YYYY")
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

			<Grid>
				{courses.map((courseInfo,i) => {
					return <CourseDetailCard {...courseInfo} key={`course-detail-${i}`}/>
				})}
			</Grid>
		</ContentContainer>
	)
}