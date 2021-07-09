import {AppProps} from "next/app"
// import "../styles/globals/main.css" //TODO Remove this

import "../styles/theme/__theme_vars.scss"
import "../styles/theme/pride_overrides.scss"
import "../styles/globals/__defaults.scss"
import "../styles/globals/__fonts.scss"
import {ThemeContextProvider} from "../components/ThemeContextProvider";


export default function App({Component, pageProps}:AppProps){
	return <ThemeContextProvider>
}