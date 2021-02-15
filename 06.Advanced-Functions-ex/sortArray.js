function solve(arr, order){
    let map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }

    return arr.sort(map[order]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));