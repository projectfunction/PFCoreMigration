import MainLayout from "../../components/layouts/MainLayout";
import ContentContainer from "../../components/ContentContainer";
import SimplePaper from "../../components/SimplePaper";
import {useTheme} from "../../components/ThemeContextProvider";


export default function AccessForAll(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Programmes: Access for All"}>
			<ContentContainer>
				<SimplePaper title={"ACCESS FOR ALL\nNO ONE LEFT BEHIND"}>
					<p><strong>All learners, regardless of their race, gender identity, sexual orientation, disability,
						religion, or financial position, should have access to the resources they need to take part in
						our courses, so that no learner is disadvantaged or discouraged from taking part.</strong></p>

					<br />

					<h3>The Programme</h3>

					<p>The pandemic in 2020 has brought about a significant shift in the tech industry, moving more
						towards a remote working environment as a means to continue things as best as normal. At
						ProjectFunction, we’ve also had to shift to planning fully remote courses. Whilst this has
						various benefits and allows us to remain focused on our overall mission — to help the
						under-represented and marginalised get into tech — it has nonetheless reminded us that those
						without sufficient access to equipment and/or internet, would not be able to participate
						remotely. </p>

					<p>Our programme, <strong>AccessForAll</strong>, is designed to ensure our remote courses remain
						as accessible as possible. This programme will enable us to purchase resources for our
						learners to ensure that anyone who wants to take part in our courses can do so, even if they
						do not have access to the internet or their own computers. Over the last few iterations of
						ProjectFunction, there has been a clear pattern that we have seen; around 30% of the
						learners who joined ProjectFunction either didn’t have access to a laptop, or had to borrow
						ones from the university library.</p>

					<p>This meant that they had difficulties due to not having administrative rights to install the
						required software. As ProjectFunction continues to grow, it is important for us to focus on
						making our courses more accessible to those without the necessary equipment.</p>

					<br />

					<h3>Our Plan</h3>

					<p>The <strong>AccessForAll</strong> programme will focus on providing learners who need
						equipment with the following:</p>

					<ul className="clean-para">
						<li>A Windows 10 Laptop</li>
						<li>An Internet dongle</li>
						<li>A mouse</li>
					</ul>

					<p><strong>To achieve this, ProjectFunction plans to raise over £5000 to buy the necessary
						equipment, and to make sure that each learner is not hindered from participating in our
						courses.</strong></p>

					<br />

					<h3>Your Support</h3>

					<p>We have set up a few ways in which you can help us in this endeavour.</p>

					<ul className="clean-para">
						<li><strong>Become a Patron:</strong> if you are able to make a longer term
							commitment through a recurring pledge to support our work, you can become a
							patron by visiting our <a
								href="https://www.patreon.com/projectfunction">Patreon</a> page (if you are
							already a patron, refer your friend to sign up!). Ideal choice for individuals.
						</li>
						<li><strong>Choose to Sponsor:</strong> if you are a company and would like to help
							us make a difference through our dynamic sponsorship options (we also accept
							sponsorship in-kind), drop us a line at <a
								href="mailto:sponsor@projectfunction.io">sponsor@projectfunction.io</a>.
							Best suited to companies of all sizes.
						</li>
						<li><strong>Partner with us:</strong> if you are a company and are eager to work
							with us throughout the year on a highly-tailored partnership plan, get in touch
							with us at <a
								href="mailto:partnership@projectfunction.io">partnership@projectfunction.io</a> to
							chat how we can achieve this with you! Perfect for companies with medium to
							large teams.
						</li>
					</ul>

					<p>Finally, if you are personally unable to financially support us, you can still make a
						bigger impact by retweeting our tweets, sharing our posts, spreading the word; your
						contribution in this way means a lot to us, as it helps us reach more people.
						Practical for anyone, any time.</p>
				</SimplePaper>
			</ContentContainer>
		</MainLayout>
	)
}