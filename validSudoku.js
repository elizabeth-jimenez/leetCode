function isValidSudoku(board) {
    const rows = {};
    const cols = {};
    const subGrids = {};

    for(let rI = 0; rI < board.length; rI++) {
        for(let cI = 0; cI < board[0].length; cI++) {

            const currentCellValue = board[rI][cI];
            const gridArr = (Math.floor(rI/3) * 3) + Math.floor(cI/3); // calculate which subgrid arr

            rows[rI] ??= [];
            cols[cI] ??= [];
            subGrids[gridArr] ??= [];

            if(currentCellValue === '.') {
                continue;
            }

            // check row    
            if(rows[rI].includes(currentCellValue)) {
                return false
            }
            // check col
            if(cols[cI].includes(currentCellValue)) {
                return false
            }
            // check subgrid
            if(subGrids[gridArr].includes(currentCellValue)) {
                return false;
            }

            // fill row
            rows[rI].push(currentCellValue);
            // fill col
            cols[cI].push(currentCellValue);
            // fill subgrid
            subGrids[gridArr].push(currentCellValue);
        }
    }

    return true;
}



const board1 = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

const board2 = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

 console.log(isValidSudoku(board1)); //true
 console.log(isValidSudoku(board2)); //false