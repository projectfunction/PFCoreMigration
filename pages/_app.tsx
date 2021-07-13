import {AppProps, NextWebVitalsMetric} from "next/app"
// import "../styles/globals/main.css" //TODO Remove this

import "../styles/theme/__theme_vars.scss"
import "../styles/theme/pride_overrides.scss"
import "../styles/globals/__defaults.scss"
import "../styles/globals/__fonts.scss"
import {ThemeContextProvider} from "../components/ThemeContextProvider";

export function reportWebVitals(metrics:NextWebVitalsMetric) {
	const { id, name, label, value } = metrics;
	window['ga']('event', name, {
		event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
		event_label: id, // id unique to current page load
		non_interaction: true, // avoids affecting bounce rate.
	});
	console.log('reported', metrics);
}

export default function App({Component, pageProps}:AppProps){
	return <ThemeContextProvider>
		<Component {...pageProps} />
	</ThemeContextProvider>
}