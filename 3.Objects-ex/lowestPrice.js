function solve(input){
    const output = {};

    input.forEach(element => {
        let [city, product, price] = element.split(' | ');
        price = Number(price);
        
        if(!output[product]){
            output[product] = { city, price };
        } else {
            if(product.city){
                product.price = price;
            } else {
                output[product] = output[product].price <= price ? output[product] : { city, price };
            }
        }
    });

    let result = [];

    for (let product in output){
        result.push(`${product} -> ${output[product].price} (${output[product].city})`)
    }

    return result.join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']));

console.log(solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
  ]));