function regexTicTacToeWinChecker(board) {
    const regex = new RegExp("(?<toprow>[XO-]{3})(?<middlerow>[XO-]{3})(?<bottomrow>[XO-]{3})", "gid");

    const result = regex.exec(board);

    for(let i = 0; i < 3; i++){
        const horizontal = result[i + 1][0].concat(result[i + 1][1]).concat(result[i + 1][2])
        if(horizontal === "XXX" || horizontal === "OOO") return true;
    }

    for(let i = 0; i < 3; i++){
        const vertical = result[1][i].concat(result[2][i]).concat(result[3][i]);
        if(vertical === "XXX" || vertical === "OOO") return true;
    }

    const diagonalRight = result[1][0].concat(result[2][1]).concat(result[3][2]);

    if(diagonalRight === "XXX" || diagonalRight === "OOO") return true;

    const diagonalLeft = result[3][0].concat(result[2][1]).concat(result[1][2]);

    if(diagonalLeft === "XXX" || diagonalLeft === "OOO") return true;

    return false;
}

console.log(regexTicTacToeWinChecker("XO--X-OOX"))
