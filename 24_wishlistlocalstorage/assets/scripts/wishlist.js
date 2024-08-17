let productCardContainer = document.querySelector(".product-list");
let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) ;



if (favoriteProducts.length > 0) {
    favoriteProducts.forEach(product => {
       

        if (!product || typeof product !== 'object' || !product.rating || !product.rating.rate) {
            console.error('Incomplete product data:', product);
            return; 
        }

        let productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="imgBackground"><img src="${product.image}" alt="${product.title}" class="product-image"></div>
            <div class="title">
                <h3 class="product-title">${product.title}</h3>
                <button class="favorite-btn">  
                    <i class="fa-solid fa-heart favIcon" name="${product.id}"></i>
                </button>
            </div>
            <p class="product-description">${product.category}</p>
            <div class="product-rating">${'⭐'.repeat(Math.round(product.rating.rate))}
                <span class="rating-count">(${product.rating.count})</span>
            </div>
            <div class="priceSection">
                <p class="product-price" style="color:red">$${product.price}</p>
                <p class="product-original-price">$${(product.price * 1.2).toFixed(2)}</p>
                <p class="product-sale-percentage">${Math.round((1 - product.price / (product.price * 1.2)) * 100)}%</p>
            </div>
            <button class="basket-btn" onclick="addToBasket(event, ${product.id})">🛒</button>
        `;
        productCardContainer.appendChild(productCard);
    });
} else {
    productCardContainer.innerHTML = '<p>No favorite products found.</p>';
}
let favorites = [];
let favItem = JSON.parse(localStorage.getItem("favorites"));

if (favItem) {
    favorites = [...favItem];
}

function initializeFavoriteButtons() {
    const favIcons = document.querySelectorAll(".favIcon");

    favIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const productId = parseInt(this.getAttribute("name"));

            favorites = favorites.filter(fav => fav.id !== productId);
      
            localStorage.setItem("favorites", JSON.stringify(favorites));

            this.closest('.product-card').remove();
        });
    });
}

initializeFavoriteButtons();

