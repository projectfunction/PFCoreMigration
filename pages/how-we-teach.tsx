import {useTheme} from "../components/ThemeContextProvider";
import MainLayout from "./../components/layouts/MainLayout";
import ContentContainer from "./../components/ContentContainer";
import SimplePaper from "./../components/SimplePaper";
import ImageText from "../components/ImageText";
import MailingListCTA from "../components/MailingListCTA";

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

			<ContentContainer>
				<ImageText imageUrl="/public/core/images/course_selection.png" imageCaption="Manage your courses in one place" title="All your courses, in one place:">
					Throughout the year, our learners can sign up to multiple courses running on separate timelines with
					their own unique resources. Everyone has access to their courses via Campus, in a unified location.
					By creating their own profile on Campus, our learners can manage their own learning. No more
					‘requesting access’ woes.
				</ImageText>

				<ImageText imageUrl="/public/core/images/engagement_chart.png" imageCaption="Learner Engagement Chart" title="Managing engagement:">
					Our platform picks up on a learner’s attendance and engagement with their courses and its resources.
					This is an invaluable tool for us, as we can quickly pick up on when a learner is progressing
					exceptionally well, or when they could require more attention or help on a particular aspect of
					the course.
				</ImageText>

				<ImageText imageUrl="/public/core/images/project_selection.png" imageCaption="Manage all your projects in one place" title="Learn by making:">
					Instead of going purely through theory, we give our learners ample opportunity for hands-on
					learning, so they see their work in action. Through the one-click deployment functionality,
					learners can make their work publicly accessible, to share with friends and family.
				</ImageText>

				<ImageText imageUrl="/public/core/images/feedback.png" imageCaption="Get feedback on your submitted work when you want" title="Get instant feedback:">
					Learning as part of a cohort in a remote setting can be challenging, especially to keep on top of
					assignments. To solve this, Campus combines the traditional marking process with automated testing,
					to make instant feedback available to learners on their work, without putting any extra strain on
					instructors.
				</ImageText>

				<br/>

				<p>
					<strong>Tools for purpose:</strong> Campus shines best when our learners are utilizing the power of
					Scratchpad—our interactive code editor—purpose-built for beginners. Setting up a development
					environment blindly, without some foundational knowledge, can be quite off-putting for beginners.
					Scratchpad offers an intuitive way for learners to focus on learning the concepts and foundations
					of development from anywhere, without having to worry about setup on every machine they use.
				</p>

				<figure>
					<img src="/public/core/images/scrachpad_collab.png" alt="The assistant feature of ScratchPad" loading="lazy" />
					<figcaption>ScratchPad: Our Custom Editor with assistance</figcaption>
				</figure>

				<p>
					Our tools aren't created just for the sake of tooling, they are instruments which help foster
					self-learning. Campus has helped bridge the gap, and act as a middle ground to make industry standards
					and tooling more approachable to first time developers. With ProjectFunction, our learners can be
					confident that they will be learning on a platform that is specifically built for them.
				</p>

			</ContentContainer>

			<MailingListCTA />
		</MainLayout>
	)
}