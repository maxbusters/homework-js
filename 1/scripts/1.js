console.log('Спосіб 1');


//Спосіб 3
function addScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

addScript('scripts/2.js');
addScript('scripts/3.js');


/** 2 */
let user = "Max Skvortsov";
var nameSurname = "Max Skvortsov";
const name = "Max Skvortsov";
let user_name = "Max Skvortsov";

let userData = {
    firstName: "Max",
    lastName: "Skvortsov"
}

/* Wrong variables names 
    
        let 1var = 'wrong';
        let %var = 'wrong';
        let var var = 'wrong';
        var = 'wrong';
        var let = 'wrong';
        let user-id = 'wrong';
*/

//Variables definition styles
//camelCase
let camelStyle = '1';
//_
let under_spacing = '2';
//$
let $user = '3';
//UPPER
let COLOR_RED = 'red';

