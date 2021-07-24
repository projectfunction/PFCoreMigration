import errorStyle from "./../styles/error.module.scss"
import {markup} from "../utils/reactHelper";

export default function PlaceholderText({title, message, children}: {title:string, message?:string, children?}){
	return (
		<div className={errorStyle.errorBlock}>
			<h3>{title}</h3>
			{!!message && <p>{message}</p>}
			{children}
		</div>
	)
}