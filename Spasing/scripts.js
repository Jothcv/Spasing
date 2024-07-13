document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const welcomeScreen = document.querySelector('.welcome-screen');
    const registerForm = document.querySelector('.register-form');
    const afterRegister = document.querySelector('.after-register');
    const gatoMaloBtn = document.getElementById('gatoMaloBtn');
    const gatoMaloLevels = document.querySelector('.gato-malo-levels');
    const startAbcBtn = document.getElementById('startAbcBtn');
    const abcLevel = document.querySelector('.abc-level');
    const nextLetterBtn = document.getElementById('nextLetterBtn');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const letterElement = document.querySelector('.letter');
    const signImage = document.querySelector('.sign-image');
    const letters = "ABCD";
    const images = {
        "A": "https://via.placeholder.com/200?text=A",
        "B": "https://via.placeholder.com/200?text=B",
        "C": "https://via.placeholder.com/200?text=C",
        "D": "https://via.placeholder.com/200?text=D"
    };
    let currentLetterIndex = 0;

    registerBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        document.getElementById('newUsername').value = '';
        document.getElementById('email').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('repeatPassword').value = '';
        registerForm.classList.add('hidden');
        afterRegister.classList.remove('hidden');
        usernameDisplay.textContent = newUsername;
    });

    gatoMaloBtn.addEventListener('click', () => {
        afterRegister.classList.add('hidden');
        gatoMaloLevels.classList.remove('hidden');
    });

    startAbcBtn.addEventListener('click', () => {
        gatoMaloLevels.classList.add('hidden');
        abcLevel.classList.remove('hidden');
        displayCurrentLetter();
    });

    nextLetterBtn.addEventListener('click', () => {
        currentLetterIndex++;
        if (currentLetterIndex >= letters.length) {
            currentLetterIndex = 0;
        }
        displayCurrentLetter();
    });

    function displayCurrentLetter() {
        const currentLetter = letters[currentLetterIndex];
        letterElement.textContent = currentLetter;
        signImage.src = images[currentLetter];
        signImage.alt = `Letra ${currentLetter} en lenguaje de señas`;
    }
});
