import MainLayout from "../../components/layouts/MainLayout";
import ContentContainer from "../../components/ContentContainer";
import SimplePaper from "../../components/SimplePaper";
import {useTheme} from "../../components/ThemeContextProvider";


export default function AfterCare(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Programmes: After care"}>
			<ContentContainer>
				<SimplePaper title={"AFTER CARE\nHELPING YOU GET YOUR DREAM JOB"}>
					<p><strong>We believe all learners, regardless of their race, gender identity, sexual orientation,
						disability, religion, or financial position, should have access to the resources they need to
						take part in our courses, so that no learner is disadvantaged or discouraged from taking
						part.</strong></p>


					<p>This course is for learners who have completed the Project function bootcamp. In order to move on
						to these next steps you should have some basic technical knowledge. You will also have some idea
						if this is the path you want to go down, as you might be doing some kind of coding in your new
						career.</p>

					<p>We have broken this programme into five informative sessions:</p>

					<ol className="clean-para">
						<li><strong>Career path experiences:</strong> In our first session we will have speakers from
							the Project Function team who will give you a summary on what their day job is like and how
							they got to where they are today. There will also be a chance to ask questions.
						</li>
						<br />
						<li><strong>One to One:</strong> This will be a personal meeting where an Aftercare mentor
							will ask you questions to find out; What your careers objectives are, what you want to
							get out of project Aftercare and what skills you want to work on. With this information
							we can help you create a plan to achieve your goals.
						</li>
						<br />
						<li><strong>How to create the perfect CV:</strong> In a huge job market, a nicely
							designed CV will help you stand out in a crowd. This is great for someone without
							much experience, as a great design can show off your skills. In this workshop we
							will show you examples of CVs that are good, and ones that are not so good. If you
							choose to create one in your own time, we will gladly assist you and give you some
							pointers.
						</li>
						<br />
						<li><strong>Github/Portfolio workshop:</strong>Without much experience this is where
							some students really struggle. Don’t worry you already have a foundation of
							coding skills. In this workshop we will give you sample projects that you can
							build to bulk out your portfolio and github profile. You only need 2-3 pieces of
							really good work to show employers, don’t worry it’s quality over quantity.
						</li>
						<br />
						<li><strong>Follow up One to One:</strong>This will be a chance for you to ask
							an Aftercare mentor any questions following the programme. We will ask if
							you have applied for any jobs, and if we can give you advice that will help
							prepare you.
						</li>
					</ol>

					<p>We are currently looking for a lead for this programme. Are you interested in running a programme
						with PF? <a href="mailto:partnership@projectfunction.io">Drop us a line. </a></p>

					<p>If you are interested in this program please subscribe to our mailing list below.</p>

				</SimplePaper>
			</ContentContainer>
		</MainLayout>
	)
}