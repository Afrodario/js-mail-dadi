const dice = [1, 2, 3, 4, 5, 6];

generate.addEventListener ("click",
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



