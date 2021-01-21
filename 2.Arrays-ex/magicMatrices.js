function solve(matrix) {
    let rowSum = [];
    let columnSum = [];

    matrix.forEach(row => {
        let sum = row.reduce((result, curr) => (result + curr), 0);
        rowSum.push(sum);
    });


    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[j][i];
        }
        columnSum.push(sum);
    }

    return rowSum.concat(columnSum).every((x, i, arr) => x === arr[0]);
}

console.log(solve([
                    [4, 5, 6],
                    [6, 5, 4],
                    [5, 5, 5]
]));

console.log(solve([
                    [11, 32, 45],
                    [21, 0, 1],
                    [21, 1, 1]
]));