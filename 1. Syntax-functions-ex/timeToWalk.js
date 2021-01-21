function solve(steps, meters, kmPerHour){
    let distance = meters * steps;
    
    let speed = kmPerHour / 3.6;
   
    let breaks = Math.floor(distance / 500);
    let time = (distance / speed) + (breaks * 60);
 
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.ceil(time % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    console.log(`${hours}:${minutes}:${seconds}`);

}

solve(2564, 0.70, 5.5);
solve(4000, 0.60, 5);