function solve(input) {
    const storage = [];

    while (input.length > 0) {
        let product = input.shift();
        let [name, price] = product.split(' : ');
        price = Number(price);
        let letter = name[0];

        if (!storage[name]) {
            storage.push({ name: letter });
            storage.push({ name, price });
        }
    }

    let filteredStorage = storage
        .filter((item, index, self) => index === self
        .findIndex((x) => (x.name === item.name)));

    filteredStorage.sort((a, b) => a.name.localeCompare(b.name));

    let result = [];

    for(let i = 0; i < filteredStorage.length; i++){
        let product = filteredStorage[i].name;
        let price = filteredStorage[i].price;

        if(price == undefined){
            result.push(product);
        } else {
            result.push(`  ${product}: ${Number(price)}`);
        }
    }

    return result.join('\n');

}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));