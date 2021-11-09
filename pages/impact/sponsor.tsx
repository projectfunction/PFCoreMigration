import {useTheme} from "../../components/ThemeContextProvider";
import MainLayout from "../../components/layouts/MainLayout";
import ContentContainer from "../../components/ContentContainer";
import SimplePaper from "../../components/SimplePaper";
import ImageText from "../../components/ImageText";
import PatreonCTA from "../../components/PatreonCTA";
import TrustedByCTA from "../../components/TrustedByCTA";
import ArticleBlock from "../../components/ArticleBlock";
import tableStyle from "../../styles/table.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAt, faCheck} from "@fortawesome/free-solid-svg-icons";

export default function SponsorUs(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Sponsor Us"}>
			<ContentContainer>
				<SimplePaper title={"IMPACT\nSPONSOR US"}>
					<p>
						<strong>
							ProjectFunction is a small start up which aims to educate and encourage under-represented
							and marginalised people to get involved in the tech industry. Since 2018, we have successfully
							taught over 70 learners in Nottingham, UK through our free courses on web development and design.
							We are a zero-profit endeavor, all profits made are reinvested into future courses.
						</strong>
					</p>
					<p>Our courses are open to anyone who is interested or curious about getting into tech, regardless
						of their age or gender. However, space is prioritized for those overlooked in the tech industry
						currently. We provide an environment where our learners feel welcomed, and our courses are designed
						to be comprehensive and easy to pick up by anyone, irrespective of their skill-set.</p>
				</SimplePaper>
			</ContentContainer>

			<ContentContainer isDark={true}>
				<ImageText imageUrl="/public/core/images/pf_why_spons_1.jpg" imageAlt="" title="Help build a more diverse tech industry">
					We’re working hard to improve the tech industry in Nottingham by supporting and encouraging people
					from all backgrounds to get involved with technology. We provide free access to learners who are
					interested in development but have no idea where to start. We bridge the gap between those in the
					industry, and those outside or excluded from it.
				</ImageText>

				<ImageText imageUrl="/public/core/images/pf_why_spons_2.jpg" imageAlt="" title="Attract Fresh Talent">
					We bridge the gap between the industry and hidden talents. Our learners come from a range of
					different backgrounds, and by taking part in ProjectFunction, they bring their unique experiences
					and skills over to the tech community. With this access to skills, we work with local companies in
					Nottingham, to connect them with potential opportunities.
				</ImageText>

				{/*TODO Copy needs updating*/}
				<ImageText imageUrl="/public/core/images/pf_why_spons_3.jpg" imageAlt="" title="Bridging The Gap">
					We bridge the gap between the industry and hidden talents. Our learners come from a range of
					different backgrounds, and by taking part in ProjectFunction, they bring their unique experiences
					and skills over to the tech community. With this access to skills, we work with local companies in
					Nottingham, to connect them with potential opportunities.
				</ImageText>
			</ContentContainer>
			
			<ContentContainer>
				<ArticleBlock isMarkdown={false} title={":Ways you can help"}>

					<h4>Partner with us</h4>
					<p>
						If you are a company and are eager to work with us throughout the year on a
						highly-tailored partnership plan, get in touch with us at <a href="mailto:partnership@projectfunction.io">partnership@projectfunction.io</a> to
						go over how we can achieve this with you!
						This is best suited to companies with medium to large teams.
						<br/>
						Perhaps you'd like to offer tickets to your conference to promote learning or run a workshop
						for our learners with your team; partnering offers the best flexibility with how you choose to
						impact PF.
					</p>
					<br/>

					<h4>PayPal Contributions</h4>
					<p>
						If you or your company are looking to make one-off contributions. We have a PayPal.me setup
						to allow you to send your contributions quickly and easily. To begin, simply go to our <a href="https://paypal.me/projectfunction" target={"_blank"} rel={"noopener"}>PayPal.Me</a> page
						and choose 'Send'. (A PayPal account may be required). This is ideal for small business and individuals
						looking to make one-off contributions.
					</p>
					<br/>

					<h4>Become a Sponsor</h4>
					<p>
						If you are a company and would like to help us make a difference through our dynamic
						sponsorship options (we also accept sponsorship in-kind), drop us a line
						at <a href="mailto:sponsor@projectfunction.io">sponsor@projectfunction.io</a>.
						This is perfect for companies of all sizes.
						<br/>
						You can sign up to sponsor a specific PF course through two bands — Gold and Silver.
						Sponsorship covers marketing materials, food and refreshments (pre-pandemic!)
						for learners and instructors, digital infrastructure costs, print costs, and supports
						everything else we may need to run these sessions.
					</p>
					<br/>
					<div className={tableStyle.container}>
						<table cellSpacing="0">
							<tr>
								<th/>
								<th>GOLD</th>
								<th>SILVER</th>
							</tr>
							<tr>
								<td>Support for 9 sessions</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
							</tr>
							<tr>
								<td>Opportunity to speak briefly to the learners at any
									end-of-course demo events
								</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
							</tr>
							<tr>
								<td>Distribution of marketing swag with our learners</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
							</tr>
							<tr>
								<td>Your logo + link included in marketing of our courses on
									our website
								</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
							</tr>
							<tr>
								<td>Your logo on our PFLearner shirt</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
							</tr>
							<tr>
								<td>Twitter Mentions during sessions</td>
								<td>(4 per month)</td>
								<td>(2 per month)</td>
							</tr>
							<tr>
								<td>Single weekly entry of news item (and link) into our
									learning hub for learners
								</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td/>
							</tr>
							<tr>
								<td>Logo on screen during session</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td/>
							</tr>
							<tr>
								<td>Your logo + link shared with PF mailing list when our
									courses are promoted
								</td>
								<td><FontAwesomeIcon icon={faCheck}/></td>
								<td/>
							</tr>
							<tr>
								<td/>
								<td>
									<strong>£1200</strong><br/>
									<span>(SOLD OUT)</span>
								</td>
								<td>
									<strong>£700</strong><br/>
									<span>(2 Remaining)</span>
								</td>
							</tr>
						</table>
					</div>
					<br/>

					<h4>Become a Patron</h4>
					<p>
						If you are able to make a longer term commitment through a recurring pledge to support
						our work, you can become a patron by visiting our <a href="https://www.patreon.com/projectfunction">Patreon</a> page
						(if you are already a patron, refer your friend to sign up!). This is the ideal choice for
						individuals.
					</p>
					<br/>
					<PatreonCTA isLight={true}/>

				</ArticleBlock>
			</ContentContainer>

			<TrustedByCTA />
		</MainLayout>
	)
}