function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn').addEventListener('click', () => { convert(days.value) });
    let hourssButton = document.getElementById('hoursBtn').addEventListener('click', () => { convert(hours.value / 24) });
    let minsButton = document.getElementById('minutesBtn').addEventListener('click', () => { convert(minutes.value / 1440) });
    let secsButton = document.getElementById('secondsBtn').addEventListener('click', () => { convert(seconds.value / 86400)  });

    function convert(day){
        let dayValue = day % 24;
        let hourValue = day * 24;
        let minValue = day * 1440;
        let secValue = day * 86400;

        days.value = dayValue;
        hours.value = hourValue;
        minutes.value = minValue;
        seconds.value = secValue;

        console.log(dayValue)
    }
}