import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import Grid from "../../components/Grid";
import {NoteCard} from "../../components/Notes";
import noteStyles from "../../styles/notes.module.scss"
import SimplePaper from "../../components/SimplePaper";
import AnchorPodcastPlayer from "../../components/AnchorPodcastPlayer";
import {useEffect, useState} from "react";
import useSearchQueries from "../../utils/useSearchQueries";

export default function Notes({blogPosts, latestPodcast}){
	let siteTheme = useTheme();

	const [posts, setPosts] = useState(blogPosts);
	const {query} = useSearchQueries();

	useEffect(()=>{
		if (query['by']){
			setPosts(blogPosts.filter(b => [b.createdBy.username, b.createdBy.uuid].indexOf(query['by']) > -1))
		}
	}, [query]);

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"A few words from PF"}>
			<ContentContainer>
				<SimplePaper title={"NOTES\nA FEW WORDS FROM PF"} >
					<br/>

					<AnchorPodcastPlayer src={latestPodcast} />

					<Grid className={noteStyles.noteGrid}>
						{posts.map((b, i) => {
							return (
								<NoteCard
									key={"note_card_" + i}
									slug={b.slug}
									coverImage={b.coverImage}
									category={b.category}
									name={b.name}
								/>
							)
						})}
					</Grid>
				</SimplePaper>
			</ContentContainer>
		</MainLayout>
	)
}

export async function getStaticProps(params) {
	const posts = await fetch("https://api.projectfunction.io/open/notes/list-summary");
	const podcast = await (await fetch("https://api.projectfunction.io/open/podcast/latest")).json();

	return {
		props: {
			blogPosts: await posts.json(),
			latestPodcast: podcast.hasLatest ? podcast.latestEpisodeLink : null
		},
		revalidate: 60
	}
}