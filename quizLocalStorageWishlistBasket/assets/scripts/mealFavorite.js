let productCardContainer = document.querySelector(".productList");
let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) ;




    favoriteProducts.forEach(product => {
       

 
        productCardContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${product.imageLink}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price is ${product.price}</p>
            <button type="button" class="btn btn-primary">Detail</button>
            <button type="button" class="btn btn-danger">Delete</button>
            <button class="favorite-btn" name="${product.id}">
              <i class="fa-regular fa-heart favIcon" name="${product.id}"></i>
            </button>
          </div>
        </div>
      `;
    });


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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-button').addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    document.getElementById('register-button').addEventListener('click', () => {
        window.location.href = 'register.html';
    });
});
