function solve(x1, y1, x2, y2) {
    function findDistance(x1, y1, x2, y2) {
        let firstDistance = x1 - x2;
        let secondDistance = y1 - y2;
        return Math.sqrt(firstDistance ** 2 + secondDistance ** 2);
    }

    if (Number.isInteger(findDistance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(findDistance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(findDistance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}



solve(3, 0, 0, 4);
solve(2, 1, 1, 1);