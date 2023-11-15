
import { useState, useRef, useEffect } from "react"
import "./GridItem.css"

export function GridItem({ gridItemLocation, gridItemState, setGridItemState, click }) {
    const [itemState, setItemState] = useState(gridItemState)
    const player = useRef(null)

    useEffect(function () {
        player.current = "None"
        if (itemState !== 0) player.current = player.current===1 ? "X" : "O";
    }, [itemState])

    return (
        <div className="GridItem">
            <h1>{player.current}</h1>
            <h2>{gridItemLocation}</h2>
            <h2>{gridItemState}</h2>
            <button onClick={click}>Click here</button>
        </div>
    )
}