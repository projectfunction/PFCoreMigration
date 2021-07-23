import {useTheme} from "../components/ThemeContextProvider";
import MainLayout from "../components/layouts/MainLayout";
import ContentContainer from "../components/ContentContainer";
import PlaceholderText from "../components/PlaceholderText";

export default function error500(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Oops - 500"}>
			<ContentContainer fullHeight={true}>
				<PlaceholderText
					title={"OH NO!"}
					message={"Sorry, something went wrong :/"}
				/>
			</ContentContainer>
		</MainLayout>
	)
}