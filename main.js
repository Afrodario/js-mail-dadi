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
            result.innerHTML = ("Il Green Goblin non può nulla contro il senso di ragno di Spider-Man. Hai abbattuto il nemico e vinto lo scontro!")
        } else if (randomDicePlayer < randomDiceComputer) {
            result.innerHTML = ("Questa volta l'astuzia del Green Goblin ha messo al tappeto Spider-Man. Prova ancora!")
        }
        else {
            result.innerHTML = ("La forza dei due avversari si equivale. Continua a provare!")
        }

    }

)

const mail = ["scottsummers@x-men.com", "hankmccoy@x-men.com", "jeangrey@x-men.com", "ororomunroe@x-men.com", "charlesxavier@x-men.com"];

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
            alert("Credenziali verificate. Accesso eseguito.");
        } else {
            alert("Credenziali respinte. Verificare credenziali.");
        }
        
    }

)





