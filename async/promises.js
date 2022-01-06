function hola (nombre, micallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+nombre);
            resolve(nombre);
        },1500); 
    });  
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
};

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios ', nombre);
            // resolve();
            reject('Hay un error');
        }, 1000);
    });
};

// ---

console.log('Iniciando el proceso..');
hola('Enzo')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('ha habido un error: ');
        console.error(error);
    });