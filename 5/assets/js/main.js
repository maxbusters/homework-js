/* EASY
Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),
і наступні методи для роботи з цим об'єктом:
 1)Метод, який виводить на екран інформацію про автомобіль.
 2)Додавання ім’я водія у список
 3)Перевірка водія на наявність його ім’я у списку
 4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
  Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.  */

// let car = {
//     manufacturer: 'Ford',
//     model: 'Focus',
//     year: '2000',
//     averageSpeed: 80,
//     fuelTank: 80,
//     fuelСonsumption: 1.5,
//     drivers: ['Boris', 'Volodymyr'],
//     //1
//     getInfo: function(){
//         let info = [];
//         for(let key in this){
//             if(key === "getInfo"){
//                 return info;
//             }
//             info[key] = this[key];
//         }
//     },
//     //2
//     addDriver: function(name){
//         this.drivers.push(name);
//     },
//     //3
//     hasDriver: function(name){
//         if(this.drivers.includes(name)){
//             return true;
//         }
//         return false;
//     },
//     //4
//     flowMeter: function(distance){
//         distance = parseInt(distance);
//         return {
//             timeToWay: this.parseTime(distance/this.averageSpeed),
//             fuelAmount: (distance*this.fuelСonsumption)/100,
//             distance: distance,
//         }
//     }, 
//     parseTime: function(hours){
//         let minutes = (hours * 60) - (parseInt(hours) * 60);
//         let stopTime = parseInt(hours/4);
//         hours += stopTime;
//         return {
//             hours: parseInt(hours),
//             minutes: minutes,
//             stopTime: stopTime,
//         } 
//     }

// }

// console.log(car.getInfo());
// car.addDriver("Petro");
// console.log(car.hasDriver("Petro"));
// let flowMeter = car.flowMeter(700);
// console.log(`Way distance: ${flowMeter.distance} km\nFuel need: ${flowMeter.fuelAmount} L\nTime to way: ${flowMeter.timeToWay.hours} hours ${flowMeter.timeToWay.minutes} minutes\nTime to stop: ${flowMeter.timeToWay.stopTime} hours`);


/**
 * MEDIUM
 * Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    1)Для виведення часу на екран.
    2)Зміни часу на передану кількість секунд.
    3)Зміни часу на передану кількість хвилин.
    4)Зміни часу на передану кількість годин.
    Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
    Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75».
    Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
 */

