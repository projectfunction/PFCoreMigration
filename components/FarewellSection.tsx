import joinUpcomingStyle from "./../styles/joinUpcoming.module.scss"
import ContentContainer from "./ContentContainer";
import Anchor from "./Anchor";

export default function FarewellSection({}){

	return (
		<ContentContainer>
			<div className={joinUpcomingStyle.header}>
				<h2>💙 This isn't farewell 💙</h2>

				<p style={{textAlign: "start"}}>
					After 4 years, 7 waves, 9 notes, 25 backers, 78 sessions, 90 Learners, and an uncountable number of
					community supporters, this marks the end of a wonderful era for ProjectFunction.
					This bitter-sweet post will be the last from ProjectFunction as you know it. It outlines how we got
					here, why the temporary preservation is necessary, and most importantly what it means for the
					community going forward.
				</p>

				<br/>

				<Anchor href={'/notes/this-isnt-farewell'}>Read full note</Anchor>
			</div>
		</ContentContainer>
	)
}