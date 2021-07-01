import courseDetailStyles from "./../styles/courseDetailCard.module.scss"
import laptopSvg from "./vectors/laptop_d.svg";
import {dateFormat} from "../utils/dateHelper";
import {titleCase} from "../utils/convinienceHelper";

export type CourseDetail = {
	name: string,
	applicationStatus: "Open" | "Opening Soon",
	location: "Remote/Online" | string,
	duration: string,
	startDate: Date,
	signupLink?: string
}

export function CourseDetailCardGrid({children}){
	return (
		<div className={courseDetailStyles.grid}>
			{children}
		</div>
	)
}

export function CourseDetailCard(props:CourseDetail){
	return (
		<div className={courseDetailStyles.card}>

			{laptopSvg()}

			<h3>{props.name.split("\n")[0]} <span>{props.name.split("\n")[1]}</span></h3>
            <p>
                <strong>START DATE</strong>
                <span>{titleCase(dateFormat(props.startDate, "MMM DD YYYY"))}</span>
            </p>

            <p>
                <strong>DURATION</strong>
                <span>{props.duration}</span>
            </p>

            <p>
                <strong>LOCATION</strong>
                <span>{props.location}</span>
            </p>

            <p>
                <strong>APPLICATIONS</strong>
                <span>{props.applicationStatus}</span>
            </p>

			<a href={props.signupLink ?? "#"} aria-disabled={props.applicationStatus !== "Open"}>{props.applicationStatus === "Open" ? "Sign up" : props.applicationStatus}</a>
        </div>
	)
}