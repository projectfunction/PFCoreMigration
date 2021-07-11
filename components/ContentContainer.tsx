
import style from "./../styles/container.module.scss";

export type ContentContainerProps = {
	children,
	className?:string,
	fullHeight?:boolean
}

export default function ContentContainer({children, className, fullHeight}:ContentContainerProps){
	return (
		<section className={ [style.containerSection, className, fullHeight ? style.fullHeight : ''].join(" ") }>
			{children}
		</section>
	)
}