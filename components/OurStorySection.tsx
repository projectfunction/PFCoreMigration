import ourStorySection from "./../styles/ourStorySection.module.scss"
import {ChromaTextHeading} from "./ChromaText";
import pic1 from "./../public/public/core/images/pic1.jpg"
import pic2 from "./../public/public/core/images/pic2.jpg"
import pic3 from "./../public/public/core/images/pic3.jpg"
import patreonCtaStyle from "./../styles/patreon.module.scss"
import PatreonCTA from "./PatreonCTA";
import Anchor from "./Anchor";


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

				<div className={ourStorySection.imageSection}>

					<div className={ourStorySection.imageSectionContent}>
						<img src={pic2.src} alt={""}/>
						<img src={pic1.src} alt={""}/>
						<img src={pic3.src} alt={""}/>
						<div>
							<blockquote>
								"When you get these jobs that you have been so brilliantly trained for, just remember
								that your real job is that if you are free, you need to free somebody else. If you
								have some power, then your job is to empower somebody else."
								<span> — <i>Toni Morrison</i></span>
							</blockquote>
						</div>
					</div>

				</div>

				<PatreonCTA />

				<p className={patreonCtaStyle.subText}>
					If you are a company, you can support <br/> ProjectFunction through
					our <Anchor href="/impact/sponsor">sponsorship options</Anchor>
				</p>
			</div>
		</section>
	)
}