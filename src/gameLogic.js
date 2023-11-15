module.exports = {
    checkWin,
    checkTie,
}

function checkWin(boardState) {
    const b = boardState;
    // check horizontals
    if (b[0] === b[1] && b[1] === b[2]) return b[0];
    if (b[3] === b[4] && b[4] === b[5]) return b[3];
    if (b[6] === b[7] && b[7] === b[8]) return b[6];
    // check verticals
    if (b[0] === b[3] && b[3] === b[6]) return b[0];
    if (b[1] === b[4] && b[4] === b[7]) return b[1];
    if (b[2] === b[5] && b[5] === b[8]) return b[2];
    // check diagonals
    if (b[0] === b[4] && b[4] === b[8]) return b[4];
    if (b[2] === b[4] && b[4] === b[6]) return b[4];
}

function checkTie(boardState) {
    const b = boardState;
    if (b.includes(0)) return;
    else return null;
}