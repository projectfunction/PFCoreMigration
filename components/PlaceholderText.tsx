import errorStyle from "./../styles/error.module.scss"

export default function PlaceholderText({title, message}){
	return (
		<div className={errorStyle.errorBlock}>
			<h3>{title}</h3>
			<p>{message}</p>
		</div>
	)
}