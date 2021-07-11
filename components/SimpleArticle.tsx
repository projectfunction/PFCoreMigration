import articleStyle from "./../styles/articleContent.module.scss"

export default function SimpleArticle({title, children}){
	return (
		<article className={articleStyle.articleContentBlock}>

			<header>
				<h1>
					{title.split(/[\n:]/gm)[0]}
					<span>{title.split(/[\n:]/gm)[1]}</span>
				</h1>
			</header>

			{children}

		</article>
	)
}