let allowedClicks = 0;
let clicksRemaining = 0;
let isLarge = true;
function initialize() {
    allowedClicks = parseInt(prompt('Enter button-click limit!'));
    if (isNaN(allowedClicks) || allowedClicks <= 0) {
        alert('Please refresh the page and enter a valid number greater than 0');
        document.getElementById('clickButton').disabled = true;
        document.getElementById('message').innerText = 'Invalid input. Please refresh the page.';
    } else {
        clicksRemaining = allowedClicks;
        document.getElementById('box').style.display = 'flex';
        document.getElementById('textInput').style.display = 'flex';
        document.getElementById('colorPicker').style.display = 'flex';
        updateMessage();
    }
}
function handleClick() {

   let userInput = document.getElementById('textInput').value;
   let chosenColor = document.getElementById('colorPicker').value;
    document.getElementById('message').innerText = userInput;
    document.getElementById('box').style.backgroundColor = chosenColor;

    if (clicksRemaining > 0) {
        clicksRemaining--;
        updateMessage();
   

        if (isLarge) {
            document.getElementById('box').style.width = '300px';
            document.getElementById('box').style.height = '300px';
        } else {
            document.getElementById('box').style.width = '200px';
            document.getElementById('box').style.height = '200px';
        }
        isLarge = !isLarge;
        if (clicksRemaining === 0) {
            document.getElementById('clickButton').disabled = true;
            alert('limit exceeded!');
            document.getElementById('clickButton').style.backgroundColor="red";
        }
    }
}

function updateMessage() {
    document.getElementById('clickButton').innerText = `You can click ${clicksRemaining} times`;
        
}
window.onload = initialize;