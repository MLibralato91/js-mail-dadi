/*
Esercitazione
--------------------------------------------------------

Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

---------------------------------------------------------
*/ 

let classEmail = [
    'lisa@email.com',
    'marco@email.com',
    'sara@email.com',
    'chiara@email.com',
    'samuele@email.com',
    'simone@email.com',
    'michele@email.com',
    'giorgia@email.com',
    'simona@email.com',
    'emanuele@email.com',
    'mirko@email.com',
]
//console.log(classEmail);

const btn = document.querySelector(' .myEmail');
const btnReset = document.querySelector(' .myReset');

btn.addEventListener('click', checkEmail);
btnReset.addEventListener('click', resetEmail)

let message = document.getElementById('emailHelp');
//console.log(typeof(message))

function checkEmail(e) {
    e.preventDefault();
    let freeEntry = '';
    let user = document.getElementById('emailForm').value;
    for (let i = 0; i < classEmail.length; i++) {
        if(classEmail[i].toLowerCase() === user.toLowerCase()){
            freeEntry = classEmail[i];
        }        
    }
    if(freeEntry){
        message.innerText = 'Benvenuto nella nostra area personale';
        
       // console.log(message);

    }else {
        message.innerText = "Mi dispiace, non hai accesso all' area personale!";
    }
}
function resetEmail (){
    let user = document.getElementById('emailForm').value;
    user = '';
}

/*
Esercitazione
--------------------------------------------------------

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
--------------------------------------------------------

*/

let michele = Math.floor((Math.random() * 6) + 1);

let computer = Math.floor((Math.random() * 6) + 1);

let result;
console.log(michele, computer);
if(michele === computer){
    result = 'PAREGGIO!'   
} else if (michele > computer) {
    result = 'Hai vinto!'
}else {
    result= 'Hai perso!'
}


console.log(result);