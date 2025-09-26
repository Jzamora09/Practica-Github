// Mensaje de bienvenida al cargar la página (Integrante 1)
window.addEventListener('load', () => {
    alert('¡Bienvenido a nuestra página mejorada!');

    // Cambiar color del mensaje de error del email (Integrante 2)
    document.getElementById('email-error').style.color = '#FF4500';
});

// Cambio de tema + cambio de color del footer (Integrante 3)
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    // Alterna tema oscuro
    document.body.classList.toggle('dark-mode');

    // Cambia el texto del botón
    toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? '☀ Tema Claro' : '🌙 Tema Oscuro';

    // Cambia el color del footer según el tema
    document.querySelector('footer').style.backgroundColor = document.body.classList.contains('dark-mode') ? '#222' : '#4CAF50';
});

// Validación del formulario
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    let valid = true;

    // Validación del nombre (Integrante 1)
    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Por favor, ingresa tu nombre.';
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validación del correo electrónico (Integrante 2)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validación del mensaje (Integrante 1)
    if (messageInput.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Por favor, ingresa tu mensaje.';
        document.getElementById('message-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    } else {
        // Mensaje de éxito
        successMessage.textContent = "¡Mensaje enviado con éxito!";
        form.reset();
        setTimeout(() => successMessage.textContent = '', 4000);
    }
});
