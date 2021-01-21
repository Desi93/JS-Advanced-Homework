function solve(input){
    let foods = {};

    for(let i = 0; i < input.length; i+=2){
        foods[input[i]] = Number(input[i+1]);
    }

    console.log(foods);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);