import MainLayout from "../components/layouts/MainLayout";
import {SiteSettingProvider} from "../utils/siteSettings";
import LandingHero from "../components/LandingHero";
import JoinUpcoming from "../components/JoinUpcoming";

export default function Homepage({siteTheme}){

	return (
		<MainLayout siteTheme={siteTheme}>
			<LandingHero id={"hero"} siteTheme={siteTheme}/>

			<JoinUpcoming />
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