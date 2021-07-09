import {useEffect, useRef, useState} from "react";


export type SmartImageProps = {
	src?: string,
	height?: number,
	width?: number,
	blurDataURL?: string,
	staticImageData?: StaticImageData & {blurDataURL?:string},
	alt: string
};

export default function SmartImage(props:SmartImageProps){

	const imageRef = useRef<HTMLImageElement>();
	const [style, setStyle] = useState({
		transition: "all 0"
	});

	useEffect(()=>{
		let fullImage = new Image(props.staticImageData.width ?? props.width, props.staticImageData.height ?? props.height);
		fullImage.onload = ()=>{

			setStyle(prev => {
				return {
					...prev,
					filter: "blur(6px)",
					transition: "all .3s"
				}
			});

			imageRef.current.src = props.staticImageData.src ?? props.src;

			setStyle(prev => {
				return {
					...prev,
					filter: "blur(0)"
				}
			});

		};
		fullImage.onerror = ()=>{};
		fullImage.src = props.staticImageData.src ?? props.src;
	}, []);

	return (
		<img ref={imageRef} src={props.staticImageData.blurDataURL ?? props.blurDataURL} alt={props.alt} style={style} />
	)

}