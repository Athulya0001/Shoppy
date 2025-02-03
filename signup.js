const signupForm = document.getElementById('signupForm');

// Handle signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
});