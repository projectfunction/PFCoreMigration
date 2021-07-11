import {useEffect, useMemo, useRef, useState} from "react";
import {throttle} from "./convinienceHelper";


export const useClientDimension = ()=>{
	const [dimension, setDimension] = useState({width:0, height: 0});
	const throttledUpdateHandler = useRef(()=>{
		throttle(()=>{
			setDimension({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}, 300);
	});

	useEffect(()=>{
		setDimension({
			width: window.innerWidth,
			height: window.innerHeight
		});

		window.addEventListener("resize", ev => {
			throttledUpdateHandler.current();
		});
	}, []);

	return dimension;
}