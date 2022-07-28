//Input validation
function checkData(input){
    let value = input;
    if(isNaN(value) || !value || value === 0) {
        value = prompt("Enter a  number");
        checkData(value);
    } 
    return +value;
}
///////////////////////////////////////////////
//1
function findRadius() {
    let R = prompt("Enter a radius of circle: ");
    R = checkData(R);

    let result = Math.PI * (R**2);
    result = +result.toFixed(2);
    alert("Circle square: " + result);
}

///////////////////////////////////////////
//2
function findSpeed() {
    let kilometers = prompt("Enter a distance ");

    kilometers = checkData(kilometers);

    let hours = prompt("Enter a hours to way");
    hours = checkData(hours);

    let speed = kilometers / hours;
    alert("Optimal speed: " + Number.parseInt(speed) + "km/h");
}

//////////////////////////////////////////
//3
function convertDollarToEuro() {
    const euro = 0.98;
    let dollar = prompt("Enter a dollars count: ");
    dollar = checkData(dollar);
    let result = dollar * euro;
    alert(`${dollar.toFixed(2)} Dollars = ${result.toFixed(2)} Euro` );
}

findRadius();
findSpeed();
convertDollarToEuro();