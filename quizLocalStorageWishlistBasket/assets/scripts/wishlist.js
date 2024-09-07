let productCardContainer = document.querySelector(".productList");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


function renderFavorites() {
    productCardContainer.innerHTML = '';
    favorites.forEach(product => {
        productCardContainer.innerHTML += `
            <div class="card product-card" style="width: 18rem;" id="${product.id}">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.name} is ${product.nationality}</p>
                    <button type="button" class="btn btn-primary detailBtn" name="${product.id}">Detail</button>
                    <button type="button" class="btn btn-danger deleteBtn" name="${product.id}">Delete</button>
                    <button class="favorite-btn" name="${product.id}">
                        <i class="fa-solid fa-heart favIcon" name="${product.id}"></i>
                    </button>
                </div>
            </div>
        `;
    });
    initializeFavoriteButtons();
    initializeDetailButtons();
    initializeDeleteButtons();
}


function initializeFavoriteButtons() {
    const favIcons = document.querySelectorAll(".favIcon");
    favIcons.forEach(icon => {
        const productId = parseInt(icon.getAttribute("name"));
        if (favorites.some(fav => fav.id === productId)) {
            icon.classList.add("fa-solid");
            icon.classList.remove("fa-regular");
        }

        icon.addEventListener("click", function () {
            const productId = parseInt(this.getAttribute("name"));
            const product = favorites.find(fav => fav.id === productId);
            if (this.classList.contains("fa-solid")) {
                this.classList.add("fa-regular");
                this.classList.remove("fa-solid");
                favorites = favorites.filter(fav => fav.id !== productId);
            } else {
                this.classList.add("fa-solid");
                this.classList.remove("fa-regular");
                if (product) {
                    favorites.push(product);
                }
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites(); 
        });
    });
}

function initializeDetailButtons() {
    const detailBtns = document.querySelectorAll(".detailBtn");
    detailBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("name");
            window.location.href = `detail.html?id=${productId}`;
        });
    });
}


function initializeDeleteButtons() {
    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("name");
            favorites = favorites.filter(fav => fav.id !== productId);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites(); 
        });
    });
}


renderFavorites();
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-button').addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    document.getElementById('register-button').addEventListener('click', () => {
        window.location.href = 'register.html';
    });
});
