import patreonLogo from "./vectors/patreon.svg"
import ctaStyle from "./../styles/patreon.module.scss"

export type PatreonCtaProps = {
	isLight?:boolean
}

export default function PatreonCTA(props:PatreonCtaProps){
	if(props.isLight){
		return (
			<a href="https://www.patreon.com/projectfunction" rel={"noopener"} target={"_blank"} className={ctaStyle.cta}>
				<div>
					<p>We are driven by the community for the community. Support us on</p>
					{patreonLogo()}
				</div>
			</a>
		)
	} else {
        return (
	        <a href="https://www.patreon.com/projectfunction" rel={"noopener"} target={"_blank"} className={ctaStyle.cta}>
		        <div>
			        <p>We are driven by the community for the community. <wbr/> You can be a part of this project and
				        join us in making a bigger impact, by supporting us on</p>
			        {patreonLogo()}
		        </div>
		    </a>
        )
	}
}