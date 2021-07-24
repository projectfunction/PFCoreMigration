import {useTheme} from "../../components/ThemeContextProvider";
import MainLayout from "../../components/layouts/MainLayout";
import ContentContainer from "../../components/ContentContainer";
import PlaceholderText from "../../components/PlaceholderText";

export default function Jobs(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Jobs"}>
			<ContentContainer fullHeight={true}>
				<PlaceholderText
					title={"COMING SOON"}
					message={"Shhh! This page is under construction and will be ready shortly."}
				/>
			</ContentContainer>
		</MainLayout>
	)
}

export const getServerSideProps = async ({ res }) => {
	res.statusCode = 503;
	return { props: {} };
};