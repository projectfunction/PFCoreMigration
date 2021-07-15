import {dateFormat} from "../utils/dateHelper";
import courseStyles from "./../styles/courses.module.scss"
import Anchor from "./Anchor";

export type CourseCardProps = {
	shortCode:string,
	coverImage:string,
	categories:Array<string>,
	hasEnded:boolean,
	atCapacity:boolean,
	isOpen:boolean,
	capacity:number,
	leadInstructors: Array<{
		firstName:string,
		lastName:string,
		username:string,
		profilePic:string
	}>,
	instructors: Array<{
		firstName:string,
		lastName:string,
		username:string,
		profilePic:string
	}>,
	name:string,
	startDate:string,
	endDate:string,
	sessionCount:number,
	description?:string,
	isOnline:boolean
};

export function CourseCard({shortCode, coverImage, categories, name, leadInstructors, startDate, endDate}:CourseCardProps){
	return (
		<div className={courseStyles.card}>
			<Anchor href={"/courses/" + encodeURIComponent(shortCode) }>
				<div className={courseStyles.coverImage}>
					<img src={coverImage} alt="" loading="lazy" height={140.625} width={250}/>
				</div>
				<div className={courseStyles.instructorPic} title={`by ${leadInstructors[0].firstName} ${leadInstructors[0].lastName}`}>
					<img src={leadInstructors[0].profilePic} alt="" loading="lazy" width={48} height={48}/>
				</div>
				<div className={courseStyles.content}>
					<h3>{name}</h3>
				</div>
				<p className={courseStyles.dates}>
					<time dateTime={ dateFormat(new Date(startDate),"DD/MM/YYYY") } data-r={startDate}>
						{ dateFormat(new Date(startDate),"D MMM YYYY") }
					</time>
					{" - "}
					<time dateTime={ dateFormat(new Date(endDate),"DD/MM/YYYY") } data-r={endDate}>
						{ dateFormat(new Date(endDate),"D MMM YYYY") }
					</time>
				</p>
			</Anchor>
			<ul className={courseStyles.categories}>
				{categories.map((c,i) => {
					return (
						<Anchor key={i} href={"/courses?cat=" + encodeURIComponent(c)}>
							<li className={courseStyles.catEntry}>{c}</li>
						</Anchor>
					)
				})}
			</ul>
		</div>
	)
}