const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const abstractClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours) > 12 ?
        clockTime.hours - 12 :
        clockTime.hours
});

const appendAPMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

// console.log(civilianHours(abstractClockTime(getCurrentTime())).hours);
// console.log(appendAPMPM(abstractClockTime(getCurrentTime())).ampm);

const display = target => time => target(time);




