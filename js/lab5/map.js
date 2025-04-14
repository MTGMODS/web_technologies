// const catalog = new Map();
// const orders = new Set();
// const productHistory = new WeakMap();
// const userSessions = new WeakSet();
//
// function addProduct(id, name, price, quantity) {
//     catalog.set(id, { name, price, quantity });
// }
//
// function removeProduct(id) {
//     catalog.delete(id);
// }
//
// function updateProduct(id, data) {
//     if (catalog.has(id)) {
//         const product = catalog.get(id);
//         Object.assign(product, data);
//         productHistory.set(product, new Date()); // історія змін
//     }
// }
//
// function findProductByName(name) {
//     for (let [id, product] of catalog) {
//         if (product.name.toLowerCase().includes(name.toLowerCase())) {
//             console.log(`ID: ${id}`, product);
//         }
//     }
// }
//
// function makeOrder(id, user = {}) {
//     if (catalog.has(id)) {
//         const product = catalog.get(id);
//         if (product.quantity > 0) {
//             product.quantity--;
//             orders.add({ user, productId: id, time: new Date() });
//             userSessions.add(user);
//         } else {
//             console.log("Немає в наявності");
//         }
//     }
// }
//
//
// addProduct(1, 'Хліб', 20, 5);
// addProduct(2, 'Молоко', 30, 10);
// makeOrder(1, { name: 'Іван' });
// updateProduct(2, { price: 35 });
// findProductByName('хліб');

'use strict';

// === Основні структури ===

// Map: зберігає продукти { id => { name, price, quantity } }
const productCatalog = new Map();

// Set: зберігає ID продуктів, які мають замовлення
const orderedProducts = new Set();

// WeakMap: зберігає історію змін продуктів { productObj => [історія змін] }
const productHistory = new WeakMap();

// WeakSet: зберігає активних користувачів (імітація)
const activeUsers = new WeakSet();

let productIdCounter = 1;

// ============================
// УТИЛІТИ

const generateProductId = () => productIdCounter++;

// ============================
// 1. ДОДАВАННЯ ПРОДУКТУ

function addProduct(name, price, quantity) {
    const id = generateProductId();
    const product = { name, price, quantity };

    productCatalog.set(id, product);
    productHistory.set(product, [`Продукт створено (${new Date().toLocaleString()})`]);

    renderCatalog();
    return id;
}

document.getElementById('add-product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const quantityInput = document.getElementById('product-quantity');

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);

    if (!name || isNaN(price) || isNaN(quantity)) {
        alert('Заповніть усі поля правильно');
        return;
    }

    addProduct(name, price, quantity);

    // Очистити поля
    nameInput.value = '';
    priceInput.value = '';
    quantityInput.value = '';
});



// ============================
// 2. ВИДАЛЕННЯ ПРОДУКТУ

function deleteProduct(id) {
    const product = productCatalog.get(id);
    if (!product) return;

    productHistory.delete(product); // видаляємо з WeakMap
    productCatalog.delete(id);
    orderedProducts.delete(id);

    renderCatalog();
}

// ============================
// 3. ОНОВЛЕННЯ ПРОДУКТУ

function updateProduct(id, newPrice, newQuantity) {
    const product = productCatalog.get(id);
    if (!product) return;

    product.price = newPrice;
    product.quantity = newQuantity;

    const history = productHistory.get(product);
    if (history) {
        history.push(`Оновлено (${new Date().toLocaleString()}): ціна = ${newPrice}, кількість = ${newQuantity}`);
    }

    renderCatalog();
}

// ============================
// 4. ПОШУК ЗА НАЗВОЮ

function findProductByName(name) {
    for (let [id, product] of productCatalog.entries()) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            return { id, ...product };
        }
    }
    return null;
}

// ============================
// 5. ВІДСТЕЖЕННЯ ЗАМОВЛЕНЬ

function makeOrder(id, quantity) {
    const product = productCatalog.get(id);
    if (!product) {
        alert('Продукт не знайдено');
        return;
    }

    if (product.quantity < quantity) {
        alert('Недостатньо товару на складі');
        return;
    }

    product.quantity -= quantity;
    orderedProducts.add(id);

    const history = productHistory.get(product);
    if (history) {
        history.push(`Замовлення (${new Date().toLocaleString()}): -${quantity} од.`);
    }

    renderCatalog();
}

// ============================
// ДЕМОНСТРАЦІЯ ВІДОБРАЖЕННЯ

function renderCatalog() {
    const container = document.getElementById('map-output');
    container.innerHTML = '';

    if (productCatalog.size === 0) {
        container.innerText = 'Каталог порожній.';
        return;
    }

    for (let [id, product] of productCatalog.entries()) {
        const div = document.createElement('div');
        div.className = 'product-card';

        const history = productHistory.get(product) || [];

        div.innerHTML = `
      <h3>${product.name} (ID: ${id})</h3>
      <p>Ціна: ${product.price} грн</p>
      <p>Кількість на складі: ${product.quantity}</p>
      <p>Історія: ${history.map(e => `<br>• ${e}`).join('')}</p>
      <button onclick="makeOrder(${id}, 1)">Замовити 1 шт</button>
      <button onclick="deleteProduct(${id})">Видалити</button>
      <hr>
    `;

        container.appendChild(div);
    }
}

// ============================
// Тестові додавання + демонстрація

// Додаємо кількох активних користувачів (імітація)
const user1 = { name: 'Іван' };
const user2 = { name: 'Марія' };
activeUsers.add(user1);
activeUsers.add(user2);

// Додаємо продукти
const milkId = addProduct('Молоко', 30, 50);
const breadId = addProduct('Хліб', 20, 100);
const cheeseId = addProduct('Сир', 100, 20);

// Оновлюємо один продукт
updateProduct(milkId, 32, 45);

// Робимо замовлення
makeOrder(breadId, 5);
