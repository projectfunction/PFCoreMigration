import chromaStyles from "./../styles/chromaText.module.scss"
import React from "react";

type ChromaTextProps = {
	children: string,
	type?: "collaboration" | "default"
}

export function ChromaText({children, type}:ChromaTextProps){
	return (
		<p className={type === "collaboration" ? chromaStyles.chromaCollab : chromaStyles.chroma}>
			<span>{children}</span>
		</p>
	)
}

export function ChromaTextHeading({children, type, chromaTextContent}:ChromaTextProps & {chromaTextContent:string}){
	return (
		<div className={chromaStyles.chromaHeadingSection}>
			<h2>{children}</h2>
			<ChromaText type={type}>{chromaTextContent}</ChromaText>
		</div>
	)
}