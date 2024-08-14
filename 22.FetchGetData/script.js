const url = 'https://jsonplaceholder.typicode.com/users';
const tbody = document.querySelector("tbody");

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
    console.log(data); 

    data.forEach((element) => {
      const imgSrc = `https://randomuser.me/api/portraits/men/${element.id}.jpg`;
      tbody.innerHTML += `
        <tr class="table-active">
          <td><img src="${imgSrc}" alt="User Image" class="img"></td>
          <td>
            <div class="api-details">
              <span>${element.name}</span>
              <em>${element.address?.city}, ${element.address?.street}</em>
            </div>
          </td>
          <td><button name="${element.id}" class="deleteBtn">Del</button></td>
        </tr>
      `;
    });

    document.querySelectorAll(".deleteBtn").forEach(btn => {
      btn.addEventListener("click", function () {
        const row = this.parentElement.parentElement;
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            row.remove();
            Swal.fire(
              'Deleted!',
              'Your entry has been deleted.',
              'success'
            );
          }
        });
      });
    });

    document.getElementById('search').addEventListener('input', function() {
      const searchText = this.value.trim().toLowerCase();
      const rows = tbody.getElementsByTagName('tr');

      Array.from(rows).forEach(row => {
        const detailsText = row.querySelector('.api-details').textContent.toLowerCase();

        if (detailsText.includes(searchText)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
 

