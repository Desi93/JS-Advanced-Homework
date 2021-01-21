function solve(input){
    let numbers = String(input);
    let sum = 0;
    let same = true;

    for(let i = 0; i < numbers.length; i++){
        let currentNum = Number(numbers[i]);
        let previousNum = Number(numbers[i-1]);

        if(i == 0){
            previousNum = currentNum;
        }

        if(currentNum != previousNum){
            same = false;
        }

        sum += currentNum;
    }

    console.log(same);
    console.log(sum);
}

solve(2222222);