function solve(input) {
    let heroes = [];

    while(input.length > 0){
        let hero = input.shift();
        let [name, level, itemsString] = hero.split(' / ');

        level = Number(level);
        const items = itemsString ? itemsString.split(', ') : [];

        heroes.push({ name, level, items });

        
    }
    
    return JSON.stringify(heroes);
}

console.log(solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
));