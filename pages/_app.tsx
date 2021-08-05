import {AppProps, NextWebVitalsMetric} from "next/app"
import {ThemeContextProvider} from "../components/ThemeContextProvider";

import "../styles/theme/__theme_vars.scss"
import "../styles/theme/pride_overrides.scss"
import "../styles/globals/__defaults.scss"
import "../styles/globals/__fonts.scss"
import {useRouter} from "next/router";
import {useEffect} from "react";

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
	const router = useRouter();

	const navigate = (starting:boolean)=>{
		if ('upg' in window){
			if (starting) window['upg']._init?.();
			else window['upg'].end?.();
		}
	};

	useEffect(() => {
		const handleStart = (url) => {
			navigate(true);
		}
		const handleStop = () => {
			navigate(false);
		}

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleStop)
		router.events.on('routeChangeError', handleStop)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleStop)
			router.events.off('routeChangeError', handleStop)
		}
	}, [router])

	return <ThemeContextProvider>
		<Component {...pageProps} />
	</ThemeContextProvider>
}
