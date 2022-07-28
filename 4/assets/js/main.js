/**Easy */
//1
function function1(params) {
    return true;
}

let function2 = function(params){
    return true;
}

let api = (function(){
    let hidden = "temp1234";

    return function(){
        return hidden;
    }
}());

function User() {
    this.age = 27;

    setInterval(() => {
        this.age++;
    }, 1000);
}

let u = new User();

///Arrow function

// let arrow = (a, b) => {
//     return a + b;
// }

// alert(arrow(1, 2));
//
//
//2 

// function paramsCount() {
//     return arguments.length;
// }

// alert(paramsCount(1, 2, 3, 4, 5));
//
//
//3

// function comparisonNumbers(num1, num2) {
//     num1 = parseInt(num1), num2 = parseInt(num2);
//     if(!isNaN(num1) && !isNaN(num2)){
//         if(num1 < num2){
//             return -1;
//         } else if (num1 > num2){
//             return 1;
//         } else if (num1 === num2) {
//             return 0;
//         } else {
//             return "Wrong type of parameters";
//         }
//     } else {
//         return "Wrong type of parameters";
//     }
// }

// let result = comparisonNumbers(1, 1);
// alert(result); 
//
//
//4

// function factorial(num) {
//     let result = 1;
//     num = parseInt(num);
//     if(isNaN(num)){
//         return 0;
//     }

//     if(num === 0 || num === 1){
//         return 1;
//     }

//     for(let i = 1; i <= num; i++){
//         result = result*i;
//     }
//     return result;
// }

// let num = 10;
// let result = factorial(num);

// if(!result) {
//     alert("Error! It must be a number");
// } else {
//     alert(`!${num} = ${result}`);    
// }
//
//
//5

// function digitToNum(num1, num2, num3) {
//     let result = '';
    
//     let args = [parseInt(num1), parseInt(num2), parseInt(num3)];
//     if (arguments.length !== 3) {
//         return false;
//     }
//     for (let i = 0; i < args.length; i++) {
//         if(i === 0 && args[i] === 0) {
//             return false;
//         }
//         if(args[i] < 0 || args[i] > 9){
//             return false;
//         }
//         result +=  String(arguments[i]);
//     }

//     return result;
// }


// alert(digitToNum(1, 2, 3));
//
//
//6

// function calcSquare(width = 0, height = 0) {

//     if(!width && !height){
//         return 0;
//     }
//     if(!height){
//         return width**2;
//     }

//     return width*height;
// }

// alert(calcSquare(2, 8));
//
//
/**medium */
//1
// function perfectNumber(num) {

//     let input = parseInt(num);
//     if (isNaN(input)) {
//         return NaN;
//     }
//     let sum = 0;

//     for (let i = input; i > 1; i--) {
//         if (input % i === 0) {
//             sum += input / i;
//         } else {
//             continue;
//         }
//     }
//     if (input === sum) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // 
// //
// //
// //2
// function findPerfectNumber(min, max) {
//     let result = '';

//     min = parseInt(min), max = parseInt(max);
//     if(min == max){
//         if(perfectNumber(max)){
//             return max;
//         } else {
//             return false;
//         }
//     }

//     if(min > max){
//         let temp = max;
//         max = min;
//         min = temp;
//     }

//     for (let i = min; i <= max; i++) { 
//         if(perfectNumber(i)){
//             result += i+",";
//         }
//     }

//     return result;
// }

// let result = findPerfectNumber(1, 8128);
// console.log(result);


