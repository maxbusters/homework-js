/* Мінімум

Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить
назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
    1)Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    2)Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний. 
*/

let productList = [
    {
        name: "Apple",
        count: 2,
        isBuy: true,
        price: 3,
        amount: 6
    },
    {
        name: "Pineapple",
        count: 5,
        isBuy: false,
        price: 3,
        amount: 15
    },
    {
        name: "Banana",
        count: 7,
        isBuy: true,
        price: 7,
        amount: 49
    },
    {
        name: "Peach",
        count: 2,
        isBuy: true,
        price: 5.50,
        amount: 11
    },
    {
        name: "Milk",
        count: 7,
        isBuy: false,
        price: 9.69,
        amount: 67.83
    },
    {
        name: "Bread",
        count: 10,
        isBuy: false,
        price: 6.99,
        amount: 69.90
    },
    {
        name: "Juice",
        count: 6,
        isBuy: false,
        price: 6.39,
        amount: 38.34
    },
    {
        name: "Beef",
        count: 10,
        isBuy: true,
        price: 15.99,
        amount: 159.90
    },
    {
        name: "Potato",
        count: 20,
        isBuy: false,
        price: 3.99,
        amount: 79.80
    },
    {
        name: "Water",
        count: 20,
        isBuy: true,
        price: 5.45,
        amount: 109.00
    },
]


function calcAmount(product) {
    return parseFloat(parseInt(product.count) * parseFloat(product.price)).toFixed(2);
}




function sortProductByIsBuy(products) {
    products.sort((a, b) => a.isBuy > b.isBuy ? 1 : -1);
}

function displayProductList(products) {
    document.write('<table><thead><tr><th>Name</th><th>Count</th><th>Is Buy</th><th>Price</th><th>Amount price</th></tr></thead>');
    document.write('<tbody>');
    products.forEach(product => {
        //product.amount = calcAmount(product);
        document.write(`
         <tr>
            <td>${product.name}</td>
            <td>${parseInt(product.count)}</td>
            <td>${product.isBuy ? 'yes' : 'no'}</td>
            <td>${parseFloat(product.price).toFixed(2)}</td>
            <td>${parseFloat(product.amount).toFixed(2)}</td>
         </tr>`)
    });
    document.write('</tbody></table>');
}

function buyProduct(productName) {
    for(product of productList){
        if(product.name == productName){
            product.isBuy = true;
            document.write(`\n-----------------Buy '${productName}'------------------\n`);
            displayProductList(productList);
            return;
        } 
    }
    document.writeln(`\n---------------Product '${productName}' not found------------------\n`);
}

sortProductByIsBuy(productList);
displayProductList(productList);
buyProduct("Bread");
buyProduct("Potatoe");
deleteProduct("Potato", productList);

/* Норма

1)Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
2)Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
 необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
 При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24. */

function deleteProduct(productName, products) {
    let result = products.reduce((acc,value) => {
        if(value.name != productName){
            acc.push(value);
        }
        return acc
    },[])
    
    displayProductList(result);
    document.writeln(`\n---------------Product '${productName}' was deleted------------------`);
}

function addProduct(products, name = "Product", count = 1, price = 0) {
    let index = hasProduct(name, products);
    if(index !== false){
        products[index].count += count;
        products[index].amount = products[index].price * products[index].count;
        displayProductList(products);
        return;
    } else {
        products.push(
            {
                name: name,
                count: count,
                isBuy: false,
                price: price,
                amount: count * price
            }
        );
        displayProductList(products);
        return;
    }
}

function hasProduct(productName, products) {
    for(let index in products){
        if(products[index].name === productName){
            return parseInt(index);
        } 
    }
    return false;
}

addProduct(productList, "Apple", 2, 10);
addProduct(productList, "Apple", 2, 10);
addProduct(productList, "Pork", 2, 10);
addProduct(productList, "Apple", 2, 10);

/**
 * Максимум

1)Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
2)Підрахунок суми всіх (не) придбаних продуктів.
3)Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
 */


function getTotal(products) {
    let result = products.reduce((acc, value) => {
        acc += value.amount;
        return acc;
    }, 0);
    document.writeln(`Total price: '${result}'`);
}

getTotal(productList);


function getTotalOfNotSold(products) {
    let result = products.reduce((acc, value) => {
        if(value.isBuy === false){
            acc += value.amount;
        }
        return acc;
    }, 0);
    document.writeln(`<br>Total price of not sold products: '${result}'`);
}

getTotalOfNotSold(productList);

function showProductsByAmount(products, fromBiggest = true) {
    if(fromBiggest) {
        products.sort((a, b) => {
            return a.amount - b.amount;
        });
    } else {
        products.sort((a, b) => {
            return b.amount - a.amount;
        });
    }

    displayProductList(products);
}

showProductsByAmount(productList, true);
showProductsByAmount(productList, false);