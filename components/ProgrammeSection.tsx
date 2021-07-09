import programmeSectionStyles from "./../styles/programmeSection.module.scss"
import accessForAllSvg from "./vectors/access_for_all_logo.svg"
import afterCareSvg from "./vectors/after_care_logo.svg"
import {ChromaTextHeading} from "./ChromaText";
import Grid, {GridItem} from "./Grid";
import ContentContainer from "./ContentContainer";


export default function ProgrammeSection({}){
	return (
		<ContentContainer className={programmeSectionStyles.section}>
			<ChromaTextHeading type={"collaboration"} chromaTextContent={"Our Community"}>
				PF Programmes
			</ChromaTextHeading>

			<Grid isCentered={true}>
				<GridItem>
					<div className={programmeSectionStyles.previewIcon}>
						{accessForAllSvg()}
					</div>
					<br/>
					<br/>
					<p>
						All learners, regardless of their race, gender identity, sexual orientation, disability,
						religion, or financial position, should have access to the resources they need to take
						part in our courses.
					</p>
					<a href="/programmes/access-for-all" className={programmeSectionStyles.link}>Find out more</a>
				</GridItem>

				<br/>

				<GridItem>
					<div className={programmeSectionStyles.previewIcon}>
						{afterCareSvg()}
					</div>
					<br/>
					<br/>
					<p>
						Need advice on how to apply for junior roles in the tech industry? We'll work with you and
						guide you to create a professional portfolio, with projects to make your Github account stand
						out.
					</p>
					<a href="/programmes/after-care" className={programmeSectionStyles.link}>Find out more</a>
				</GridItem>

			</Grid>
		</ContentContainer>
	)
}