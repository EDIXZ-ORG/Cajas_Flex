// Busca todos los formularios que tienen esta clase.
document.querySelectorAll('.contacto-form').forEach((formulario) => {
    // Escucha el momento en que el usuario pulsa el botón de envío.
    formulario.addEventListener('submit', (evento) => {
        // Evita que la página se recargue.
        evento.preventDefault();

        // Busca el espacio donde se mostrará la confirmación.
        const mensaje = formulario.querySelector('.mensaje-formulario');

        // Muestra un mensaje después de recibir los datos.
        mensaje.textContent = 'Datos recibidos correctamente.';

        // Limpia los campos del formulario.
        formulario.reset();
    });
});