import pfUrlSvg from "./vectors/pf_url.svg"

type FooterProps = {
	siteTheme?: string
}

export default function Footer({siteTheme}:FooterProps){
	return (
		<footer data-theme={siteTheme}>
			<div className="footer-upper">
				<div className="footer-col">
					<span className="footer-col__title">Rule of Thumb</span>
					<a className="footer-col__item" href="/policies/privacy-policy">Privacy Policy</a>
					<a className="footer-col__item" href="/policies/terms-conditions">Terms & Conditions</a>
					<a className="footer-col__item" href="/policies/code-of-conduct">Code of Conduct</a>
				</div>

				<div className="footer-col">
					<span className="footer-col__title">Learn</span>
					<a className="footer-col__item" href="https://campus.projectfunction.io">Learning Hub</a>
					<a className="footer-col__item" href="/courses">Our Courses</a>
					<a className="footer-col__item" href="/how-we-teach">How We Teach</a>
				</div>

				<div className="footer-col">
					<span className="footer-col__title">Programmes</span>
					<a className="footer-col__item" href="/programmes/access-for-all">Access For All</a>
					<a className="footer-col__item" href="/programmes/after-care">After Care</a>
				</div>

				<div className="footer-col">
					<span className="footer-col__title">Impact</span>
					<a className="footer-col__item" href="/impact/sponsor">Sponsor</a>
					<a className="footer-col__item" href="/impact/jobs">Jobs</a>
					<a className="footer-col__item" href="/impact/events">Events</a>
				</div>
			</div>

			<div className="footer-middle">
				{pfUrlSvg()}
			</div>

			<div className="footer-bottom">
				<div className="footer-col">
					<span>ProjectFunction Ltd &copy; {(new Date()).getUTCFullYear()}</span> - <span>Registered company number 13116487</span>
				</div>

				<div className="footer-col footer-col--socials">
					<a className="footer-col__item" href="https://twitter.com/ProjectFunction" target="_blank"
					   rel="noopener" aria-label="Twitter"><i className="fab fa-twitter"/></a>
					<a className="footer-col__item" href="https://www.linkedin.com/company/projectfunction"
					   target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fab fa-linkedin"/></a>
					<a className="footer-col__item" href="mailto:bin@projectfunction.io" onClick={(event)=> {
						event.preventDefault();
						location.href=['@projectfunction.io',':socials','lto',' mai'].reverse().join('')
					}} target="_blank" rel="noopener" aria-label="Email"><i className="fas fa-at"/></a>
					<a className="footer-col__item" href="https://projectfunction.io/discord" target="_blank"
					   rel="noopener" aria-label="Discord"><i className="fab fa-discord"/></a>
					<a className="footer-col__item" href="https://www.instagram.com/pfnotts/" target="_blank"
					   rel="noopener" aria-label="Instagram"><i className="fab fa-instagram"/></a>
				</div>
			</div>
		</footer>
	)
}