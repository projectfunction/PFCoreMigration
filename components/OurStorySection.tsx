import ourStorySection from "./../styles/ourStorySection.module.scss"
import {ChromaTextHeading} from "./ChromaText";


export default function OurStorySection({}){
	return (
		<section className={ourStorySection.section}>
			<ChromaTextHeading type={"collaboration"} chromaTextContent={"Our Story"}>
				Running on 100% tenacity
			</ChromaTextHeading>
			<div className={ourStorySection.content}>
				<p>
					ProjectFunction is formed of a small team of people who understand the challenges faced by
					marginalised people today, as we all belong to this very group. Having overcome (some of!)
					these day-to-day challenges ourselves, we are determined to keep doing our bit.
				</p>
			</div>
		</section>
	)
}