function hola (nombre, micallback) {
    console.log('Hola, soy una funcion asíncrona');   
    setTimeout(function () {
        console.log('Hola, '+nombre);
        micallback(nombre);
    },1000); 
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ', nombre);
    }, 1000);
}

console.log('Iniciando proceso...')

hola('Enzo', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando Proceso...');
    });
});

