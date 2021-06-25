import pfCollabSvg from "./vectors/pf_collab.svg";

export default function HomepageHero({siteTheme}){
	return (
		<section className="glow_new">
			<div className="hero" data-theme={siteTheme}>
				<div className="container--large flex">
					<div className="flex__item flex__item--half">
						<div>
							<h1 className="title">Creating a
								<wbr/>
								pathway <wbr/> for the
								<wbr/>
								<span className="marginalised">marginalised</span> in <wbr/>tech
							</h1>
							<h5 className="summary sized--2">
								Since 2018, ProjectFunction has taught over 70 learners in
								Nottingham through free development courses.
							</h5>
						</div>
					</div>

					<div className="flex__item flex__item--half flex__item--first">
						<div className="hero__img">
							{pfCollabSvg()}
                        </div>
                    </div>
		        </div>
		    </div>
		</section>
	)
}