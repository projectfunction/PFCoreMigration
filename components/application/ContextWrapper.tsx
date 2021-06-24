import { createContext, useContext } from 'react';

const Context = createContext({
	siteTheme:""
});

export function AppContext({ children }) {
	let sharedState = {
		siteTheme: ""
	}

	return (
		<Context.Provider value={sharedState}>
			{children}
		</Context.Provider>
	);
}

export function useAppContext() {
	return useContext(Context);
}