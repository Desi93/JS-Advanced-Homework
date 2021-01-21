function solve(input){
    function sortArr(a, b){
        if(a.length > b.length){
            return 1;
        } else if(a.length < b.length){
            return -1;
        } 

        return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    return input.sort(sortArr).join('\n');

}

console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(solve(['test', 'Deny', 'omen', 'Default']));