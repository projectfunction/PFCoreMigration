import gridStyles from "./../styles/grid.module.scss"

export default function Grid({children}){
	return (
		<div className={gridStyles.grid}>
			{children}
		</div>
	)
}