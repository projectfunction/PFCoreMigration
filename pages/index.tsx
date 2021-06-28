import MainLayout from "../components/layouts/MainLayout";
import HomepageHero from "../components/HomepageHero";
import {SiteSettingProvider} from "../utils/siteSettings";

export default function Homepage({siteTheme}){

	return (
		<MainLayout siteTheme={siteTheme}>
			<HomepageHero siteTheme={siteTheme}/>


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