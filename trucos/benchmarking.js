console.time('todo');
let suma = 0;
console.time('bucle');
for (let i=0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');


let suma2 = 0;
console.time('bucle2');
for (let j=0; j < 1000000000; j++) {
    suma += 1;
}
console.timeEnd('bucle2');
console.timeEnd('todo');
