
 


let url="http://localhost:3000/products";


fetch(url)

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
    updateFavoritesUI()
});

function loadProducts() {
    fetch(url)
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
             <button class="favorite-btn" data-id="${product.id}" >  
             <i class="fa-regular fa-heart favIcon" name="${product.id}"></i>
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
    initializeFavoriteButtons();
}
let favorites =[];

function initializeFavoriteButtons() {
    const favIcons = document.querySelectorAll(".favIcon");
    favIcons.forEach(icon => {
        const productId = parseInt(icon.getAttribute("name"));
        if (favorites.some(fav => fav.id === productId)) {
            icon.classList.add("fa-solid");
            icon.classList.remove("fa-regular");
        }

        icon.addEventListener("click", function (event) {
            event.stopPropagation();
            const productId = parseInt(this.getAttribute("name"));
            const product = products.find(p => p.id === productId);

            if (this.classList.contains("fa-solid")) {
                this.classList.add("fa-regular");
                this.classList.remove("fa-solid");
                favorites = favorites.filter(fav => fav.id !== productId);
            } else {
                this.classList.add("fa-solid");
                this.classList.remove("fa-regular");
                favorites.push(product);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            window.location.href = 'wishlist.html';

        });
    });
}


let favItem=JSON.parse(localStorage.getItem("favorites"));
if(favItem){
    favorites=[...favItem];
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
    localStorage.setItem('basket', JSON.stringify(basket));
    window.location.href='basket.html';
    updateBasketUI();
}



function loadBasket() {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
        basket = JSON.parse(savedBasket);
    }
}
function updateFavoritesUI() {
    const favIcons = document.querySelectorAll(".favIcon");
    favIcons.forEach(icon => {
        const productId = parseInt(icon.getAttribute("name"));
        if (favorites.includes(productId)) {
            icon.classList.add("fa-solid");
            icon.classList.remove("fa-regular");
        }
    });
}

loadBasket();
