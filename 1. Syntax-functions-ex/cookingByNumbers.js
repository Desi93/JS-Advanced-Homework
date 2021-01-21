function solve(number, ...params) {
    number = Number(number);
    let operation = params;

    for (let i = 0; i < operation.length; i++) {
        switch (operation[i]) {
            case 'chop':
                number /= 2;
                console.log(number.toFixed(1));
                break;

            case 'dice':
                number = Math.sqrt(number);
                console.log(number.toFixed(1));
                break;

            case 'spice':
                number++;
                console.log(number.toFixed(1));
                break;

            case 'bake':
                number *= 3;
                console.log(number.toFixed(1));
                break;

            case 'fillet':
                number = number * 0.8;
                console.log(number.toFixed(1));
                break;
        }
    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
