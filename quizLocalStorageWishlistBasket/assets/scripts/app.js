let productCardContainer = document.querySelector(".productList");
let url = "http://localhost:3000/singers";
let singers = [];
let favorites = [];

document.addEventListener('DOMContentLoaded', () => {
  axios(url).then((res) => {
    singers = res.data;
    renderSingers(singers);

    let favItem = JSON.parse(localStorage.getItem("favorites"));
    if (favItem) {
      favorites = [...favItem];
    }
    updateFavoritesUI();
    initializeSearchAndSort();
  });

  document.getElementById('login-button').addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  document.getElementById('register-button').addEventListener('click', () => {
    window.location.href = 'register.html';
  });
});

function renderSingers(singersList) {
  productCardContainer.innerHTML = '';
  singersList.forEach(product => {
    productCardContainer.innerHTML += `
      <div class="card" style="width: 18rem;" id="${product.id}">
        <img class="card-img-top" src="${product.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.name} is ${product.nationality}</p>
          <button type="button" class="btn btn-primary detailBtn" name="${product.id}">Detail</button>
          <button type="button" class="btn btn-danger deleteBtn" name="${product.id}">Delete</button>
          <button class="favorite-btn" name="${product.id}">
            <i class="fa-regular fa-heart favIcon" name="${product.id}"></i>
          </button>
        </div>
      </div>
    `;
  });

  initializeFavBtns();
  initializeDeleteBtns();
  initializeDetailBtns();
}

function initializeFavBtns() {
  const favIcons = document.querySelectorAll(".favIcon");
  favIcons.forEach(icon => {
    const productId = icon.getAttribute("name");
    if (favorites.some(fav => fav.id == productId)) {
      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    }

    icon.addEventListener("click", function (event) {
      event.stopPropagation();
      const productId = this.getAttribute("name");
      const product = singers.find(p => p.id == productId);

      if (this.classList.contains("fa-solid")) {
        this.classList.add("fa-regular");
        this.classList.remove("fa-solid");
        favorites = favorites.filter(fav => fav.id != productId);
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
    const productId = icon.getAttribute("name");
    if (favorites.some(fav => fav.id == productId)) {
      icon.classList.add("fa-solid");
      icon.classList.remove("fa-regular");
    } else {
      icon.classList.add("fa-regular");
      icon.classList.remove("fa-solid");
    }
  });
}

function initializeDeleteBtns() {
  const deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const productId = this.getAttribute("name");
      const card = document.getElementById(productId);
      card.remove();
      singers = singers.filter(singer => singer.id != productId);
      favorites = favorites.filter(fav => fav.id != productId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });
}

function initializeDetailBtns() {
  const detailBtns = document.querySelectorAll(".detailBtn");
  detailBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const productId = this.getAttribute("name");
      window.location.href = `detail.html?id=${productId}`;
    });
  });
}

function initializeSearchAndSort() {
  const searchInput = document.querySelector('.form-control');
  const sortButton = document.querySelector('.sortBtn');

  searchInput.addEventListener('input', filterSingers);
  sortButton.addEventListener('click', sortSingersByName);
}

function filterSingers() {
  const searchValue = document.querySelector('input[type="search"]').value.toLowerCase();
  const filteredSingers = singers.filter(singer => singer.name.toLowerCase().includes(searchValue));
  renderSingers(filteredSingers);
}

function sortSingersByName() {
  const sortedSingers = [...singers].sort((a, b) => a.name.localeCompare(b.name));
  renderSingers(sortedSingers);
}
