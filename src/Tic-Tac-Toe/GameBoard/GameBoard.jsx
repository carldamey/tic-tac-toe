import {useState, useEffect, useRef} from "react"
import {GridItem} from "../GridItem/GridItem";
import "./GameBoard.css"

export default function OrderHistoryPage() {
	// 0 - empty | 1 - first player | 2 - second player
	const [currentPlayer, setCurrentPlayer] = useState(1)
	const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
	const GridItems = boardState.map((item, idx) => (
		<GridItem
			setCurrentPlayer={setCurrentPlayer}
			currentPlayer={currentPlayer}
			boardState={boardState}
			key={idx}
			gridItemLocation={idx}
			gridItemState={item}
			setGridItemState={setBoardState}
		/>
	))

	return (
		<main>
			<h1>The current player is: {currentPlayer}</h1>
			<div className="GameBoard">{GridItems}</div>
		</main>
	)
}
