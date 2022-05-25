//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const numeroUtente = parseInt(prompt('inserisci il numero di array'));

let i = 0;

while(i < numeroUtente){
    const array = [];
    for (let j = 0; j < 10; j++){
        array.push(Math.floor(Math.random() * 100));
    }
    console.log(array);
    i++
}