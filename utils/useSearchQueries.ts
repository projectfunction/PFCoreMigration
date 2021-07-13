import {useEffect, useState} from "react";

export default function useSearchQueries(){
	const [queries, setQueries] = useState({formatted:{}, raw:""});
	const searchQuery = globalThis.document ? document.location.search : '';

	useEffect(()=>{
		let newQueries = {};
		document.location.search
			.substr(1)
			.split('&')
			.forEach(prop => {
				let [k,v] = prop.split('=');
				if (k.trim().length > 0){
					newQueries[k.trim()] = decodeURIComponent(v.trim());
				}
			});
		setQueries({
			formatted: newQueries,
			raw: document.location.search
		});
	}, [searchQuery]);

	return {
		query: queries.formatted,
		rawQuery: queries.raw
	};
}