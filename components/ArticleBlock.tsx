import articleStyle from "./../styles/articleContent.module.scss"
import {markdown, Props} from "../utils/reactHelper";
import {dateFormat} from "../utils/dateHelper";
import {titleCase} from "../utils/convinienceHelper";
import Anchor from "./Anchor";


export type ArticleBlockProps = Props<{
	title:string,
	publishDate:string,
	category:string,
	summary: string,
	coverImage: string,
	createdBy: {
		firstName: string,
		lastName: string,
		uuid: string,
		profilePicture: string,
		username: string
	}
}>;

export default function ArticleBlock({title, children, publishDate, category, coverImage, summary, createdBy}:ArticleBlockProps){
	return (
		<article className={articleStyle.articleContentBlock}>

			<header>
				<h1>
					{title.indexOf(":") > -1 ? title.split(/[\n:]/gm)[0] : ""}
					<span>{title.indexOf(":") > -1 ? title.split(/[\n:]/gm)[1] : title}</span>
				</h1>
				<span className={articleStyle.publishDate}>Published {titleCase(dateFormat(publishDate, "MMMM D, YYYY"))}</span>
				<span className={articleStyle.byLine}>By <Anchor href={"/notes?by=" + encodeURIComponent(createdBy.username)}>{[createdBy.firstName, createdBy.lastName].join(" ")}</Anchor></span>

				<ul className={articleStyle.categories}>
					{category.split(",").map((cat,i) => {
						return <li key={`category-${i}`}>{cat.trim()}</li>
					})}
				</ul>
			</header>

			<img src={coverImage} alt={""} width={1280} height={712} className={articleStyle.heroImage}/>

			<div className={articleStyle.body}>
				<p><strong>{summary}</strong></p>

				<div dangerouslySetInnerHTML={markdown(children)} />
			</div>

		</article>
	)
}