document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register-form').addEventListener('submit', registerUser);
});

function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    axios.get(`http://localhost:3000/users?username=${username}`)
        .then(response => {
            if (response.data.length > 0) {
                alert('Username already taken.');
            } else {
                axios.post('http://localhost:3000/users', {
                    username: username,
                    password: password
                }).then(() => {
                    alert('Registration successful!');
                    window.location.href = 'singers.html';
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
}
