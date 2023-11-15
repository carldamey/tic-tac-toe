import { useState, useEffect, useRef } from 'react';
import { GridItem } from "../GridItem/GridItem";

export default function OrderHistoryPage() {
    // 0 - empty | 1 - first player | 2 - second player
    const [boardState, setBoardState] = useState([0,0,0,0,0,0,0,0])

    const GridItems = boardState.forEach(item => {
        <GridItem gridItemLocation={boardState.indexOf(item)} gridItemState={item} setGridItemState={setBoardState}/>
    })
    
    return (
        <main>
            { GridItems }
        </main>
    )
}