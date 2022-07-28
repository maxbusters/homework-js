/** Minimum */
//1
let sum = 0.1 + 0.2;
console.log(sum.toFixed(1));
///
//2
let str = '1';
let num = 2;

sum = +str + 2;
console.log(sum);
///
//3
const fileSize = 860;
let gb = Number(prompt("Enter a GB free space: "));
let mb = 0;
let result = 0;
console.log(gb);
if(!NaN){
    mb = gb * 1024;
    result = (mb - (mb % fileSize))/fileSize;
} 

console.log(result);
//
/** Normal */
//1
let money = Number(prompt("Enter a count of your money: "));
let price = Number(prompt("Enter a price of chocolate: "));
let rest = 0;
let count = 0;

if(price > money || isNaN(money) || isNaN(price)) {
    alert("Not enough money");
} else {
    rest = money % price;
    count = (money - rest)/price;
    console.log(rest);
    console.log(count);
    alert("Your money: " + money.toFixed(2) + "\nPrice: "+price.toFixed(2) + "\nRest: " + rest.toFixed(2) + "\nChocolates count: " + count);
} 
//
//2
let number = prompt("Enter a 3-digit number");
result = 0;
if(number.length == 3 && !isNaN(number)){
    while(number) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    } 
    alert(result);
} else {
    alert("Wrong digits count or wrong number");
} 
//
/** hard */
//1
let deposit = Number(prompt("Enter your deposit: "));
const yearPercent = 5;
let percent = ((yearPercent/12)*2)/100;
console.log(percent);
result = 0;

if(deposit > 0 && !isNaN(deposit)) {
    result = deposit * (percent);
    alert(result.toFixed(2));
} else {
    alert("Wrong number");
} 
///
//2
console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);


