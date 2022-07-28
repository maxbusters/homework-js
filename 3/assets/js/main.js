/** low */
//1
/* let age = parseInt(prompt("Enter your age"));
if(age){
    if(age >= 0 && age <= 11 ) {
        alert("You are child");
    } else if (age >= 12 && age <= 17 ){
        alert("You are teenager");
    } else if (age >= 18 && age <= 59 ) {
        alert("You are adult");
    } else if (age >= 60) {
        alert("You are old");
    }
} else {
    alert("Wrong number");
} */
///
//2
/* let number = parseInt(prompt("Enter a digit from 0 to 9"));
switch (number) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    case 0:
        alert(")");
        break;
    default:
        alert("Wrong number");
        break;
} */
///
//3
/* let num1 = parseInt(prompt("Enter a first number"));
let num2 = parseInt(prompt("Enter a second number"));
let sum = 0;
if (num1 !== num2 && num1 >= 0 && num2 >=0) {
    for (let index = num1 ; index <= num2; index++) {
        sum += index;
    }
    alert(`Digits sum from ${num1} to ${num2} is ${sum}`);
} else {
    alert("Enter a right value - must be a number");
} */
///
//4
/* let num1 = parseInt(prompt("Enter a first number: "));
let num2 = parseInt(prompt("Enter a second number: "));

if(!isNaN(num1) && !isNaN(num2)){
    x = Math.abs(num1);
    y = Math.abs(num2);
    
    while (y) {
        let t = y;
        y = x % y;
        x = t; 
    }
    alert(`Greatest common division of ${num1} and ${num2} is ${x}`);
} else {
    alert("Wrong number");
} */
///
//5
/* let num = parseInt(prompt("Enter a number: "));
let str = "";
if(!isNaN(num)){
    for (let i = 1; i <= num; i++) {

        if(num % i !== 0){
            continue;
        } else {
            str += `${num / i}`;
            if(i === num) {
                str+= '.';
            } else {
                str+= ', ';
            }
        }
    }

    alert(`Divisors of a number: ${str}`);
}  else {
    alert("Wrong number");
} */
///
/** medium */
//1
/* let num = prompt("Enter a 5-digit number");
let numReverse = '';

if(!isNaN(parseInt(num)) && num.length === 5){
    for(i = num.length-1; i >= 0; i--){
        numReverse += String(num[i]);
    }

    if(num === numReverse) {
        alert("It`s polindrom");
    } else {
        alert("It`s not a polindrom");
    }
} else {
    alert("Wrong number");
} */
///
//2
/* let sum = parseFloat(prompt("Enter a purchase amount")).toFixed(2);
let discount = 0;
let str = "";

if (!isNaN(sum) && sum > 0) {
    if (200 <= sum && sum <= 300) {
        discount = 3;
    } else if (300 <= sum && sum <= 500) {
        discount = 5;
    } else if (sum > 500) {
        discount = 7;
    }
    sumWithDiscount = (sum-(sum*(discount/100))).toFixed(2);
    str += `Your purchase amount: ${sum} \n`;
    str += `Your discount: ${discount}% \n`;
    str += `Total price with discount: ${sumWithDiscount}`;
    alert(str);
} else {
    alert("Wrong number");
} */
///
//3
/* let counter = 0;
let numbers = [];

let pos = 0,
    neg = 0,
    zero = 0,
    even = 0,
    odd = 0;

alert("Enter a 10 numbers ");
do{
    let num = parseInt(prompt(`Enter a number #${counter+1}`));
    if(!isNaN(num)){
        numbers[counter] = num;
        counter++;
    } else {
        alert("Wrong number");
        continue;
    }
} while (counter < 10)

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 0){
        zero++;
    } 
    if(numbers[i] > 0) {
        pos++;
    } 
    if(numbers[i] < 0){
        neg++;
    }
    if(numbers[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

let result = "Statistic: \n";
result += `Numbers: ${numbers.join('; ')}\n`;
result += "-----------------------------\n";
result += `Positive: ${pos}\n`;
result += `Negative: ${neg}\n`;
result += `Zero: ${zero}\n`;
result += `Even: ${even}\n`;
result += `Odd: ${odd}\n`;

alert(result); */
///
//4
/* var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let next = true;
let d = new Date();
let counter = d.getDay();
console.log(counter);

do {
    if(counter === 7){
        counter = 0;
    }
    let next = confirm(`Today is ${dayNames[counter]}. Do you wanna see the next day?`);
    if(!next){
        break;
    }
    counter++;
    
    
} while(next === true)
 */
///
/** Hard */
//1
/* let min = 0;
let max = 100;
let num = 0;
let isNum = false;
let isBigger = false;

do{
    num = min+(max-min)/2;
    console.log(num);
    console.log(min);
    console.log(max);
    isNum = confirm(`Is it ${parseInt(num)} ?`);
    if(isNum) {
        alert(`You number is ${parseInt(num)}`);
        break;
    }
    isBigger = confirm(`Is it bigger then ${parseInt(num)}`);
    if(isBigger){
        if(num == 99) {
            alert(`You number is 100`);
            break;
        }

        min = num;
    } else {
        if(num == 1){
            alert(`Your number is 0`);
        }
        max = num;
    }

} while(isNum === false) */
///
//2
/* let start = 2;
let finish = 9;
window.onload = function () {
    let template = `<table border=1 id="1">`;
    for (let i = start; i < finish + 1; i++) {
        template += `<tr>`;
        for(let j = 1; j <= 10; j++){
            template += `<td>${i} x ${j} = ${i*j}</td>`;
        }
        template += `</tr>`;
    }
    document.body.innerHTML = template;
} */
///
//3

/* function isLeapYear(y) {
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? true : false;
};

function daysInMonth(m, y) {
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if(isLeapYear(y)){
                return 29;
            } else {
                return 28;
            }
    }
}

let year = 0;
let month = 0;
let day = 0;
let maxDay = 0;

console.log(`${year} - ${month} - ${day}`);

do {
    year = parseInt(prompt("Enter a year: "));
} while (year < 1970 || year > 2100 || year === 0 || isNaN(year));
do {
    month = parseInt(prompt("Enter a month: "));
} while (month <= 0 || month > 12 || isNaN(month))
do {
    day = parseInt(prompt("Enter a day: "));
    maxDay = daysInMonth(month, year);
    if(day > maxDay) {
        alert(`In this month ${maxDay} days. Enter a correct day`);
        continue;
    } 
     
} while (day <= 0 || day > maxDay || isNaN(day))

let currDate = new Date();
currDate.setFullYear(year, month-1, day);
let tomorrow = new Date(currDate);
tomorrow.setDate(tomorrow.getDate()+1);
alert(`Your entered date: ${day}.${month}.${year}\nTomorrow: ${tomorrow.getDate()}.${tomorrow.getMonth()+1}.${tomorrow.getFullYear()}`); */
///