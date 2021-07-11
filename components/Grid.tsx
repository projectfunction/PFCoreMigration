import gridStyles from "./../styles/grid.module.scss"

export type GridProps = {
	children,
	isCentered?:boolean,
	className?:string
}

export default function Grid({children, isCentered, className}:GridProps){
	return (
		<div className={[isCentered ? gridStyles.centeredGrid : gridStyles.grid, className].join(" ")}>
			{children}
		</div>
	)
}

export function GridItem({children}){
	return (
		<div className={gridStyles.gridItem}>
			{children}
		</div>
	)
}