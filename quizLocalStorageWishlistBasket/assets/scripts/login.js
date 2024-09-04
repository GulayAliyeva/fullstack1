document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', loginUser);
});

function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    axios.get(`http://localhost:3000/users?username=${username}&password=${password}`)
        .then(response => {
            if (response.data.length > 0) {
                alert('Login successful!');
                window.location.href = 'meals.html'; 
            } else {
                alert('Invalid username or password.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
}
