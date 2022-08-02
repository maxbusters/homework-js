class Circle {
    constructor(radius = 0) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        if (this.checkRadius(radius)) {
            this.radius = radius;
            return true;
        }
        return false;
    }
    checkRadius(radius) {
        if (parseInt(radius) === NaN) {
            return false;
        } else {
            return true;
        }
    }
    getDiametr() {
        return this.radius * 2;
    }
    getLenght() {
        return (this.getDiametr() * Math.PI).toFixed(2);
    }
    getSquare() {
        return (Math.PI * (this.radius ** 2)).toFixed(2);
    }
    printCircleInfo() {
        document.writeln("<h2>Circle parameters:</h2>");
        document.writeln(`Radius: ${this.getRadius()}<br>`);
        document.writeln(`Diametr: ${this.getDiametr()}<br>`);
        document.writeln(`Lenght: ${this.getLenght()}<br>`);
        document.writeln(`Square: ${this.getSquare()}<hr>`);
    }
}

class Marker {
    constructor(color) {
        this.color = color;
        this.ink = 100;
    }

    printColoredText(text) {
        let coloredStr = this.buildText(text);
        document.write(`<p style="color: ${this.color}">${coloredStr}</p>`);
    }

    buildText(text) {
        let result = '';
        for (let symbol of text) {
            if (symbol.trim() === '') {
                console.log(symbol);
                result += symbol;
                continue;
            }
            if (this.ink > 0) {
                result += symbol;
                this.ink -= 0.5;
            }
            if (this.ink === 0) {
                return result;
            }
        }
        return result;
    }
}

class RefuelableMarker extends Marker {
    constructor(color) {
        super(color);
    }

    refuel() {
        this.ink = 100;
        document.write(`Marker <span style="color: ${this.color}">${this.color}</span> was refueled`)
        return true;
    }
}

class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

class EmployeesTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let htmlStr = "<hr><h2>Bank employees</h2>";
        htmlStr += '<table><thead><tr><th>Name</th><th>Age</th><th>Position</th></tr></thead><tbody>';
        this.employees.forEach(employee => {
            //product.amount = calcAmount(product);
            htmlStr += `<tr><td>${employee.name}</td><td>${parseInt(employee.age)}</td><td>${employee.position}</td></tr>`;
        });
        htmlStr += '</tbody></table>';
        return htmlStr;
    }

    printHtml() {
        document.write(this.getHtml());
    }
}


/**
* Завдання 1

    Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

    1)поле, що зберігає радіус кола;
    2)get-властивість, яке повертає радіус кола;
    3)set-властивість, що встановлює радіус кола;
    4)get-властивість, яке повертає діаметр кола;
    5)метод, що обчислює площу кола;
    6)метод, що обчислює довжину кола.

    Продемонструй роботу властивостей і методів.
*/
const circle1 = new Circle(20);
circle1.printCircleInfo();

/**
 * Завдання 2

    Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

    1)поле, яке зберігає колір маркера;
    2)поле, яке зберігає кількість чорнил у маркері (у відсотках);
    3)метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
    4)Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

    Продемонструй роботу написаних методів.
 */
const marker = new Marker('red');
marker.printColoredText('11234567890');
marker.printColoredText('21234567890');
marker.printColoredText('31234567890');
marker.printColoredText('41234567890');
marker.printColoredText('51234567890');
marker.printColoredText('61234567890');
marker.printColoredText('71234567890');
marker.printColoredText('81234567890');
marker.printColoredText('91234567890');
marker.printColoredText('101234567890');
marker.printColoredText('11234567890');
marker.printColoredText('21234567890');
marker.printColoredText('31234567890');
marker.printColoredText('41234567890');
marker.printColoredText('51234567890');
marker.printColoredText('61234567890');
marker.printColoredText('71234567890');
marker.printColoredText('81234567890');
marker.printColoredText('91234567890');
marker.printColoredText('101234567890');
const greenMarker = new RefuelableMarker('green');
greenMarker.printColoredText('11234567890');
greenMarker.printColoredText('21234567890');
greenMarker.printColoredText('31234567890');
greenMarker.printColoredText('41234567890');
greenMarker.printColoredText('51234567890');
greenMarker.printColoredText('61234567890');
greenMarker.printColoredText('71234567890');
greenMarker.printColoredText('81234567890');
greenMarker.printColoredText('91234567890');
greenMarker.printColoredText('101234567890');
greenMarker.printColoredText('11234567890');
greenMarker.printColoredText('21234567890');
greenMarker.printColoredText('31234567890');
greenMarker.printColoredText('41234567890');
greenMarker.printColoredText('51234567890');
greenMarker.printColoredText('61234567890');
greenMarker.printColoredText('71234567890');
greenMarker.printColoredText('81234567890');
greenMarker.printColoredText('91234567890');
greenMarker.printColoredText('101234567890');
greenMarker.refuel();
greenMarker.printColoredText('11234567890');
greenMarker.printColoredText('21234567890');
greenMarker.printColoredText('31234567890');
greenMarker.printColoredText('41234567890');
greenMarker.printColoredText('51234567890');

/**
 * Завдання 3

    1)Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

    2)Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

    3)Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
 */

let employeesArray = [
    new Employee("Vasia", 20, "manager"),
    new Employee("Petia", 22, "cashier"),
    new Employee("Olga", 25, "cashier"),
    new Employee("Mary", 25, "cashier"),
    new Employee("Boris", 30, "manager"),
    new Employee("Julia", 20, "cashier"),
    new Employee("Anastasia", 23, "customer service specialist"),
    new Employee("Oleksandr", 27, "director"),
    new Employee("Bogdan", 20, "customer service specialist"),
    new Employee("Sophia", 22, "customer service specialist"),
];

const emplTable = new EmployeesTable(employeesArray);
emplTable.printHtml();
