
fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        products = data;
        renderProducts(); 
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });


let products = [];
let basket = [];

document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); 
    loadBasket(); 
});

function loadProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            renderProducts(); 
        })
        .catch(error => console.error('Fetch error:', error));
}

function renderProducts(filter = 'all') {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Element with id "product-list" not found.');
        return;
    }

 
    let filteredProducts = [...products];
    switch (filter) {
        case 'high-price':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'low-price':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'high-rating':
            filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
            break;
        case 'low-rating':
            filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate);
            break;
        default:
          
            break;
    }

    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <div class="imgBackground"    >  <img src="${product.image}" alt="${product.title}" class="product-image"></div>
            <div class="title">
            <h3 class="product-title">${product.title}</h3>
                <button class="favorite-btn " onclick="toggleFavorite(${product.id})">
             <i class="fa-regular fa-heart"></i>
            </button></div>
            <p class="product-description">${product.category}</p>
            
            <div class="product-rating">${'⭐'.repeat(Math.round(product.rating.rate))}
             <span class="rating-count">(${product.rating.count})</span></div>
          
            <div class="priceSection">
            <p class="product-price"  style="color:red">$${product.price}</p>
            <p class="product-original-price" >$${(product.price * 1.2).toFixed(2)}</p>
            <p class="product-sale-percentage">${Math.round((1 - product.price / (product.price * 1.2)) * 100)}%</p></div>
         
            <button class="basket-btn" onclick="addToBasket(event, ${product.id})">🛒</button>
        `;
        productCard.addEventListener('click', () => {
            alert(`Product details:\n\nTitle: ${product.title}\nPrice: $${product.price}\nCategory: ${product.category}\nRating: ${product.rating.rate}`);
        });
        productList.appendChild(productCard);
    });
}
function filterProducts() {
    const filterValue = document.getElementById('category-filter').value;
    renderProducts(filterValue);
}


function addToBasket(event, productId) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    const basketItem = basket.find(item => item.id === productId);
    if (basketItem) {
        basketItem.quantity += 1;
    } else {
        basket.push({ ...product, quantity: 1 });
    }
    saveBasket();
    updateBasketUI();
}
function saveBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
}

function loadBasket() {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
        basket = JSON.parse(savedBasket);
    }
}


loadBasket();
