const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const  modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};

function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getChoice();
    const winner = getWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner)
}

//choice for computer
function getChoice() {
    const rand = Math.random();
    if (rand < 0.34)  {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// get winner

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock') {
        if (computer === 'paper') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return'computer'
        } else {
            return 'player'
        }
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));