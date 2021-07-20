import {Props} from "../utils/reactHelper";
import imageBlockStyle from "./../styles/imageBlock.module.scss";

export type ImageTextProps = Props<{
	imageUrl: string,
	imageAlt: string,
	title: string
}>;

export default function ImageText({imageUrl, imageAlt, title, children}:ImageTextProps){
	return (
		<div className={imageBlockStyle.block}>
			<div className={imageBlockStyle.imageContainer}>
				<img src={imageUrl} alt={imageAlt} width={400} height={400}/>
			</div>
			<div className={imageBlockStyle.textContainer}>
				<h3>{title}</h3>
				<p>{children}</p>
			</div>
		</div>
	);
}