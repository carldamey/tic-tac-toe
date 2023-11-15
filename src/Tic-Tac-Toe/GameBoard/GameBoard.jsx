import { useState, useEffect, useRef } from 'react';
import { GridItem } from "../GridItem/GridItem";

export default function OrderHistoryPage() {
    // 0 - empty | 1 - first player | 2 - second player
    const [boardState, setBoardState] = useState([0,0,0,0,0,0,0,0,0])
    const GridItems = boardState.map((item, idx) => 
        <GridItem key={idx} gridItemLocation={idx} gridItemState={item} setGridItemState={setBoardState}/>
    )
    return (
        <main>
            <h1>Test</h1>
            { GridItems }
        </main>
    )
}