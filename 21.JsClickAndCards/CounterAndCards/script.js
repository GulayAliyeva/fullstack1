let count = 0;

function increment() {
    count++;
    updateNumberDisplay();
   
}

function decrement() {
    if (count > 0) {
        count--;
        updateNumberDisplay();
    }
    if (count === 0) {
        document.getElementById('decrementButton').style.backgroundColor = 'red';
    }
}
function reset() {
    count = 0;
    updateNumberDisplay();
  
}


function updateNumberDisplay() {
    document.getElementById('numberDisplay').innerText = count;
}

    function validateInput() {
            const textInput = document.getElementById('textInput');
            const addButton = document.getElementById('addBtn');
            const errorMessage = document.getElementById('errorMessage');

            if (textInput.value.length < 5) {
                addButton.disabled = true;
                errorMessage.style.display = 'block';
                addButton.style.backgroundColor = 'red';
            } else {
                addButton.disabled = false;
                errorMessage.style.display = 'none';
                addButton.style.backgroundColor = '';
            }
        }

        function addText() {
            const textInput = document.getElementById('textInput');
            const text = textInput.value;

            if (text.length >= 5) {
                const textList = document.getElementById('textList');
                const listItem = document.createElement('li');
                listItem.textContent = text;
                textList.appendChild(listItem);
                textInput.value = '';
                validateInput(); 
            } else {
                alert('Please enter at least 5 characters.');
            }
        }

function addCard() {
    const fullName = document.getElementById('fullName').value;
    const imageUrl = document.getElementById('image').value;
    
    const age = document.getElementById('age').value;

    if (!fullName || !imageUrl ||  !age) {
        alert('Please fill in all fields.');
        return;
    }

    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${imageUrl}" alt="${fullName}">
        <h3>${fullName}</h3>
        <p>Age: ${age}</p>
       
        <button class="delete-btn" onclick="confirmDelete(this)">Delete</button>
    `;

    cardContainer.appendChild(card);

    document.getElementById('fullName').value = '';
    document.getElementById('image').value = '';
 
    document.getElementById('age').value = '';
}

function confirmDelete(button) {
    const card = button.parentElement;
    
    if (confirm(`Are you sure you want to delete the card?`)) {
        card.remove();
    }
}
