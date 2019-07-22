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

    showWinner(winner, computerChoice);
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

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
        <h1 class="text-win">Вы пераможца</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Кампутар абраў <strong>${computerChoice}</strong></p>`;
    } else if (winner === 'computer' ) {
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class="text-loose">Вы прайгралі</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Кампутар абраў <strong>${computerChoice}</strong></p>`;
    } else {
        result.innerHTML = `
        <h1>Гэта нічыя</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Кампутар абраў <strong>${computerChoice}</strong></p>`;
    }
    score.innerHTML = `<p>Гулец:${scoreboard.player}</p> <p>Кампутар:${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p>Гулец: 0</p> <p>Кампутар: 0</p>`
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

