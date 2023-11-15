import { useState, useRef, useEffect } from "react"

export function GridItem({ gridItemLocation, gridItemState, setGridItemState, setCurrentPlayer, currentPlayer, boardState }) {
    const player = useRef(currentPlayer);

    const newBoardState = boardState;
    
    function handleClick() {
        if (gridItemState === 0) {
            newBoardState[gridItemLocation] = player.current;
            setGridItemState(newBoardState);
            player.current = currentPlayer === 1 ? 2 : 1;
            setCurrentPlayer(player.current)
            console.log('the current player: ', player.current)
        }
    }

    
    return (
        <div>
            <h2>{gridItemLocation}</h2>
            <h2>{gridItemState}</h2>
            <button onClick={handleClick}>Click here</button>
            {/* {some Function} */}
        </div>
    )
}