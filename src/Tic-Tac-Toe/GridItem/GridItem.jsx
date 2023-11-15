
import { useState, useRef, useEffect } from "react"
import "./GridItem.css"

export function GridItem({ gridItemLocation, gridItemState, setGridItemState, setCurrentPlayer, currentPlayer, boardState, winner }) {
    const player = useRef();
    const buttonColour = useRef(null);
    const [isActive, setActive] = useState("false");


    function handleClick() {
        if (gridItemState === 0 && !winner) {
            const newBoardState = boardState;
            player.current = currentPlayer;
            console.log('current player: ', player.current, ' and item location is: ', gridItemLocation)
            newBoardState[gridItemLocation] = player.current;
            buttonColour.current = player.current;
            player.current = currentPlayer !== 1 ? 1 : 2;
            console.log('the new board state: ', newBoardState)
            setGridItemState(newBoardState);
            setCurrentPlayer(player.current);
            setActive(!isActive);
        }
    }

    let icon = '';

    if (gridItemState !== 0) {
        icon = gridItemState === 1 ? 'X' : 'O';
    }
    
    return (
        <div className="gridItem">
            <button onClick={handleClick} className={`button-${isActive ? "not-active" : "active"} ${buttonColour.current}`}>{icon}</button>
        </div>
    )
}