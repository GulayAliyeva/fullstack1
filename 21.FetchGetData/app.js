document.getElementById('getDataButton').addEventListener('click', fetchData);

function fetchData() {
    console.log('Fetch data initiated');
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received', data);
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            Swal.fire('Error fetching data:', error.message, 'error');
        });
}


function displayData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(item => {

           
        

            const card = document.createElement('div');
            card.className = 'card mb-3';
            if (item.category === "men's clothing") {
                card.classList.add('men-clothing-card'); 
            }
            if (item.category === "women's clothing") {
                card.classList.add('women-clothing-card'); 
            }
            const image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = item.image;
            image.alt = 'Card image cap';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.title;

            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = item.description;

            const price = document.createElement('p');
            price.className = 'card-text';
            price.textContent = `Price: $${item.price}`;

            const category = document.createElement('p');
            category.className = 'card-text';
            category.textContent = `Category: ${item.category}`;

            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(price);
            cardBody.appendChild(category);
            card.appendChild(image);
            card.appendChild(cardBody);
            dataDisplay.appendChild(card);
        });
    } else {
        console.log('No data found');
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = 'No data found';
        dataDisplay.appendChild(noDataMessage);
    }
}

