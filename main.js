const dice = [1, 2, 3, 4, 5, 6];

let generateBtn = document.getElementById("generate");
let mailBtn = document.getElementById("ask-mail");

generateBtn.addEventListener ("click",
    function () {

        let randomDicePlayer = dice[Math.floor(Math.random() * dice.length)];
        document.getElementById("player-number").innerHTML = randomDicePlayer;
    
        let randomDiceComputer = dice[Math.floor(Math.random() * dice.length)];
        document.getElementById("computer-number").innerHTML = randomDiceComputer;

        let result = document.getElementById("result");

        if (randomDicePlayer > randomDiceComputer) {
            result.innerHTML = ("Congratulazioni! Hai vinto la partita!")
        } else if (randomDicePlayer < randomDiceComputer) {
            result.innerHTML = ("Peccato. Hai perso la partita. Prova ancora!")
        }
        else {
            result.innerHTML = ("La partita è terminata in parità. Prova ancora!")
        }

    }

)

const mail = ["peterparker@gmail.com", "maryjanewatson@gmail.com", "harryosborn@gmail.com"];

mailBtn.addEventListener ("click",
    function() {

        let request = prompt("Inserisci il tuo indirizzo e-mail");
        for (let i = 0; i < mail.length; i++) {
            let mailFound = mail[i];
            console.log(mailFound);

            if (request == mailFound) {
                var login = true; 
            }

        }

        if (login == true) {
            alert("Indirizzo e-mail verificato. Accesso eseguito.");
        } else {
            alert("Indirizzo e-mail respinto. Verificare credenziali.");
        }
        
    }

)





