function solve(input){
    let array = [];
    let counter = 0;

    for(let i = 0; i < input.length; i++){
        counter++;
        let command = input[i];
        switch(command){
            case 'add':
                array.push(counter);
                break;

            case 'remove':
                array.pop();
                break;
        }
    }

    if(array.length > 0 ){
        console.log(array.join('\n'));
    } else {
        console.log('Empty');
    }

}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);