let tbody = document.querySelector("tbody");
let url = "https://northwind.vercel.app/api/suppliers/";

let postForms = document.querySelector(".postForms");
let putPatchForms = document.querySelector(".putPatchForms");
let contactName = document.querySelector("#contactName");
let city = document.querySelector("#city");
let country = document.querySelector("#country");
let supplierId = document.querySelector("#supplierId");
let newContactName = document.querySelector("#newContactName");
let newCity = document.querySelector("#newCity");
let newCountry = document.querySelector("#newCountry");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((element, i) => {
      // Create elements
      tbody.innerHTML += `
       <tr class="table-active" data-id="${element.id}">
          <td>${element.contactName}</td>
          <td>${element.address?.city}</td>
          <td>${element.address?.country}</td>
     
          <td><button name="${element.id}" class="btn btn-danger deleteBtn">Delete</button></td>
       </tr>
      `;

      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
         
          console.log(this.parentElement.parentElement.remove());
         
          fetch(url + this.name, {
            method: "DELETE",
          });
        });
      }

    });
  })
  .catch((err) => console.log(err));


postForms.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    contactName: contactName.value,
    address: {
      city: city.value,
      country: country.value
    }
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);

      tbody.innerHTML += `
      <tr class="table-active" data-id="${data.id}">
          <td>${contactName.value}</td>
          <td>${city.value}</td>
          <td>${country.value}</td>
         
          <td><button name="${data.id}" class="btn btn-danger deleteBtn">Delete</button></td>
      </tr>
      `;


      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());
          fetch(url + this.name, {
            method: "DELETE",
          });
        });
      }

    });
});


document.getElementById('putBtn').addEventListener('click', function () {
  let id = supplierId.value;
  let obj = {
    contactName: newContactName.value,
    address: {
      city: newCity.value,
      country: newCountry.value
    }
  };

  fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("PUT request response:", data);
  
      updateTableRow(data);
    });
});


document.getElementById('patchBtn').addEventListener('click', function () {
  let id = supplierId.value;
  let obj = {};
  if (newContactName.value) obj.contactName = newContactName.value;
  if (newCity.value) obj.address = { ...obj.address, city: newCity.value };
  if (newCountry.value) obj.address = { ...obj.address, country: newCountry.value };

  fetch(url + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("PATCH request response:", data);

      updateTableRow(data);
    });
});

function updateTableRow(data) {
  let rows = document.querySelectorAll("tbody tr");
  rows.forEach(row => {
    if (row.getAttribute('data-id') == data.id) {
      row.children[0].textContent = data.contactName;
      row.children[1].textContent = data.address.city;
      row.children[2].textContent = data.address.country;
    }
  });
}
