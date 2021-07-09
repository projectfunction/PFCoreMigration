import React, {useContext, useEffect, useState} from "react";
import {SiteSettingProvider} from "../utils/siteSettings";

const ThemeContext = React.createContext("");

export function ThemeContextProvider({children}){
	const [theme, setTheme] = useState("");

	useEffect(()=>{
		SiteSettingProvider.getTheme().then(setTheme);
	}, []);

	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme(){
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useCount must be used within a CountProvider')
	}
	return context;
}