import MainLayout from "../components/layouts/MainLayout";
import {useTheme} from "../components/ThemeContextProvider";
import SimpleArticle from "../components/SimpleArticle";
import ContentContainer from "../components/ContentContainer";

export default function About(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme}>
			<ContentContainer>
				<SimpleArticle title={"ABOUT US: WHO WE ARE"}/>
			</ContentContainer>
		</MainLayout>
	)
}