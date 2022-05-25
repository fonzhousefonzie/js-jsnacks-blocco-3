//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//Interrompi il ciclo appena il nome è stato trovato.

const listaInvitati = ['Quentino Tarantin', 'Joe Mammiferi', 'Martin Scortese', 'Enrico Vasaio'];

const nomeUtente = prompt('Inserisci il tuo nome e il tuo cognome');
let nomeTrovato = -1;
let i = 0

while (i < listaInvitati.length){
    if (nomeUtente === listaInvitati[i]){
        nomeTrovato = i;
    }
    i++
}

if (nomeTrovato === -1){
    alert('Nun ce provà');
} else {
    alert('Benvenuto alla festa del grande Gatsby!')
}