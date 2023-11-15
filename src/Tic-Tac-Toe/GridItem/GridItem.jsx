
import { useState, useRef, useEffect } from "react"
import "./GridItem.css"

export function GridItem({ gridItemLocation, gridItemState, setGridItemState, setCurrentPlayer, currentPlayer, boardState, winner, gameOver }) {
    const player = useRef();
    const buttonColour = useRef(null);
    const [isActive, setActive] = useState("false");
    const [classNameClass, setClassNameClass] = useState('')
    const classs = useRef(['button-not-active', 'button-active', '']);

    useEffect(function() {
        setClassNameClass(classs.current[0])
    }, [gameOver])
    // `button-not-active` `button-active` ''

    function handleClick() {
        if (gridItemState === 0 && !winner) {
            const newBoardState = boardState;
            player.current = currentPlayer;
            console.log('current player: ', player.current, ' and item location is: ', gridItemLocation)
            newBoardState[gridItemLocation] = player.current;
            buttonColour.current = player.current === 1 ? 'playerOne' : 'playerTwo';
            player.current = currentPlayer !== 1 ? 1 : 2;
            console.log('the new board state: ', newBoardState)
            setGridItemState(newBoardState);
            setCurrentPlayer(player.current);
            setClassNameClass(classs.current[1]);
            setActive(!isActive);
        }
    }

    let icon = '';

    if (gridItemState !== 0) {
        icon = gridItemState === 1 ? 'X' : 'O';
    }
    
    return (
        <div className="gridItem">
            <button onClick={handleClick} className={`${classNameClass} ${buttonColour.current}`}>{icon}</button>
        </div>
    )
}