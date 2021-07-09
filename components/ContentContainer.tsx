
import style from "./../styles/container.module.scss";

export type ContentContainerProps = {
	children,
	className?:string
}

export default function ContentContainer({children, className}:ContentContainerProps){
	return (
		<section className={ [style.containerSection, className].join(" ") }>
			{children}
		</section>
	)
}