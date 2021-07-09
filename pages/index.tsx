import MainLayout from "../components/layouts/MainLayout";
import {SiteSettingProvider} from "../utils/siteSettings";
import LandingHero from "../components/LandingHero";
import JoinSection from "../components/JoinSection";
import CommitmentSection from "../components/CommitmentSection";
import OurStorySection from "../components/OurStorySection";
import ProgrammeSection from "../components/ProgrammeSection";
import {NotesCTA} from "../components/Notes";

export default function Homepage({siteTheme}){

	return (
		<MainLayout siteTheme={siteTheme}>
			<LandingHero id={"hero"} siteTheme={siteTheme}/>
			<JoinSection />
			<CommitmentSection />
			<OurStorySection />
			<ProgrammeSection />
			<NotesCTA />
		</MainLayout>
	)
}

export async function getStaticProps() {
	return {
		props: {
			siteTheme: await SiteSettingProvider.getTheme()
		},
		revalidate: 30
	}
}