function obtenerValores() {
    // Obtener referencias a los elementos de entrada
    var contacto_nombre = document.getElementById('contacto_nombre').value;
    var contacto_email = document.getElementById('contacto_email').value;
    var contacto_telefono = document.getElementById('contacto_telefono').value;
    // var pedido_tipo_tela = document.getElementById('pedido_tipo_tela').value;
    var pedido_cantidad = document.getElementById('pedido_cantidad').value;
    var pedido_talla = document.getElementById('pedido_talla').value;
    // var pedido_texto_bordado = document.getElementById('pedido_texto_bordado').value;
    var pedido_color_tela = document.getElementById('pedido_color_tela').value;
    var pedido_foto_bordado = document.getElementById('pedido_foto_bordado').value;
    var pedido_asunto = document.getElementById('pedido_asunto').value;
    var pedido_notas = document.getElementById('pedido_notas').value;

    // Crear un objeto JSON con los valores obtenidos
    var jsonData = {
        "contacto": {
            "nombre": contacto_nombre,
            "email": contacto_email,
            "telefono": contacto_telefono
        },
        "pedido": {
            // "tipoTela": pedido_tipo_tela,
            "cantidad": pedido_cantidad,
            "talla": pedido_talla,
            // "textoBordado": pedido_texto_bordado,
            "colorTela": pedido_color_tela,
            "fotoBordado": pedido_foto_bordado
        },
        "informacionPedido": {
            "asunto": pedido_asunto,
            "notas": pedido_notas
        }
    };

    // Imprimir el objeto JSON en la consola (puedes eliminar esto en producción)
    console.log(jsonData);

    // Puedes usar el objeto jsonData como desees, por ejemplo, enviarlo a un servidor
}

// Asignar la función al evento de envío del formulario
document.getElementById('reused_form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario predeterminado
    obtenerValores();
    Swal.fire({
        icon: 'success',
        title: 'Hemos recibido tu pedido',
        text: 'Te contestaremos lo antes posible',
        
    });

});