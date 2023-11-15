import "./Reset.css"

export default function Reset( {currentPlayer, boardState, setCurrentPlayer, setBoardState} ) {

    function handleReset(evt) {
        evt.preventDefault();
        setBoardState([0, 0, 0, 0, 0, 0, 0, 0, 0])
        setCurrentPlayer(1)
        }
    

    return (
        <button onClick={handleReset} className="resetButton">Reset</button>
    )
}