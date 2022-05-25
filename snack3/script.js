//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

let i = 0;
while(i < 5){
    const numero = parseInt(prompt('inserisci un numero'));
    if(!isNaN(numero)){
    somma = somma + numero;
    } else {
        i--
    }
    i++
}

console.log(somma);

