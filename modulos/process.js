// const p = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});


funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');


// Process
// El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

// UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.

// process.on('uncaughtException', (error, origen) => console.log(error, origen));
// exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.

// process.on('exit', () => console.log('Adios'));
