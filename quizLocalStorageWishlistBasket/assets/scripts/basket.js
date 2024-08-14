document.addEventListener('DOMContentLoaded', () => {
    loadBasket(); 
    updateBasketUI(); 
});

let basket = [];

function loadBasket() {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
        basket = JSON.parse(savedBasket);
    }
}

function updateBasketUI() {
    const basketList = document.getElementById('basket-list');
    if (!basketList) {
        console.error('Element with id "basket-list" not found.');
        return;
    }

    basketList.innerHTML = ''; 
    basket.forEach(item => {
        console.log('Adding item to basket UI:', item); 
        basketList.innerHTML += `
            <div class="basket-item-info">
                <h3 class="basket-item-category">${item.name}</h3>
                <div class="toggleBtn">
                    <img class="product-image" src="${item.imageLink}" alt="${item.name}">
                    <div class="quantityBtns">
                        <button class="quantity-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
                        <span class="basket-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
                    </div>
                    <div class="totalPriceforEachProduct">
                        <b><span class="basket-item-price">$${(item.price * item.quantity).toFixed(2)}</span></b>
                        <a href="#" class="remove-item" onclick="removeFromBasket('${item.id}')">Remove</a>
                    </div>
                </div>
            </div>
        `;
    });

    updateBasketSummary();
}

function updateBasketSummary() {
    const subtotalElement = document.getElementById('basket-subtotal');
    const count = document.getElementById('count');
    if (!subtotalElement || !count) return;

    const totalPrice = basket.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemCount = basket.reduce((count, item) => count + item.quantity, 0);

    subtotalElement.innerHTML = `$${totalPrice.toFixed(2)}`;
    count.innerHTML = `${itemCount} items`;
}

function changeQuantity(productId, change) {
    console.log('Changing quantity for product ID:', productId, 'Change:', change); 
    const basketItem = basket.find(item => item.id === productId);
    if (basketItem) {
        basketItem.quantity += change;
        if (basketItem.quantity <= 0) {
            basket = basket.filter(item => item.id !== productId);
        }
        saveBasket();
        updateBasketUI();
    }
}

function removeFromBasket(productId) {
    console.log('Removing product ID:', productId); 
    const product = basket.find(item => item.id === productId);
    if (product) {
        alert(`Removing ${product.name} from the basket.`);
        basket = basket.filter(item => item.id !== productId);
        saveBasket();
        updateBasketUI();
    }
}

function removeAllFromBasket() {
    console.log('Removing all items from basket'); 
    basket = [];
    saveBasket();
    updateBasketUI();
}

function saveBasket() {
    console.log('Saving basket:', basket); 
    localStorage.setItem('basket', JSON.stringify(basket));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-button').addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    document.getElementById('register-button').addEventListener('click', () => {
        window.location.href = 'register.html';
    });
});
