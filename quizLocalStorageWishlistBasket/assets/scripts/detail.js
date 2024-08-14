
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');


const detailContainer = document.getElementById('productDetail');
const apiUrl = `http://localhost:3000/singers/${productId}`;

axios(apiUrl).then((res) => {
  const product = res.data;
  detailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${product.image}" alt="Card image cap">
      <div class="card-body" >
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.name} is ${product.nationality}</p>
        <p class="card-text">AGE:${product.age}</p>
     <p class="card-text">GENRE:${product.genre}</p>
     <a href="./index.html">
        <button type="button" class="btn btn-primary homeBtn" name="${product.id}">Home</button></a>
      </div>
    </div>
  `;
}).catch(err => {
  console.error('Error fetching product details:', err);
  detailContainer.innerHTML = '<p>Error loading product details.</p>';
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-button').addEventListener('click', () => {
      window.location.href = 'login.html';
  });

  document.getElementById('register-button').addEventListener('click', () => {
      window.location.href = 'register.html';
  });
});
