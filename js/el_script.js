

// Swal.fire('¡Hola, mundo!', 'Este es un mensaje de éxito.', 'success');

    // Puedes personalizar el mensaje según tus necesidades
// Swal.fire({
//     icon: 'error',
//     title: '¡Error!',
//     text: 'Algo salió mal.',
//     footer: '<a href="#">¿Necesitas ayuda?</a>'
// });


document.getElementById("photo-cont").addEventListener("click", function(event) {
    // Verificar si el elemento clickeado tiene la clase "contenedor-dinamico"
    if (event.target) {
       console.log("Hola");
        var idDelContenedorClickeado = event.target.id;

        console.log("ID del contenedor clickeado: " + idDelContenedorClickeado);
        intercambiarFotos(idDelContenedorClickeado);
    }
});


function intercambiarFotos(id){
   const foto_sec = document.getElementById(id);
   const foto_main = document.getElementById("foto-main");
   
   const srcSec = foto_sec.src;
   const srcMain = foto_main.src;

   foto_sec.src = srcMain;
   foto_main.src= srcSec;
   

}
