import {useTheme} from "../components/ThemeContextProvider";
import MainLayout from "./../components/layouts/MainLayout";
import ContentContainer from "./../components/ContentContainer";
import SimplePaper from "./../components/SimplePaper";
import TrustedByCTA from "./../components/TrustedByCTA";

export default function HowWeTeach(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"How We Teach"}>
			<ContentContainer>
				<SimplePaper title={"HOW WE TEACH:LEARNING WITH PF"}>
					<p>
						Since ProjectFunction started, we have run our courses at a physical location in Nottingham in a
						classroom-like environment; manually tracking engagement and managing communications with
						learners using Email, Slack, and Whatsapp.
					</p>
					<p>
						However, it felt strange to be teaching about ‘tech’ and its potential, without making use of it
						ourselves to simplify our communication and learning management. Therein, a little idea found
						its footing and we decided to start work on a learning platform for our learners; this is where
						version 0 of our learning management system was born.
					</p>
					<p>
						Owing to the success we have seen from working on it since its inception, we continued development
						of this into a standalone platform. Campus is now powered by this platform, and has become a
						core part of how we deliver our courses, simplifying the process and improving the PF experience
						by tenfolds, both for our learners and our instructors.
					</p>
				</SimplePaper>
			</ContentContainer>


			<TrustedByCTA />
		</MainLayout>
	)
}