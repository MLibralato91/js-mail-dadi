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
btnReset.addEventListener('click', resetEmail);

let message = document.getElementById('emailHelp');
//console.log(typeof(message))

function checkEmail(e) {
    e.preventDefault();
    let freeEntry = '';
    let user = document.getElementById('emailForm').value;
    for (let i = 0; i < classEmail.length; i++) {
        if (classEmail[i].toLowerCase() === user.toLowerCase()) {
            freeEntry = classEmail[i];
        }
    }
    if (freeEntry) {
        message.innerText = 'Benvenuto nella nostra area personale';

        // console.log(message);

    } else {
        message.innerText = "Mi dispiace, non hai accesso all' area personale!";
    }
}
function resetEmail() {
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
const roll = document.querySelector('.myDice');
roll.addEventListener('click', rollDice);

const diceOne = document.querySelectorAll('.oneDice');
const diceTwo = document.querySelectorAll('.twoDice');
const diceTree = document.querySelectorAll('.treeDice');
const diceFour = document.querySelectorAll('.fourDice');
const diceFive = document.querySelectorAll('.fiveDice');
const diceSix = document.querySelectorAll('.sixDice');
let numberDice;
console.log(diceOne);

function rollDice() {
    let michele = Math.floor((Math.random() * 6) + 1);

    let computer = Math.floor((Math.random() * 6) + 1);

    let result;

    if(michele === 1 || computer === 1){
        diceOne[0].classList.remove('d-none');
        diceOne[1].classList.remove('d-none');
        
    }
    if(michele === 2 && computer === 2){
        diceTwo[0].classList.remove('d-none');
        diceTwo[1].classList.remove('d-none');
        
    }
    if(michele === 3 && computer === 3){
        diceTree[0].classList.remove('d-none');
        diceTree[1].classList.remove('d-none');

        
    }
    if(michele === 4 && computer === 4){
        diceFour[0].classList.remove('d-none');
        diceFour[1].classList.remove('d-none');
        
    }
    if(michele === 5 && computer === 5){
        diceFive[0].classList.remove('d-none');
        diceFive[1].classList.remove('d-none');
        
    }
    if(michele === 6 && computer === 6){
        diceSix[0].classList.remove('d-none');
        diceSix[1].classList.remove('d-none');
        
    }    

        

    console.log(michele, computer);
    if (michele === computer) {
        result = 'PAREGGIO!'
    } else if (michele > computer) {
        result = 'Hai vinto!'
    } else {
        result = 'Hai perso!'
    }

}
