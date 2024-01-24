function guardarInformacion(producto) {
    
    // // Guardar información en localStorage
    localStorage.setItem('Elemento', producto);
    window.location.href = 'contact.html';
}