// let time = {
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     setCurrentTime: function(){
//         let time = new Date();
//         this.hours = time.getHours();
//         this.minutes = time.getMinutes();
//         this.seconds = time.getSeconds();
//     },
//     setTimeByHours: function(hours = 0){
//         if(this.validateNumber(hours)){
//             hours = parseInt(hours - (parseInt(hours/24)*24));
//             if(hours === 24){
//                 hours = 0;
//             }
//             this.hours = hours;   
//         } 
//         return this.getTime();
//     },
//     setTimeByMinutes: function(minutes = 0){
//         if(this.validateNumber(minutes)){
//             let hours = parseInt(minutes/60);
//             minutes = parseInt(minutes - (hours*60));
//             this.minutes = minutes;
//             this.setTimeByHours(hours);
//         }
//         return this.getTime();
//     },
//     setTimeBySeconds: function(seconds = 0){
//         if(this.validateNumber(seconds)){
//             let minutes = parseInt(seconds/60);
//             seconds = parseInt(seconds - (minutes*60));
//             this.seconds = seconds;
//             this.setTimeByMinutes(minutes);
//         }
//         return this.getTime();
//     },
//     getTime: function(){
//         if(this.hours === 0 && this.minutes === 0 && this.seconds === 0){
//             this.setCurrentTime();
//         }
//         let zeros = ['', '', ''];

//         if(this.hours >= 0 && this.hours <= 9){
//             zeros[0] = 0;
//         }
//         if(this.minutes >= 0 && this.minutes <= 9){
//             zeros[1] = 0;
//         }
//         if(this.seconds >= 0 && this.seconds <= 9){
//             zeros[2] = 0;
//         }
//         return `${zeros[0]}${this.hours}:${zeros[1]}${this.minutes}:${zeros[2]}${this.seconds}`;
//     },
//     validateNumber(number){
//         if(isNaN(parseInt(number)) || parseInt(number) < 0){
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// alert(time.getTime());
// alert(time.setTimeByHours(29));
// alert(time.setTimeByMinutes(2045));
// alert(time.setTimeBySeconds(60050));

/**
 * HARD
 * Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
    1)Складання 2-х об'єктів-дробів.
    2)Віднімання 2-х об'єктів-дробів.
    3)Множення 2-х об'єктів-дробів.
    4)Ділення 2-х об'єктів-дробів.
    5)Скорочення об'єкта-дробу.
 */

let fraction = {
    num: 0,
    denum: 1,
    validateNumber: function (number) {
        if (isNaN(parseInt(number))) {
            return false;
        } else {
            return true;
        }
    },
    validateFraction: function (num, denum, isDivide = false) {
        if (isDivide) {
            if (this.validateNumber(num) && this.validateNumber(denum) && num != 0) {
                return true;
            } else {
                return false;
            }
        }
        if (this.validateNumber(num) && this.validateNumber(denum) && denum != 0) {
            return true;
        } else {
            return false;
        }
    },
    setFraction: function (num = 0, denum = 1) {
        if (this.validateFraction(num, denum)) {
            this.num = parseInt(num);
            this.denum = parseInt(denum);
            return this.getFraction();
        } else {
            return NaN;
        }

    },
    getFraction: function () {
        return { num: this.num, denum: this.denum };
    },
    getFractionView: function () {
        this.reductionOfFraction();
        let result = this.getIntegerFromFraction(this.num, this.denum);
        if(result === 1){
            return 1;
        }
        if(result === 0){
            return 0;
        }
        if(result.integ > 0){
            return `${result.integ}(${result.num}/${result.denum})`;
        }
        return `${this.num} / ${this.denum}`;
    },
    getLeastCommonMultiply: function (num1, num2) {
        if (this.validateNumber(num1) && this.validateNumber(num2)) {
            let commonMult = num1 * num2;
            let limiter = num1 + num2;
            let lestComMult = 0;
            for (let i = commonMult; i >= 1; i--) {
                if (i % num1 === 0 && i % num2 === 0) {
                    lestComMult = i;
                }
            }
            return lestComMult;
        } else {
            return 0;
        }
    },
    sumFraction: function ({ num, denum }) {
        if (!this.validateFraction(num, denum)) {
            return NaN;
        }
        if (this.denum == denum) {
            this.num += num;
            return this.getFraction();
        }
        //lowest common denominator
        let lestComMult = this.getLeastCommonMultiply(this.denum, denum);
        //additional multipliers for each fraction
        let mult1 = lestComMult / this.denum;
        let mult2 = lestComMult / denum;
        //Sum
        this.num = (mult1 * this.num) + (mult2 * num);
        this.denum = lestComMult;
        return this.getFraction();
    },
    subFraction: function ({ num, denum }) {
        if (!this.validateFraction(num, denum)) {
            return NaN;
        }
        if (this.denum == denum) {
            this.num -= num;
            return this.getFraction();
        }
        //lowest common denominator
        let lestComMult = this.getLeastCommonMultiply(this.denum, denum);
        //additional multipliers for each fraction
        let mult1 = lestComMult / this.denum;
        let mult2 = lestComMult / denum;
        //Sum
        this.num = parseInt((mult1 * this.num) - (mult2 * num));
        this.denum = lestComMult;
        return this.getFraction();
    },
    multFraction: function ({ num, denum }) {
        if (!this.validateFraction(num, denum)) {
            return NaN;
        }
        this.num *= num;
        this.denum *= denum;
        return this.getFraction();
    },
    divideFraction: function ({ num, denum }) {
        if (!this.validateFraction(num, denum, true)) {
            return NaN;
        }

        this.num *= denum;
        this.denum *= num;
    },
    reductionOfFraction: function (num = 0, denum = 0) {
        for (let i = 1; i <= 10; i++) {
            
            if(this.num % i === 0 && this.denum % i === 0){
                this.num = this.num / i;
                this.denum = this.denum / i;
            }
        }
        return this.getFraction();
    },
    getIntegerFromFraction: function(num, denum){
        result = {
            integ: 0,
            num,
            denum: denum,
        };
        console.log(result);
        if(num > denum){
            result.integ = parseInt(num/denum);
            result.num = num - (denum * result.integ);
        }
        if(num === denum){
            return 1;
        }
        if(num === 0){
            return 0;
        }
        return result;
    }


}

let frac = fraction.setFraction(3, 4);
let frac2 = fraction.setFraction(4, 6);

let result = fraction.sumFraction(frac);
console.log(result);
console.log(frac2);
result = fraction.subFraction(frac2);
console.log(result);
frac = fraction.setFraction(1, 2);
frac2 = fraction.setFraction(25, 10);
//result = fraction.multFraction(frac);
console.log(result);
//console.log(fraction.reductionOfFraction());
console.log(fraction.getFractionView());


