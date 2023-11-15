import {useState, useEffect, useRef} from "react"
import {GridItem} from "../GridItem/GridItem";
import "./GameBoard.css"
import * as logic from "../../gameLogic";

export default function GameBoard(  ) {
	// 0 - empty | 1 - first player | 2 - second player
	const [currentPlayer, setCurrentPlayer] = useState(1)
	const [boardState, setBoardState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [declareResult, setDeclareResult] = useState('')
    let winner = null;
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
    
    useEffect(function() {
        console.log('board state changed!')
        winner = logic.checkWin(boardState) !== 0 ? `Winner: Player ${logic.checkWin(boardState)}!` : null;
        setDeclareResult(winner)
        if (!winner && logic.checkTie(boardState)) setDeclareResult('Tie!');
        console.log(winner)
    })

	return (
		<main>
			<h1>The current player is: {currentPlayer}</h1>
            <h2>{declareResult}</h2>
			<div className="GameBoard">{GridItems}</div>
		</main>
	)
}
