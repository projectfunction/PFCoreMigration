
import style from "./../styles/container.module.scss";

export type ContentContainerProps = {
	children,
	className?:string,
	fullHeight?:boolean,
	isDark?:boolean
}

export default function ContentContainer({children, className, fullHeight, isDark}:ContentContainerProps){
	return (
		<section className={ [fullHeight ? style.fullHeight : '', isDark ? style.darkContainerSection : style.containerSection, className].join(" ") }>
			{children}
		</section>
	)
}