import MainLayout from "../../components/layouts/MainLayout";
import {useTheme} from "../../components/ThemeContextProvider";
import ContentContainer from "../../components/ContentContainer";
import SimplePaper from "../../components/SimplePaper";
import {useState} from "react";
import EventEntry from "../../components/EventEntry";
import Anchor from "../../components/Anchor";

export default function Events({events}){
	let siteTheme = useTheme();

	return (
		<MainLayout siteTheme={siteTheme} pageTitle={"Events"}>
			<ContentContainer>
				<SimplePaper title={"Events\nAround the community"} >
					<br/>

					{events.sort((a,b)=> {
						return (new Date(a.iso_date)).getTime() - (new Date(b.iso_date)).getTime()
					}).map((b, i) => <EventEntry key={`event_${i}`} {...b}/>)}

					<p>For more local events around Nottingham, visit <Anchor isExternal={true} href={"https://nottingham.digital"}>Nottingham.digital</Anchor></p>
				</SimplePaper>
			</ContentContainer>
		</MainLayout>
	)
}

export async function getStaticProps(params) {
	let noop = ()=>{};
	let e = await fetch("https://projectfunction.io/api/ndevents").catch(noop);
	try{
		let r = !!e ? await e.json() : {data:[]};

		return {
			props: {
				events: r.data,
			},
			revalidate: 60 * 2
		}
	}
	catch(e){
		console.warn("Failed to get any meaningful data for events. Will try again on revalidation");
		console.warn(e);
		return {
			props: {
				events: []	
			},
			revalidate: 60 * 2
		}
	}
}
