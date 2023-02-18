var curTime = new Date();

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
};

function convertNumberToWords(number) {
    let date = new Date();
    if (number in numbers) {
        if (number < 10 && number != 0 & number != convertToTwelveHour(date.getHours())) { return `'o-${numbers[number]}`; }
        if (number == 0) { return null; }
        else { return numbers[number]; }
    } else {
        let tens = Math.floor(number / 10) * 10;
        let ones = number % 10;
        return `${numbers[tens]}-${numbers[ones]}`;
    }
}

function convertToTwelveHour(hour) {
    if (hour % 12 == 0) {
        return 12;
    } else {
        return hour % 12;
    }
}

let date = new Date();

document.getElementById("hour").innerHTML = convertNumberToWords(convertToTwelveHour(date.getHours()));
document.getElementById("minute").innerHTML = convertNumberToWords(date.getMinutes());



setInterval(function second() {
    let date = new Date();

    document.getElementById("hour").innerHTML = convertNumberToWords(convertToTwelveHour(date.getHours()));
    document.getElementById("minute").innerHTML = convertNumberToWords(date.getMinutes());
    document.getElementById("ball").style.transform = `rotate(${date.getSeconds() * 360 / 60}deg)`;
}, 500);