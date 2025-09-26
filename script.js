// Cambio de tema
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? '☀ Tema Claro' : '🌙 Tema Oscuro';
});

// Validación del formulario
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    let valid = true;

    // Validación del nombre
    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Por favor, ingresa tu nombre.';
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validación del mensaje
    if (messageInput.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Por favor, ingresa tu mensaje.';
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});