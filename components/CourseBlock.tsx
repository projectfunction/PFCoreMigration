import courseBlockStyle from "./../styles/courseBlock.module.scss"
import {markdown} from "../utils/reactHelper";
import {dateFormat} from "../utils/dateHelper";
import {createUrl, titleCase} from "../utils/convinienceHelper";
import Anchor from "./Anchor";
import {CourseCardProps} from "./CourseCard";
import React from "react";

export default function CourseBlock(props:CourseCardProps){
	let title = props.name;

	let lastInstructor = props.leadInstructors.slice(-1);
	let instructors = props.leadInstructors.slice(0,-1);

	let tweetLink = createUrl('https://twitter.com/intent/tweet',  {
		original_referer: 'https://projectfunction.io/',
		ref_src: 'twsrc^tfw',
		related: 'ProjectFunction',
		text: `📣 Check out @ProjectFunction! 📣\n\nFor anyone interested, they are running a '${props.name}' course.\n\n👇👇\n`,
		tw_p: 'tweetbutton',
		url: `https://projectfunction.io/courses/${props.shortCode}`
	});

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
							<React.Fragment key={index}>
								{index ? ', ' : ''}<Anchor href={"/courses?by=" + encodeURIComponent(i.username)}>{[i.firstName, i.lastName].join(" ")}</Anchor>
							</React.Fragment>
						)
					})}
					{lastInstructor.map((i, index)=>{
						return (
							<React.Fragment key={index}>
								{instructors.length > 0 ? ' and ' : ''}<Anchor href={"/courses?by=" + encodeURIComponent(i.username)}>{[i.firstName, i.lastName].join(" ")}</Anchor>
							</React.Fragment>
						)
					})}
				</span>

			</header>

			<div className={courseBlockStyle.cta}>
				<div className={courseBlockStyle.ctaContent}>
					<img src={props.leadInstructors[0].profilePic} alt="" width={64} height={64}/>
					<p>
						Led by
						<strong>{[props.leadInstructors[0].firstName, props.leadInstructors[0].lastName].join(" ")}</strong>
					</p>
					<span>{titleCase(dateFormat(props.startDate, "MMMM D, YYYY"))} - {titleCase(dateFormat(props.endDate, "MMMM D, YYYY"))}</span>

					<div>
						<p><strong>{props.capacity}</strong><span>Capacity</span></p>
						<p><strong>{props.isOnline ? 'Remote' : 'In Person'}</strong><span>Location</span></p>
						<p><strong>{props.sessionCount}</strong><span>Sessions</span></p>
					</div>
				</div>
				<div className={courseBlockStyle.ctaImage}>
					<img src={props.coverImage} alt={""} width={1280} height={712} className={courseBlockStyle.heroImage}/>
					{props.isOpen && (
						<div className={courseBlockStyle.ctaActionGroup}>
							<Anchor
								href={`https://campus.projectfunction.io/x/enrol/${props.shortCode}`}
								className={courseBlockStyle.ctaAction}
							>Enrol</Anchor>

							<Anchor
								href={tweetLink}
								className={courseBlockStyle.ctaActionSecondary}
								isExternal={true}
							>Share</Anchor>

							<Anchor
								href="mailto:nospam@projectfunction.io"
								onClick={(event)=> {
									event.preventDefault();
									location.href=['@projectfunction.io',':hi','lto',' mai'].reverse().join('')
								}}
								isExternal={true}
								aria-label="Email"
								className={courseBlockStyle.ctaActionSecondary}
							>Enquire</Anchor>
						</div>
					)}
				</div>
			</div>

			<div className={courseBlockStyle.body}>
				<div dangerouslySetInnerHTML={markdown(props.description)} />
			</div>

		</article>
	)
}