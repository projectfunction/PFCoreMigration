import {useEffect, useState} from "react";


export const useDarkMode = ():[string, (useSystem:boolean)=>void] => {
	const [mode, setMode] = useState('light');
	const [systemMode, setSystemMode] = useState('light');
	const [isSystem, setIsSystem] = useState(true);

	const saveMode = (mode) => {
		window.sessionStorage.setItem('visualMode', mode)
		setMode(mode)
	};

	const toggle = (useSystem:boolean=false) => {
		if (useSystem || isSystem){
			saveMode(systemMode === "dark" ? "light" : "dark");
		}
		else{
			saveMode(mode === "light" ? "dark" : "light");
		}
	};

	useEffect(() => {
		if (window.matchMedia){
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", ev => {
				let isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
				setSystemMode(isSystemDarkMode ? "dark" : "light");
			});
		}
	}, []);

	useEffect(()=>{
		const savedMode = window.sessionStorage.getItem('visualMode');
		const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		setIsSystem( !savedMode );
		setMode(savedMode ?? (isSystemDarkMode ? "dark" : "light"));
	}, [systemMode])
	
	return [mode, toggle]
};

export function DarkModeToggler({toggle}){

}