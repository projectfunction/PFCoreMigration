import {useClientDimension} from "../utils/useClientDimension";
import {useRef} from "react";


export default function AnchorPodcastPlayer({src}){
	let {width} = useClientDimension();
	let frameRef = useRef<HTMLIFrameElement>();

	let frameHeight = width >= 848 ? "162px" : "102px";

	if (!src) return null;

	return (
		<iframe
			ref={frameRef}
			src={src}
			height={frameHeight}
			width={"100%"}
			frameBorder={0}
			scrolling={"no"}
			style={{
				marginBottom: "3rem",
				transition: "all .3s",
				opacity: "0",
				pointerEvents: "none"
			}}
			onLoad={ev=>{
				if (frameRef.current != undefined) {
					frameRef.current.style.opacity = "1";
					frameRef.current.style.pointerEvents = "auto";
				}
			}}
		/>
	)
}