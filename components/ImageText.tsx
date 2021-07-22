import {Props} from "../utils/reactHelper";
import imageBlockStyle from "./../styles/imageBlock.module.scss";

export type ImageTextProps = Props<{
	imageUrl: string,
	imageAlt: string,
	imageCaption?: string,
	title: string
} | {
	imageUrl: string,
	imageCaption: string,
	imageAlt?: string,
	title: string
}>;

export default function ImageText({imageUrl, imageAlt, imageCaption, title, children}:ImageTextProps){
	return (
		<div className={imageBlockStyle.block}>
			<div className={!!imageCaption ? imageBlockStyle.figureContainer : imageBlockStyle.imageContainer}>
				{!!imageCaption ? (
					<figure>
						<img src={imageUrl} alt={imageAlt ?? imageCaption} width={400} height={400} loading={"lazy"}/>
						<figcaption>{imageCaption}</figcaption>
					</figure>
				) : (
					<img src={imageUrl} alt={imageAlt} width={400} height={400}/>
				)}
			</div>
			<div className={imageBlockStyle.textContainer}>
				<h3>{title}</h3>
				<p>{children}</p>
			</div>
		</div>
	);
}