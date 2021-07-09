import commitmentSectionStyles from "./../styles/commitmentSection.module.scss"
import beginnerFriendlySvg from "./vectors/beginner_friendly.svg"
import allTheWaySvg from "./vectors/all_the_way.svg"
import significantChangeSvg from "./vectors/significant_change.svg"
import {ChromaTextHeading} from "./ChromaText";
import Grid, {GridItem} from "./Grid";


export default function CommitmentSection({}){
	return (
		<section className={commitmentSectionStyles.section}>
			<ChromaTextHeading type={"collaboration"} chromaTextContent={"Our Commitments"}>
				A three-ingredient recipe
			</ChromaTextHeading>

			<Grid isCentered={true}>
				<GridItem>
					{beginnerFriendlySvg()}
					<h3>Beginner-friendly sessions</h3>
					<p>Our courses are designed for beginners. No tech experience is needed; we start from the basics.</p>
				</GridItem>

				<GridItem>
					{allTheWaySvg()}
					<h3>Real significant change</h3>
					<p>All our lessons are frequently updated and tweaked to reflect new advancements in the tech industry.</p>
				</GridItem>

				<GridItem>
					{significantChangeSvg()}
					<h3>With you, all the way</h3>
					<p>We champion our learners on their journey into tech, with all our heart! You’re in good company.</p>
				</GridItem>
			</Grid>
		</section>
	)
}