import {dateFormat} from "../utils/dateHelper";
import useSWR from "swr";
import noteStyles from "./../styles/notes.module.scss"
import Grid from "./Grid";
import {useState} from "react";

export function NoteCard({slug, coverImage, category, name, summary, createdBy, publishDate}){
	return (
		<div className={noteStyles.notePreviewCard}>
			<a href={"/notes/" + slug }>
				<div className={noteStyles.notePreviewImage}> <img src={coverImage} alt="" loading="lazy" /> </div>
				<span>{category}</span>
				<div className={noteStyles.notePreviewContent}>
					<h5>{name}</h5>
					<p>{summary}</p>
				</div>
			</a>

			<div className={noteStyles.notePreviewMeta}>
				<img src={ createdBy.profilePicture } alt="" loading="lazy" />
				<div>
					<p>
						<strong>{`${createdBy.firstName} ${createdBy.lastName}`.toUpperCase()}</strong>
					</p>
					<p>
						<time dateTime={ dateFormat(new Date(publishDate),"DD/MM/YYYY") } data-r={publishDate}>
							{ dateFormat(new Date(publishDate),"D MMM YYYY") }
						</time>
					</p>
				</div>
			</div>
        </div>
	)
}

export function NotesCTA(){
	const [retries, setRetries] = useState(0);
	const { data, error, revalidate } = useSWR('/api/open/notes/list');
	const blogPosts = data ?? [];
	const isLoading = !data && !error;

	if (!isLoading && !error && data.length < 3 && retries < 3){
		revalidate().catch(console.error);
		setRetries(r => r+1);
	}

	return isLoading ? null : (
		<section className={noteStyles.section}>

				<Grid>
					{blogPosts.splice(0,2).map((b, i) => {
						return (
							<NoteCard
								key={"note_card_" + i}
								slug={b.slug}
								coverImage={b.coverImage}
								category={b.category}
								name={b.name}
								summary={b.summary}
								createdBy={b.createdBy}
								publishDate={b.publishDate}
							/>
						)
					})}

					<div className={noteStyles.notePreviewList}>
						{blogPosts.splice(0, 5).map((b, i) => {
							return (
								<a href={"/notes/" + b.slug} key={"note_preview_list_item" + i}>
									<h5>{b.name}</h5>
									<p>{ dateFormat(new Date(b.publishDate), "D MMM YYYY") }</p>
								</a>
							)
						})}

						<div/>

						<a href="/notes">
							View all Notes
						</a>
					</div>
				</Grid>

		</section>
	)
}