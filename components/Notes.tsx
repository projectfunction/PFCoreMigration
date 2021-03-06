import {dateFormat} from "../utils/dateHelper";
import noteStyles from "./../styles/notes.module.scss"
import Grid from "./Grid";
import ContentContainer from "./ContentContainer";
import Anchor from "./Anchor";

export type NoteCardProps = {
	slug:string,
	coverImage:string,
	category:string,
	name:string,
	summary?:string,
	createdBy?:any,
	publishDate?:string
};

export function NoteCard({slug, coverImage, category, name, summary, createdBy, publishDate}:NoteCardProps){
	return (
		<div className={noteStyles.notePreviewCard}>
			<Anchor href={"/notes/" + encodeURIComponent(slug) }>
				<div className={noteStyles.notePreviewImage}>
					<img src={coverImage} alt="" loading="lazy" height={140.625} width={250}/>
				</div>
				<span>{category}</span>
				<div className={noteStyles.notePreviewContent}>
					<h5>{name}</h5>
					{summary != undefined ? <p>{summary}</p> : null}
				</div>
			</Anchor>

			{createdBy != undefined && publishDate != undefined ? (
				<div className={noteStyles.notePreviewMeta}>
					<img src={ createdBy.profilePicture } alt="" loading="lazy" width={48} height={48}/>
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
			) : null}
        </div>
	)
}

export function NotesCTA({notes}){
	const blogPosts = [...notes ?? []];
	return (
		<ContentContainer className={noteStyles.section}>

				<Grid columnCount={3}>
					{blogPosts.splice(0,2).map((b, i) => {
						return (
							<NoteCard
								key={"note_card_" + b.slug}
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
								<Anchor href={"/notes/" + encodeURIComponent(b.slug)} key={"note_preview_list_item" + i}>
									<h5>{b.name}</h5>
									<p>{ dateFormat(new Date(b.publishDate), "D MMM YYYY") }</p>
								</Anchor>
							)
						})}

						<div/>

						<Anchor href="/notes">
							View all Notes
						</Anchor>
					</div>
				</Grid>

		</ContentContainer>
	)
}