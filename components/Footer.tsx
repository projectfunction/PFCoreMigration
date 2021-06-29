import pfUrlSvg from "./vectors/pf_url.svg"
import footerStyles from "../styles/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDiscord, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faAt} from "@fortawesome/free-solid-svg-icons";

type FooterProps = {
	siteTheme?: string
}

export default function Footer({siteTheme}:FooterProps){
	return (
		<footer data-theme={siteTheme} className={footerStyles.footer}>
			<div className={footerStyles.footerUpper}>
				<div>
					<span className="footer-col__title">Rule of Thumb</span>
					<a href="/policies/privacy-policy">Privacy Policy</a>
					<a href="/policies/terms-conditions">Terms & Conditions</a>
					<a href="/policies/code-of-conduct">Code of Conduct</a>
				</div>

				<div>
					<span className="footer-col__title">Learn</span>
					<a href="https://campus.projectfunction.io">Learning Hub</a>
					<a href="/courses">Our Courses</a>
					<a href="/how-we-teach">How We Teach</a>
				</div>

				<div>
					<span className="footer-col__title">Programmes</span>
					<a href="/programmes/access-for-all">Access For All</a>
					<a href="/programmes/after-care">After Care</a>
				</div>

				<div>
					<span className="footer-col__title">Impact</span>
					<a href="/impact/sponsor">Sponsor</a>
					<a href="/impact/jobs">Jobs</a>
					<a href="/impact/events">Events</a>
				</div>

			</div>

			<div className={footerStyles.footerMiddle}>
				{pfUrlSvg()}
			</div>

			<div className={footerStyles.footerLower}>
				<div className={footerStyles.copyright}>
					<span>ProjectFunction Ltd &copy; {(new Date()).getUTCFullYear()}</span> - <span>Registered company number 13116487</span>
				</div>

				<div className={footerStyles.socials}>
					<a href="https://twitter.com/ProjectFunction" target="_blank" rel="noopener" aria-label="Twitter">
						<FontAwesomeIcon icon={faTwitter}/>
					</a>
					<a href="https://www.linkedin.com/company/projectfunction" target="_blank" rel="noopener" aria-label="LinkedIn">
						<FontAwesomeIcon icon={faLinkedin}/>
					</a>
					<a href="mailto:nospam@projectfunction.io" onClick={(event)=> {
						event.preventDefault();
						location.href=['@projectfunction.io',':socials','lto',' mai'].reverse().join('')
					}} target="_blank" rel="noopener" aria-label="Email">
						<FontAwesomeIcon icon={faAt}/>
					</a>
					<a href="https://projectfunction.io/discord" target="_blank"
					   rel="noopener" aria-label="Discord">
						<FontAwesomeIcon icon={faDiscord}/>
					</a>
					<a href="https://www.instagram.com/pfnotts/" target="_blank"
					   rel="noopener" aria-label="Instagram">
						<FontAwesomeIcon icon={faInstagram}/>
					</a>
				</div>
			</div>
		</footer>
	)
}