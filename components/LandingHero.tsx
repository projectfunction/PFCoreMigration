import heroStyle from "../styles/hero.module.scss";
import pfCollabSvg from "./vectors/pf_collab.svg";
import {propsWithTheme} from "../utils/reactHelper";

export default function LandingHero({id, siteTheme}:propsWithTheme){
	return (
		<section className={heroStyle.hero} id={id} data-theme={siteTheme}>
			<div>
				<div className={heroStyle.textBlock}>
					<h1>A huge <br/> Thank you {'<'}3</h1>


					<p>
						Since 2018, ProjectFunction has worked to <b>create pathways for
						the marginalised</b> in Tech for over <b>90 learners</b> by
						delivering over <b>76 free sessions</b>.
					</p>

				</div>

				<div className={heroStyle.imageBlock}>
					{pfCollabSvg()}
				</div>
			</div>
		</section>
	)
}