import {useState, useEffect} from "react"
import {GridItem} from "../GridItem/GridItem"
import "./GameBoard.css"
import * as logic from "../../gameLogic"

export default function GameBoard({
	currentPlayer,
	boardState,
	setCurrentPlayer,
	setBoardState,
	gameOver,
	setGameOver,
}) {
	// 0 - empty | 1 - first player | 2 - second player
	// const [currentPlayer, setCurrentPlayer] = useState(1)
	// const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [declareResult, setDeclareResult] = useState("")
	const [winner, setWinner] = useState(null)
	const GridItems = boardState.map((item, idx) => (
		<GridItem
			setCurrentPlayer={setCurrentPlayer}
			currentPlayer={currentPlayer}
			boardState={boardState}
			key={idx}
			gridItemLocation={idx}
			gridItemState={item}
			setGridItemState={setBoardState}
			winner={winner}
			gameOver={gameOver}
		/>
	))

	useEffect(function () {
		console.log("board state changed!")
		setWinner(
			logic.checkWin(boardState) !== 0
				? `${logic.checkWin(boardState) === 1 ? "X wins!" : "O wins!"}`
				: null,
		)
		setDeclareResult(winner)
		if (!winner && logic.checkTie(boardState)) setDeclareResult("Tie!")
		console.log(winner)
		if (winner) {
			setGameOver(true)
		}
	})

	return (
		<main>
			<h2>&nbsp;{declareResult}&nbsp;</h2>
			<h1>{currentPlayer === 1 ? `X's Turn` : `O's Turn`}</h1>
			<div className="GameBoard">{GridItems}</div>
		</main>
	)
}
