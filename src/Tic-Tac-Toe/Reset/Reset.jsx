import "./Reset.css"

export default function Reset( {gameOver, setGameOver, currentPlayer, boardState, setCurrentPlayer, setBoardState} ) {

    function handleReset(evt) {
        evt.preventDefault();
        setBoardState([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setCurrentPlayer(1)
        setGameOver(false)
        }
    

    return (
        <button onClick={handleReset} className="resetButton">Reset</button>
    )
}