import {Key, LegacyRef, ReactNode} from "react";
import Markdown from "./mdHelper";

export type Props<T = any> = {
	children?: ReactNode | undefined;
	key?: Key | undefined;
	ref?: LegacyRef<T> | undefined;
} & T;

export type propsWithTheme<T = any> = {
	siteTheme?: string,
	id?: string
} & T

export type NavProps = propsWithTheme<{}>

export type FooterProps = propsWithTheme<{}>

export function markup(content:any){
	return {
		__html: content
	}
}

export function markdown(content:any, ensureSafeAnchor:boolean=true){
	let transformedContent = !!content ? Markdown.transform( content ) : '';
	return {
		__html: ensureSafeAnchor ? Markdown.ensureSafeAnchor(transformedContent) : transformedContent
	}
}

export function when(condition: boolean, handler: () => void){
	if (!condition) return null;
	return handler;
}