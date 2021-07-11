import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import Grid from "../../components/Grid";
import {NoteCard} from "../../components/Notes";
import noteStyles from "../../styles/notes.module.scss"

export default function Notes({blogPosts}){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme}>
			<ContentContainer>
				<Grid className={noteStyles.noteGrid}>
					{blogPosts.map((b, i) => {
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
			</ContentContainer>
		</MainLayout>
	)
}

export async function getStaticProps(params) {
	const res = await fetch("https://api.projectfunction.io/open/notes/list-summary")

	return {
		props: {
			blogPosts: await res.json()
		},
		revalidate: 60
	}
}