import commitmentSectionStyles from "./../styles/commitmentSection.module.scss"
import {ChromaText, ChromaTextHeading} from "./ChromaText";


export default function CommitmentSection({}){
	return (
		<section className={commitmentSectionStyles.section}>
			<ChromaTextHeading type={"collaboration"} chromaTextContent={"Our Commitments"}>
				A three-ingredient recipe
			</ChromaTextHeading>
		</section>
	)
}