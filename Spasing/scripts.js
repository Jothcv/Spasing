document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const welcomeScreen = document.querySelector('.welcome-screen');
    const registerForm = document.querySelector('.register-form');
    const afterRegister = document.querySelector('.after-register');
    const usernameDisplay = document.getElementById('usernameDisplay');

    registerBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const repeatPassword = document.getElementById('repeatPassword').value;

        if (newPassword === repeatPassword) {
            registerForm.classList.add('hidden');
            afterRegister.classList.remove('hidden');
            usernameDisplay.textContent = newUsername;
        } else {
            alert('Las contraseñas no coinciden');
        }
    });
});
