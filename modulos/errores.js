function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asícnrona');
            cb(err);
        }
    })
}

try {
    //otraFuncion();
    seRompeAsincrona(function (err) {
        console.log (err.message)
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui está al final');

// Con Node podemos manejar los errores de una manera muy optima, pero primero debemos entender como Node maneja los errores por defecto.
// Cuando sucede un error en Node, él por defecto terminara todo el proceso de nuestro código para avisar que ha ocurrido un error, esto puede ser fatal para nuestros proyectos, los errores además se notifican por hilos, es decir, que si un error sucede en el hilo principal del event loop, es decir, el evento queue, el error se avisara desde este mismo hilo, pero si un error sucede antes desde otro hilo como el hilo de las funciones asíncronas, el error se avisara desde aquel hilo sin dejar mostrar el error del hilo principal.
// Nosotros podemos manejar este flujo de errores para que Node no se detenga al momento de que ocurra uno y lo podamos manejar según nuestros deseos, para esto usamos try y catch. Siendo try el bloque de código que ejecutara la función que puede o no fallar y siendo catch la función que atrapara el error y le especificaremos que hacer con él.