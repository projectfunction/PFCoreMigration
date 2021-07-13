
import style from "./../styles/container.module.scss";

export type ContentContainerProps = {
	children,
	className?:string,
	fullHeight?:boolean
}

export default function ContentContainer({children, className, fullHeight}:ContentContainerProps){
	return (
		<section className={ [fullHeight ? style.fullHeight : '', style.containerSection, className].join(" ") }>
			{children}
		</section>
	)
}