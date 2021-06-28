import {AppProps} from "next/app"
import "../styles/globals/main.css" //TODO Remove this

import "../styles/globals/section.scss"

export default function App({Component, pageProps}:AppProps){
	return <Component {...pageProps}/>
}