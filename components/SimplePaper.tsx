import paperStyle from "./../styles/paperContent.module.scss"

export default function SimplePaper({title, children}:{title:string, children?}){
	return (
		<article className={paperStyle.paperContentBlock}>

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