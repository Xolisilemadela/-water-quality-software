document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});
