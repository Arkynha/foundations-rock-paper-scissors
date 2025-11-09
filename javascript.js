function getComputerChoice (){
    let escolha = Math.floor((Math.random() *100)) +1
    

    if(escolha <=33){
        escolha = 'Pedra'
        console.log (escolha)
    }
    else if (escolha >33 && escolha <= 66){
        escolha = 'Tesoura'
        console.log (escolha)

    }
    else {
        escolha = 'Papel'
        console.log(escolha)
    }


    return escolha
}

function capitalize (text){
        let char = text.charAt(0);
        let texto = text.slice(1);
        let palavra = char.toUpperCase() + texto.toLowerCase();
        return palavra;
}


function getHumanChoice(){
   let humano = prompt("Sua escolha: ", "")
    humano = capitalize (humano)
    console.log(humano)
    return humano

}


function playGame(){

    let humanScore = 0 
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        alert('Empate!')
    }

    if(humanChoice === 'Pedra'){
        if(computerChoice === 'Papel'){
            alert('Você perdeu! Pedra perde para papel.')
            computerScore++;
        }
        if(computerChoice === 'Tesoura'){
            alert('Você ganhou! Pedra ganha de Tesoura.')
            humanScore++;
        }
    }    
    if(humanChoice === 'Tesoura'){
        if(computerChoice === 'Pedra'){
            alert('Você perdeu! Tesoura perde para Pedra.')
            computerScore++;
        }
        if(computerChoice === 'Papel'){
            alert('Você ganhou! Tesoura ganha de Papel.')
            humanScore++;
        }
    }    
    if(humanChoice === 'Papel'){
        if(computerChoice === 'Tesoura'){
            alert('Você perdeu! Papel perde para Tesoura.')
            computerScore++;
        }
        if(computerChoice === 'Pedra'){
            alert('Você ganhou! Papel ganha de Pedra.')
            humanScore++;
        }
    }
}

  for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    playRound(humanSelection, computerSelection);
        console.log(humanScore);
        console.log(computerScore);
    }
    if (computerScore > humanScore){
        alert(`Voce perdeu a partida :C  ${computerScore} a ${humanScore} `)

    }
    if (computerScore < humanScore){
        alert(`Voce ganhou a partida! :D ${humanScore} a ${computerScore}`)

    }
    if (computerScore == humanScore) {
        alert(`Empate na partida :O ${humanScore} a ${computerScore}`)
    }

}

playGame();
