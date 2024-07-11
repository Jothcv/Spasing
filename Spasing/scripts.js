document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const welcomeScreen = document.querySelector('.welcome-screen');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    loginBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    registerBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logeado exitosamente');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('newPassword').value;
        const repeatPassword = document.getElementById('repeatPassword').value;

        if (password === repeatPassword) {
            alert('Registrado exitosamente');
        } else {
            alert('Las contraseñas no coinciden');
        }
    });
});
