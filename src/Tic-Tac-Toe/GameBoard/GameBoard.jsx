import {useState, useEffect, useRef} from "react"
import {GridItem} from "../GridItem/GridItem"
import "./GameBoard.css"

export default function GameBoard() {
	// 0 - empty | 1 - first player | 2 - second player
	const [currentPlayer, setCurrentPlayer] = useState(1)
	const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

	function handleClick() {
		const player = currentPlayer === 1 ? 2 : 1
		setCurrentPlayer(player)
	}

	const GridItems = boardState.map((item, idx) => (
		<GridItem
			click={handleClick}
			key={idx}
			gridItemLocation={idx}
			gridItemState={item}
			setGridItemState={setBoardState}
		/>
	))
	return (
		<main>
			<div className="GameBoard">{GridItems}</div>
		</main>
	)
}
