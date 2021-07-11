import MainLayout from "../components/layouts/MainLayout";
import {useTheme} from "../components/ThemeContextProvider";
import ContentContainer from "../components/ContentContainer";
import SimplePaper from "../components/SimplePaper";
import MailingListCTA from "../components/MailingListCTA";
import TrustedByCTA from "../components/TrustedByCTA";

export default function About(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme}>
			<ContentContainer>
				<SimplePaper title={"ABOUT US\nWHO WE ARE"}>
					<p>ProjectFunction came about as a result of how difficult it is for beginners to pick up web development
						and design. After taking part as instructors in a recent web development course aimed at encouraging
						more women into tech, we discovered that the resources which were provided by the organizer were either
						outdated or incorrect. And as minorities in tech with some years of experience, we felt quite let down
						by the organizers -even worse, we felt like we were letting down those we were meant to be helping.</p>
					<p>After some further research into the organization, we realized that the reason why the resources were so
						bad, was because the motive was not to educate, but to encourage women into tech by making it appear
						easier than it is - just to be able to have the statistics to say they "helped" women get into the tech
						industry. We felt like we had to do something; hence ProjectFunction was born. A small start up which
						aims to educate and encourage minorities to get involved in the tech industry.</p>
				</SimplePaper>
			</ContentContainer>
			<MailingListCTA />
			<ContentContainer>
				<SimplePaper title={"OUR MISSION\nWHAT WE STRIVE FOR"}>
					<p>Our aim is simple; we want to provide a platform where ideas, step-by-step tutorials and pointers can be shared by creators, learners and designers, in order to encourage and support minorities in tech. We run courses on Web Development, Web Design, and User experience. Unlike other organisations in this field, our courses are open to anyone with an interest in learning, regardless of their age or gender. We try especially hard to create an environment where minorities in tech feel welcomed, and our courses are designed to be comprehensive and easy to pick up by anyone, regardless of their skill-set.</p>

					<p>In addition to providing free courses, we strive to maintain an online platform where thoughtful and educational exchanges of ideas can take place. As of January 2019, we launched our free online tools to enhance our members' learning experience.</p>

					<p>We value all feedback, and are open to suggestions. We will try our best to implement any changes if there is enough demand for it. And where necessary we will create community threads to discuss or collect feedback on new features or ideas. Together, we hope to shape this platform into a community-driven space, where content is kept up to date, accessible, and free.</p>

					<p>Lets do this! 💪</p>
				</SimplePaper>
			</ContentContainer>
			<TrustedByCTA />
		</MainLayout>
	)
}