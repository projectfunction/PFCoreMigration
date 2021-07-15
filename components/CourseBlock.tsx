import courseBlockStyle from "./../styles/courseBlock.module.scss"
import articleBlockStyle from "./../styles/articleContent.module.scss"
import {markdown} from "../utils/reactHelper";
import {dateFormat} from "../utils/dateHelper";
import {titleCase} from "../utils/convinienceHelper";
import Anchor from "./Anchor";
import {CourseCardProps} from "./CourseCard";

export default function CourseBlock(props:CourseCardProps){
	let title = props.name;

	let lastInstructor = props.leadInstructors.slice(-1);
	let instructors = props.leadInstructors.slice(0,-1);

	return (
		<article className={courseBlockStyle.courseBlock}>

			<header>
				<h1>
					{title.indexOf(":") > -1 ? title.split(/[\n:]/gm)[0] : ""}
					<span>{title.indexOf(":") > -1 ? title.split(/[\n:]/gm)[1] : title}</span>
				</h1>
				<span className={courseBlockStyle.byLine}>
					{"Led by "}
					{instructors.map((i, index) => {
						return (
							<>
								{index ? ', ' : ''}<Anchor href={"/courses?by=" + encodeURIComponent(i.username)}>{[i.firstName, i.lastName].join(" ")}</Anchor>
							</>
						)
					})}
					{lastInstructor.map((i, index)=>{
						return (
							<>
								{instructors.length > 0 ? ' and ' : ''}<Anchor href={"/courses?by=" + encodeURIComponent(i.username)}>{[i.firstName, i.lastName].join(" ")}</Anchor>
							</>
						)
					})}
				</span>

			</header>

			<div className={courseBlockStyle.cta}>
				<img src={props.coverImage} alt={""} width={1280} height={712} className={courseBlockStyle.heroImage}/>
				<div>
					<ul>
						<li><strong>Start Date:</strong> {titleCase(dateFormat(props.startDate, "MMMM D, YYYY"))}</li>
						<li><strong>End Date:</strong> {titleCase(dateFormat(props.endDate, "MMMM D, YYYY"))}</li>
						<li><strong>Capacity:</strong> {props.capacity}</li>
						<li><strong>Sessions:</strong> {props.sessionCount}</li>
						<li>
							<button>Apply</button>
						</li>
					</ul>
				</div>
			</div>

			<div className={articleBlockStyle.body}>
				<div dangerouslySetInnerHTML={markdown(props.description)} />
			</div>

		</article>
	)
}