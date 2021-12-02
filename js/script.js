// chiediamo all'utente il suo nome
const userName = prompt('Inserisci il tuo nome');




// chiediamo all'utente il suo cognome

const userLastname = prompt("Inserisci il tuo cognome")





// chiediamo all'utente il suo colore preferito

const colore = prompt("Inserisci il tuo colore preferito")





// scrivo una variabile con nomecognomecolorepreferito21

let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `la tua password è ${userName} ${userLastname} ${colore} 21`;

console.log(`${userName} ${userLastname} ${colore} 21`);