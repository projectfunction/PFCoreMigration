import MainLayout from "../../components/layouts/MainLayout";
import ContentContainer from "../../components/ContentContainer";
import {useTheme} from "../../components/ThemeContextProvider";


export default function SponsorUs(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"sponsor"}>
			<ContentContainer>

			</ContentContainer>
		</MainLayout>
	)
}