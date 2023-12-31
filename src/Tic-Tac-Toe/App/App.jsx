import {useState} from "react"
import "./App.css"
import GameBoard from "../GameBoard/GameBoard"
import Reset from "../Reset/Reset"

export default function App() {
	const [currentPlayer, setCurrentPlayer] = useState(1)
	const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
	const [gameOver, setGameOver] = useState(false)
	const resetButton = !gameOver ? null : (
		<Reset
			gameOver={gameOver}
			setGameOver={setGameOver}
			boardState={boardState}
			setBoardState={setBoardState}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
		/>
	)

	console.log(gameOver)

	return (
		<main className="App">
			<GameBoard
				boardState={boardState}
				setBoardState={setBoardState}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				gameOver={gameOver}
				setGameOver={setGameOver}
			/>
			{resetButton}
		</main>
	)
}
