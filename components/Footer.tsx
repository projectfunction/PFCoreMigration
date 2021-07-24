import pfUrlSvg from "./vectors/pf_url.svg"
import footerStyles from "../styles/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDiscord, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {FooterProps} from "../utils/reactHelper";
import Anchor from "./Anchor";

export default function Footer({siteTheme}:FooterProps){
	return (
		<footer data-theme={siteTheme} className={footerStyles.footer}>
			<div className={footerStyles.footerUpper}>
				<div>
					<span className="footer-col__title">Rule of Thumb</span>
					<Anchor href="/policies/privacy-policy">Privacy Policy</Anchor>
					<Anchor href="/policies/terms-conditions">Terms & Conditions</Anchor>
					<Anchor href="/policies/code-of-conduct">Code of Conduct</Anchor>
				</div>

				<div>
					<span className="footer-col__title">Learn</span>
					<Anchor href="https://campus.projectfunction.io">Learning Hub</Anchor>
					<Anchor href="/courses">Our Courses</Anchor>
					<Anchor href="/how-we-teach">How We Teach</Anchor>
				</div>

				<div>
					<span className="footer-col__title">Programmes</span>
					<Anchor href="/programmes/access-for-all">Access For All</Anchor>
					<Anchor href="/programmes/after-care">After Care</Anchor>
				</div>

				<div>
					<span className="footer-col__title">Impact</span>
					<Anchor href="/impact/sponsor">Sponsor</Anchor>
					<Anchor href="/impact/jobs">Jobs</Anchor>
					<Anchor href="/impact/events">Events</Anchor>
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
					<Anchor href="https://twitter.com/intent/follow?user_id=1075373010515824640" isExternal={true} aria-label="Twitter">
						<FontAwesomeIcon icon={faTwitter}/>
					</Anchor>
					<Anchor href="https://www.linkedin.com/company/projectfunction" isExternal={true} aria-label="LinkedIn">
						<FontAwesomeIcon icon={faLinkedin}/>
					</Anchor>
					<Anchor href="mailto:nospam@projectfunction.io" onClick={(event)=> {
						event.preventDefault();
						location.href=['@projectfunction.io',':socials','lto',' mai'].reverse().join('')
					}} isExternal={true} aria-label="Email">
						<FontAwesomeIcon icon={faAt}/>
					</Anchor>
					<Anchor href="https://projectfunction.io/discord" isExternal={true} aria-label="Discord">
						<FontAwesomeIcon icon={faDiscord}/>
					</Anchor>
					<Anchor href="https://www.instagram.com/pfnotts/" isExternal={true} aria-label="Instagram">
						<FontAwesomeIcon icon={faInstagram}/>
					</Anchor>
				</div>
			</div>
		</footer>
	)
}