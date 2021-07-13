import {useTheme} from "../../components/ThemeContextProvider";
import MainLayout from "../../components/layouts/MainLayout";
import ProgrammeSection from "../../components/ProgrammeSection";


export default function Programmes(){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme}>
			<ProgrammeSection isFullHeight={true}/>
		</MainLayout>
	);
}