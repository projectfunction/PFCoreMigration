import MainLayout from "../components/layouts/MainLayout";
import LandingHero from "../components/LandingHero";
import JoinSection from "../components/JoinSection";
import CommitmentSection from "../components/CommitmentSection";
import OurStorySection from "../components/OurStorySection";
import ProgrammeSection from "../components/ProgrammeSection";
import {NotesCTA} from "../components/Notes";
import {useTheme} from "../components/ThemeContextProvider";
import FarewellSection from "../components/FarewellSection";

export default function Homepage(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme}>
			<LandingHero id={"hero"} siteTheme={siteTheme}/>
			{/*<JoinSection />*/}
			<FarewellSection />
			<CommitmentSection />
			<OurStorySection />
			<ProgrammeSection />
			<NotesCTA />
		</MainLayout>
	)
}
