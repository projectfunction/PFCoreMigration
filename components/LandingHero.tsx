import heroStyle from "../styles/hero.module.scss";
import pfCollabSvg from "./vectors/pf_collab.svg";
import {propsWithTheme} from "../utils/reactHelper";

export default function LandingHero({id, siteTheme}:propsWithTheme){
	return (
		<section className={heroStyle.hero} id={id} data-theme={siteTheme}>
			<div>
				<div className={heroStyle.textBlock}>
					<h1>Discover your <br/> Development Skills</h1>


					<p>
						Since 2018, ProjectFunction has delivered over <b>76 free sessions</b> in
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