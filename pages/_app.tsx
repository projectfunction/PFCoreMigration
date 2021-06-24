import {AppProps} from "next/app"
import {AppContext} from "../components/application/ContextWrapper";

export default function CoreApp({Component, pageProps}:AppProps){
	return (
		<>
			<AppContext>
				<Component {...pageProps}/>
			</AppContext>
		</>
	)
}