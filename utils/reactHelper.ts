
export type propsWithTheme<T = any> = {
	siteTheme?: string,
	id?: string
} & T

export type NavProps = propsWithTheme<{}>

export type FooterProps = propsWithTheme<{}>

export function markup(content:string){
	return {
		__html: content
	}
}

export function when(condition: boolean, handler: () => void){
	if (condition) return handler;
}