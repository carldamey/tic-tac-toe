
import { useState, useRef, useEffect } from "react"
import "./GridItem.css"

export function GridItem({ gridItemLocation, gridItemState, setGridItemState, setCurrentPlayer, currentPlayer, boardState }) {
    const player = useRef();

    function handleClick() {
        if (gridItemState === 0) {
            const newBoardState = boardState;
            player.current = currentPlayer;
            console.log('current player: ', player.current, ' and item location is: ', gridItemLocation)
            newBoardState[gridItemLocation] = player.current;
            player.current = currentPlayer !== 1 ? 1 : 2;
            console.log('the new board state: ', newBoardState)
            setGridItemState(newBoardState);
            setCurrentPlayer(player.current)
        }
    }

    let icon = '';

    if (gridItemState !== 0) {
        icon = gridItemState === 1 ? 'X' : 'O';
    }
    
    return (
        <div className="gridItem">
            <button className="active" onClick={handleClick}>{icon}</button>
        </div>
    )
}