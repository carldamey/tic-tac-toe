import { useState, useRef, useEffect } from "react"

export function GridItem({ gridItemLocation, gridItemState, setGridItemState }) {
    const [itemState, setItemState] = useState(gridItemState)
    const player = useRef(null)
    useEffect(function () {
        player.current = "None"
        if (itemState !== 0) player.current = player.current===1 ? "X" : "O"
    }, [itemState])
    return (
        <div>
            <h1>{player.current}</h1>
            <h2>{gridItemLocation}</h2>
            <h2>{gridItemState}</h2>
            {/* {some Function} */}
        </div>
    )
}