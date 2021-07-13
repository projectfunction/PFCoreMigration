import Link from "next/link"
import {MouseEventHandler, ReactNode} from "react";

export type AnchorProps = {
	children: ReactNode,
	href: string,
	isExternal?: boolean,
	className?:string,
	title?:string,
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function Anchor(props:AnchorProps){
	const {isExternal, children, href, ...otherProps} = props;

	if (isExternal) {
		return (
			<Link href={href}>
				<a {...otherProps} target={"_blank"} rel={"noopener"}>{children}</a>
			</Link>
		)
	}

	return (
		<Link href={href}>
			<a {...otherProps}>{children}</a>
		</Link>
	)
}