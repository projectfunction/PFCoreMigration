import eventStyles from "./../styles/event.module.scss"
import {NDEvent} from "../utils/types";
import {dateFormat, timeFormat} from "../utils/dateHelper";
import {markdown} from "../utils/reactHelper";
import {titleCase} from "../utils/convinienceHelper";
import {useEffect, useRef, useState} from "react";
import Anchor from "./Anchor";

export default function EventEntry(props:Partial<NDEvent>){
	let {
		group_photo,
		group,
		group_description,
		description,
		iso_date,
		location,
		subject,
		event_url
	} = props;
	let d = new Date(iso_date);
	let ref = useRef<HTMLDivElement>();
	let [isOpen, setIsOpen] = useState(false);

	useEffect(()=>{
		ref.current.addEventListener("click", ev => {
			setIsOpen(v => !v);
		});
	},[]);

	return (
		<div className={[isOpen ? eventStyles.entryOpen : eventStyles.entry].join(" ")}>
			<div className={eventStyles.entryHead} ref={ref}>

				<div className={eventStyles.entryDate}>
					<span>{d.getUTCDate()}</span>
					<span>
						<span>{titleCase(dateFormat(d, "MMMM"))}</span>
						<span>{timeFormat(d, "hh:mmx")} - {location}</span>
					</span>
				</div>

				<img src={group_photo} alt={group} width={50} height={50}/>

				<div className={eventStyles.entryTitle}>
					<strong>{subject}</strong>
					<p>Host: <strong>{group}</strong></p>
				</div>

			</div>
			<div className={eventStyles.entryBody}>
				<div dangerouslySetInnerHTML={markdown(description)}/>
				<br/>
				<div>
					<p><strong>About {group}</strong></p>
				</div>
				<div dangerouslySetInnerHTML={markdown(group_description)}/>
				<div>
					<br/>
					<p><Anchor href={event_url} isExternal={true}>View event detail page</Anchor></p>
				</div>
			</div>
		</div>
	)
}