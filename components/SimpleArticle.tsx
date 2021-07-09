import articleStyle from "./../styles/articleContent.module.scss"

export default function SimpleArticle({title}){
	return (
		<article className={articleStyle.articleContentBlock}>

			<header>
				<h1>
					{title.split(/[\n:]/gm)[0]}
					<span>{title.split(/[\n:]/gm)[1]}</span>
				</h1>
			</header>

			<p>ProjectFunction came about as a result of how difficult it is for beginners to pick up web development
				and design. After taking part as instructors in a recent web development course aimed at encouraging
				more women into tech, we discovered that the resources which were provided by the organizer were either
				outdated or incorrect. And as minorities in tech with some years of experience, we felt quite let down
				by the organizers -even worse, we felt like we were letting down those we were meant to be helping.</p>

			<p>After some further research into the organization, we realized that the reason why the resources were so
				bad, was because the motive was not to educate, but to encourage women into tech by making it appear
				easier than it is - just to be able to have the statistics to say they "helped" women get into the tech
				industry. We felt like we had to do something; hence ProjectFunction was born. A small start up which
				aims to educate and encourage minorities to get involved in the tech industry.</p>

		</article>
	)
}