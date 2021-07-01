import joinUpcomingStyle from "./../styles/joinUpcoming.module.scss"
import {CourseDetail, CourseDetailCard, CourseDetailCardGrid} from "./CourseDetailCard";
import {useEffect, useState} from "react";
import {dateParse} from "../utils/dateHelper";

export default function JoinSection({}){

	const [courses, setCourses] = useState<CourseDetail[]>([]);

	useEffect(()=>{
		setCourses([
			{
				name: "PROGRAMMING\nFUNDAMENTALS",
				applicationStatus: "Open",
				duration: "6 Hours",
				location: "Remote/Online",
				startDate: dateParse("3rd july 2021", "DD MMMM YYYY"),
				signupLink: "#"
			},
			{
				name: "GET STARTED\nWITH VUEJS",
				applicationStatus: "Open",
				duration: "5 Weeks",
				location: "Remote/Online",
				startDate: dateParse("10th aug 2021", "DD MMM YYYY"),
				signupLink: "#"
			},
			{
				name: "INTRO TO\nWEB DEV",
				applicationStatus: "Opening Soon",
				duration: "9 Weeks",
				location: "Remote/Online",
				startDate: dateParse("22nd jan 2022", "DD MMM YYYY")
			}
		])
	}, []);

	return (
		<section className={joinUpcomingStyle.joinSection}>
			<div className={joinUpcomingStyle.header}>
				<h2>Join our next waves</h2>

				<p>At ProjectFunction, each cohort is called a <strong><em>wave</em></strong>.<br/>
					Join a wave and experience <strong><em>not</em></strong> learning alone.</p>
			</div>

			<CourseDetailCardGrid>
				{courses.map(courseInfo => {
					return <CourseDetailCard {...courseInfo}/>
				})}
			</CourseDetailCardGrid>
		</section>
	)
}