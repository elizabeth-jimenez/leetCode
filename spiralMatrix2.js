function generateMatrix(n) {
    let matrix = [];

    let x = 0, y = 0,
    dirX = 1, dirY = 0;

    // generate matrix
    for(let i = 0; i < n; i++) {
        matrix.push([...Array(n)].fill('-'));
    }
    // not mine, noting cause cool:
    // const matrix = Array.from({length : m}, () => Array(n).fill(-1));

    //generate cells
    for(let i = 1; i <= n*n; i++) {

        matrix[y][x] = i;


        if((x+dirX < 0) || (x+dirX >= n) || (y+dirY < 0) || (y+dirY >= n) || (matrix[y+dirY][x+dirX] !== '-')) {
            [dirX, dirY] = [-dirY, dirX];
        }

        x += dirX;
        y += dirY;
    }

    return matrix;
}

console.log(generateMatrix(3)); // [[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(1)); // [[1]]