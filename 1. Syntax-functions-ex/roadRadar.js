function roadRadar(speed, area){
    let limit = 0;
    let difference = 0;
    let status = '';

    if(area == 'city'){
        limit = 50;

        if(speed > limit){
            difference = speed - limit;
            if(difference <= 20){
                status = 'speeding';
            } else if(difference <= 40 && difference > 20){
                status = 'excessive speeding';
            } else if(difference > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    } else if(area == 'interstate'){
        limit = 90;

        if(speed > limit){
            difference = speed - limit;
            if(difference <= 20){
                status = 'speeding';
            } else if(difference <= 40 && difference > 20){
                status = 'excessive speeding';
            } else if(difference > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    } else if(area == 'motorway'){
        limit = 130;

        if(speed > limit){
            difference = speed - limit;
            if(difference <= 20){
                status = 'speeding';
            } else if(difference <= 40 && difference > 20){
                status = 'excessive speeding';
            } else if(difference > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    } else if(area == 'residential'){
        limit = 20;

        if(speed > limit){
            difference = speed - limit;
            if(difference <= 20){
                status = 'speeding';
            } else if(difference <= 40 && difference > 20){
                status = 'excessive speeding';
            } else if(difference > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    }

}

roadRadar(21, 'residential');