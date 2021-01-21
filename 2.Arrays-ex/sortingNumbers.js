function solve(input){
    let sortedArr = input.sort((a, b) => a - b);
    let rearrangedArr = [];

    for(let i = 0; i < sortedArr.length; i++){
        let smallNum = sortedArr[i];
        let bigNum = sortedArr.pop();
        if(!(i == sortedArr.length)){
            rearrangedArr.push(smallNum);
        }
        rearrangedArr.push(bigNum);
    }

    return rearrangedArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 60]));