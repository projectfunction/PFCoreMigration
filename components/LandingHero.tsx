import heroStyle from "../styles/hero.module.scss";
import pfCollabSvg from "./vectors/pf_collab.svg";

export default function LandingHero({}){
	return (
		<section className={heroStyle.hero}>
			<div>
				<div className={heroStyle.textBlock}>
					<h1>Discover your <br/> Development Skills</h1>


					<p>
						Since 2018, ProjectFunction has delivered over <b>60 free sessions</b> in
						Web Development, and Unity.
					</p>
					<p>
						As we grow, we strive to continue our work to <b>create pathways for
						the marginalised</b> in Tech.
					</p>

				</div>

				<div className={heroStyle.imageBlock}>
					{pfCollabSvg()}
				</div>
			</div>
		</section>
	)
}