function spiralMatrix(matrix) {
    let x = 0, y = 0,
    rows = matrix.length, cols = matrix[0].length,
    dX = 1, dY = 0,
    res = [];
     
    //walk all cells
    for(let c = 1; c <= rows*cols; c++) {
        res.push(matrix[y][x]);
        matrix[y][x] = '.';

        //define outta bounds for rows or cols or has visited
        if((y+dY < 0) || (y+dY > rows - 1) || (x+dX < 0) || (x+dX > cols - 1) || (matrix[y+dY][x+dX] === '.')) {
            [dX, dY] = [-dY, dX];
        }

        x+=dX;
        y+=dY;
    }
    return res;
}

console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]

