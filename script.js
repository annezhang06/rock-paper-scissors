function getHumanChoice() {
    let humanSelection = prompt("Enter your play: ");
    return humanSelection;
}

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1/3) {
        return "rock";
    }
    else if (rand < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let winnerMessage;
        let humanWin = false;
        let computerWin = false;
        if (humanChoice === computerChoice) {
            winnerMessage = "You tied! You both played " + humanChoice + ".";
            humanWin = true;
            computerWin = true;
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            winnerMessage = "You lose! The computer played paper, and paper beats rock.";
            computerWin = true;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            winnerMessage = "You win! The computer played rock, and paper beats rock.";
            humanWin = true;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            winnerMessage = "You lose! The computer played scissors, and scissors beats paper.";
            computerWin = true;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            winnerMessage = "You win! The computer played paper, and scissors beats paper.";
            humanWin = true;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            winnerMessage = "You lose! The computer played rock, and rock beats scissors.";
            computerWin = true;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            winnerMessage = "You win! The computer played scissors, and rock beats scissors.";
            humanWin = true;
        }

        if (humanWin) humanScore++;
        if (computerWin) computerScore++;

        console.log(winnerMessage);
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
}

playGame();
