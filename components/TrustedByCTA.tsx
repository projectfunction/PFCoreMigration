import sponsorJH from "./vectors/jh.svg";
import sponsorCollabFutures from "./vectors/collabFutures.svg";
import sponsorNTU from "./vectors/ntu.svg";
import {useEffect, useState} from "react";
import sponsorStyle from "./../styles/trustedCta.module.scss";
import Anchor from "./Anchor";

export default function TrustedByCTA(){
	
	const [sponsors, setSponsors] = useState({});
	
	useEffect(()=>{
		setSponsors({
			"Alec Frusher": "https://twitter.com/alecfrusher",
			"Alex Walker": "https://twitter.com/alexwire",
			"Alexandra Lofthouse": "https://twitter.com/Loftio",
			"Andrew Seward": "https://twitter.com/MrAndrew",
			"Anna Dodson": "https://twitter.com/anna_hax",
			"Billy Williams": "https://twitter.com/iambillwill",
			"Carolina Gomez Gilabert": "https://twitter.com/CarolSaysThings",

			"Chris Emerson": "https://twitter.com/chris_emerson",
			"Helen Joy": "https://twitter.com/LittleHelli",
			"Jamie Tanna": "https://twitter.com/JamieTanna",

			"Jessica White": "https://twitter.com/JessPWhite",
			"Katie Walker": "https://twitter.com/KatCodes",

			"Liam Carpenter": "https://twitter.com/liamc_1996",
			"Mark Goodwin": "https://twitter.com/mr_goodwin",
			"Martin Wright": "https://twitter.com/mawawa",
			"Robert Waring": "https://twitter.com/LintheD",
			"Rosanna Nichols": "https://twitter.com/rosanna20736",
			"Shaun Hare": "https://twitter.com/sdh100Shaun",
			"Steven Pears": "https://twitter.com/StevenPears",
			"Tash Norris": "https://twitter.com/TashJNorris",

			"Tech Nottingham": "https://twitter.com/technottingham",
			"swotly.io": "https://twitter.com/swotlyio",
			"Toby Jones": "https://twitter.com/bit_shifts",
			"Jamie Saunders": "https://twitter.com/4a6d65"
		});
	},[])
	
	return (
		<article className={sponsorStyle.SponsorBlock}>
			<h3 style={{textAlign: "center"}}>Backed by</h3>
			<ul className={sponsorStyle.patronList}>
				{Object.entries<string>(sponsors).map(([name,url], index) => {
					let isLast = Object.keys(sponsors).length -1 === index;
					return <li key={url}><Anchor isExternal={true} href={url}>{name}</Anchor>{isLast ? '' : ' ○ '}</li>
				})}
			</ul>
			<br/>

			<div className={sponsorStyle.sponsorIcons}>
				{sponsorJH()}
				{sponsorCollabFutures()}
				{sponsorNTU()}
	        </div>
	    </article>
	)
}