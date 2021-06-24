import MainLayout from "../components/layouts/MainLayout";
import HomepageHero from "../components/HomepageHero";
import {useAppContext} from "../components/application/ContextWrapper";

export default function Homepage(){
	let context = useAppContext();

	return (
		<MainLayout>
			<HomepageHero siteTheme={context.siteTheme}/>

			<h3>Hello world</h3>
			<p>This is it</p>
		</MainLayout>
	)
}