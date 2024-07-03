document.getElementById('getStartedBtn').addEventListener('click', function() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('registrationForm').classList.remove('hidden');
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const birthDate = document.getElementById('birthDate').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://<your-backend-url>.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, birthDate, phoneNumber, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful:', data);
        alert('Registration successful!');
    })
    .catch(error => {
        console.error('Error registering:', error);
        alert('Registration failed. Please try again.');
    });
});
