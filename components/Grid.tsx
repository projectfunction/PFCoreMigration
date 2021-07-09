import gridStyles from "./../styles/grid.module.scss"

export type GridProps = {
	children,
	isCentered?:boolean,
}

export default function Grid({children, isCentered}:GridProps){
	return (
		<div className={isCentered ? gridStyles.centeredGrid : gridStyles.grid}>
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