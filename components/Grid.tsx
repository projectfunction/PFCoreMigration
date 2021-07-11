import gridStyles from "./../styles/grid.module.scss"

export type GridProps = {
	children,
	isCentered?:boolean,
	className?:string,
	columnCount?:"auto"|1|2|3|4
}

export default function Grid({children, isCentered, className, columnCount}:GridProps){
	let colClass;

	switch (columnCount){
		case 1: colClass = gridStyles.gridCol1; break;
		case 2: colClass = gridStyles.gridCol2; break;
		case 3: colClass = gridStyles.gridCol3; break;
		case 4: colClass = gridStyles.gridCol4; break;
		default: colClass = gridStyles.gridColAuto;
	}

	return (
		<div className={[isCentered ? gridStyles.centeredGrid : gridStyles.grid, colClass, className].join(" ")}>
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