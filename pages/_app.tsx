import {AppProps, NextWebVitalsMetric} from "next/app"
import {ThemeContextProvider} from "../components/ThemeContextProvider";

import "../styles/theme/__theme_vars.scss"
import "../styles/theme/pride_overrides.scss"
import "../styles/globals/__defaults.scss"
import "../styles/globals/__fonts.scss"

export function reportWebVitals(metrics:NextWebVitalsMetric) {
	const { id, name, label, value } = metrics;

	if ('ga' in window) window['ga']('send', 'event', {
		eventCategory: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
		eventLabel: id, // id unique to current page load
		eventAction: name,
		nonInteraction: true, // avoids affecting bounce rate.
	});
	
	if ('splitbee' in window) window['splitbee'].track(label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric', {
		eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
		eventLabel: id, // id unique to current page load
		eventAction: name,
		nonInteraction: true, // avoids affecting bounce rate.
	});
}

export default function App({Component, pageProps}:AppProps){
	return <ThemeContextProvider>
		<Component {...pageProps} />
	</ThemeContextProvider>
}
