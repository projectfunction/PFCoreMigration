import {AppProps} from "next/app"
import "./../styles/main.css" //TODO Remove this

export default function App({Component, pageProps}:AppProps){
	return <Component {...pageProps}/>
}