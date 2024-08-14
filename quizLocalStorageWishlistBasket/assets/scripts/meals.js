let productCardContainer = document.querySelector(".productList");
let searchInput = document.getElementById("searchInput");
let sortByNameBtn = document.getElementById("sortButton");

let url = "http://localhost:3000/meals";
let favorites = [];
let basket = [];
let allProducts = [];

document.addEventListener('DOMContentLoaded', () => {
  loadBasket();
  loadFavorites(); 
  updateFavoritesUI();

  axios(url).then((res) => {
    allProducts = res.data;
    renderProducts(allProducts);
    initializeFavBtns();
    initializeDetailBtns(); 
    initializeDeleteBtns();
  }).catch(error => {
    console.error("Error fetching products:", error);
  });
});

function renderProducts(products) {
  productCardContainer.innerHTML = '';
  products.forEach(product => {
    if (product) {
      productCardContainer.innerHTML += `
        <div class="card" style="width: 18rem;" id="${product.id}">
          <img class="card-img-top" src="${product.imageLink}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text"><b>Price : $${product.price}</b></p>
            <button type="button" class="btn btn-primary" onclick="addToBasket(event, ${product.id})">Add to cart</button>
            <button type="button" class="btn btn-danger deleteBtn" name="${product.id}">Delete</button>
            <button type="button" class="btn btn-primary detailBtn" name="${product.id}">Detail</button>
            <button class="favorite-btn" name="${product.id}">
              <i class="fa-regular fa-heart favIcon" name="${product.id}"></i>
            </button>
          </div>
        </div>
      `;
    }
  });

  initializeFavBtns();
  initializeDetailBtns();
  initializeDeleteBtns();
}

function initializeFavBtns() {
  const favIcons = document.querySelectorAll(".favIcon");
  favIcons.forEach(icon => {
    const productId = parseInt(icon.getAttribute("name"));
    if (favorites.some(fav => fav && fav.id === productId)) {
      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    }

    icon.addEventListener("click", function (event) {
      event.stopPropagation();
      const productId = parseInt(this.getAttribute("name"));
      const product = allProducts.find(p => p && p.id === productId);
      if (this.classList.contains("fa-solid")) {
        this.classList.add("fa-regular");
        this.classList.remove("fa-solid");
        favorites = favorites.filter(fav => fav && fav.id !== productId);
      } else {
        this.classList.add("fa-solid");
        this.classList.remove("fa-regular");
        favorites.push(product);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      updateFavoritesUI();
    });
  });
}

function updateFavoritesUI() {
  const favIcons = document.querySelectorAll(".favIcon");
  favIcons.forEach(icon => {
    const productId = parseInt(icon.getAttribute("name"));
    if (favorites.some(fav => fav && fav.id === productId)) {
      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    } else {
      icon.classList.add("fa-regular");
      icon.classList.remove("fa-solid");
    }
  });
}

function loadFavorites() {
  let favItem = JSON.parse(localStorage.getItem("favorites"));
  if (favItem) {
    favorites = favItem.filter(fav => fav !== null);
  }
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
  renderProducts(filteredProducts);
});

sortByNameBtn.addEventListener('click', () => {
  allProducts.sort((a, b) => a.name.localeCompare(b.name));
  renderProducts(allProducts);
});

function initializeDetailBtns() {
  const detailBtns = document.querySelectorAll(".detailBtn");
  detailBtns.forEach(btn => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const productId = this.getAttribute("name");
      window.location.href = `detail.html?id=${productId}`;
    });
  });
}

function initializeDeleteBtns() {
  const deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const productId = this.getAttribute("name");
      const card = document.getElementById(productId);
      card.remove();
      allProducts = allProducts.filter(product => product && product.id !== productId);
      favorites = favorites.filter(fav => fav && fav.id !== productId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });
}

function addToBasket(event, productId) {
  event.stopPropagation();
  const product = allProducts.find(p => p && p.id === productId);
  const basketItem = basket.find(item => item.id === productId);
  if (basketItem) {
      basketItem.quantity += 1;
  } else {
      basket.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('basket', JSON.stringify(basket));
  alert(`${product.name} has been added to the basket.`);
}

function loadBasket() {
  const savedBasket = localStorage.getItem('basket');
  if (savedBasket) {
      basket = JSON.parse(savedBasket).filter(item => item !== null);
  }
}

loadBasket();

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-button').addEventListener('click', () => {
      window.location.href = 'login.html';
  });

  document.getElementById('register-button').addEventListener('click', () => {
      window.location.href = 'register.html';
  });
});
