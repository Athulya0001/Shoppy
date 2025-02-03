    const loginForm = document.getElementById('loginForm');

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      
        alert('Login successful! Redirecting to home page...');
        window.location.href = 'index.html';
         // Replace with your home page
        const account = document.getElementById('account');
      account.innerText = "Account";
    } else {
        alert('Invalid username or password.');
    }
});