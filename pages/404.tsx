import {useTheme} from "../components/ThemeContextProvider";
import MainLayout from "../components/layouts/MainLayout";
import ContentContainer from "../components/ContentContainer";
import PlaceholderText from "../components/PlaceholderText";

export default function error404(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Oops - 404"}>
			<ContentContainer fullHeight={true}>
				<PlaceholderText
					title={"NOT FOUND"}
					message={"Sorry we couldn't find that page"}
				/>
			</ContentContainer>
		</MainLayout>
	)
}