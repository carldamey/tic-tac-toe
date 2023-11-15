import { useState, useEffect, useRef } from 'react';
import { GridItem } from "../GridItem/GridItem";

export default function OrderHistoryPage() {
    // 0 - empty | 1 - first player | 2 - second player
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [boardState, setBoardState] = useState([0,0,0,0,0,0,0,0,0])
    
    function handleClick() {
        const player = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayer(player)
    }

    const GridItems = boardState.map((item, idx) => 
        <GridItem click={handleClick} key={idx} gridItemLocation={idx} gridItemState={item} setGridItemState={setBoardState}/>
    )
    return (
        <main>
            <h1>Test</h1>
            { GridItems }
        <main className="Gameboard">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </main>
    )
}