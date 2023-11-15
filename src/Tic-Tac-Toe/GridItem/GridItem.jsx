
import { useState, useRef, useEffect } from "react"
import "./GridItem.css"
import { useFetcher } from "react-router-dom";

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
        <div className="GridItem">
            {/* <h2>{gridItemLocation}</h2>
            <h2>{icon}</h2> */}
            <button onClick={handleClick}>Click here</button>
            {/* {some Function} */}
        </div>
    )
}