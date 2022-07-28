console.log('Спосіб 3');

//1
let input = prompt("Enter your name");
alert ("Hello, " + input );

//2 
let inputDate = prompt("Enter your birth year");
let currYear = new Date().getFullYear();
if(!(isNaN(inputDate))) {
    let age = currYear - inputDate;
    alert("Your age: " + age);
}

//3
let lenght = prompt("Enter square side lenght: ");
let perimeter = lenght*4;
alert('Perimeter of a square: ' + perimeter);