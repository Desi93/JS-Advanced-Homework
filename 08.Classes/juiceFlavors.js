function solve(input) {
    let juiceFlavors = new Map();
    let bottlesMap = new Map();
    input.forEach(line => {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (juiceFlavors.has(juice)) {
            let oldQuantity = juiceFlavors.get(juice);
            juiceFlavors.set(juice, { quantity: quantity + oldQuantity.quantity });
        } else {
            juiceFlavors.set(juice, { quantity: quantity });
        }

        let bottle = Math.floor(juiceFlavors.get(juice).quantity / 1000);
        if(bottle > 0){
            bottlesMap.set(juice, { bottle: bottle });
        }
    });

    let outputArr = [];
    for(let flavor of bottlesMap){
        let output = `${flavor[0]} => ${flavor[1].bottle}`
        outputArr.push(output);
    }

    outputArr.forEach(el => console.log(el))
}

solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
);