// Variables,Elements declaration
const rock = document.querySelectorAll('.box')[0];
const paper = document.querySelectorAll('.box')[1];
const scissors = document.querySelectorAll('.box')[2];
const screen = document.querySelector('.screen');
const reset = document.querySelector('#reset');
let userInput = "";
const users = document.querySelector('#userScore');
const comps = document.querySelector('#computerScore');
let userScore = 0;
let computerScore = 0;


const comp = ['Rock', 'Paper', 'Scissor'];

// This function generates computer moves randomly
function computerMove(arr) {
    const rand = Math.floor(Math.random() * 3);
    compInput = arr[rand];
    return compInput;
}

// This function decides who won and who lost 
function winner(userInput, computerInput) {
    if (userInput === 'Rock' && computerInput === 'Scissor') {
        screen.innerText = `You Won! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#2daf3b";
        userScore += 1;
        users.innerText = `User Score : ${userScore}`;
        comps.innerText = `Computer Score : ${computerScore}`;
    } else if (userInput === 'Rock' && computerInput === 'Rock') {
        screen.innerText = `Draw! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#a2d2ff";

    } else if (userInput === 'Rock' && computerInput === 'Paper') {
        screen.innerText = `You Lost! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#ff758f";
        computerScore += 1;
        users.innerText = `User Score : ${userScore}`;
        comps.innerText = `Computer Score : ${computerScore}`;

    } else if (userInput === 'Scissor' && computerInput === 'Rock') {
        screen.innerText = `You Lost! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#ff758f";
        computerScore += 1;
        users.innerText = `User Score : ${userScore}`;
        comps.innerText = `Computer Score : ${computerScore}`;

    } else if (userInput === 'Scissor' && computerInput === 'Paper') {
        screen.innerText = `You Won! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#2daf3b";
        userScore += 1;
        users.innerText = `User Score : ${userScore}`;
        comps.innerText = `Computer Score : ${computerScore}`;

    } else if (userInput === 'Scissor' && computerInput === 'Scissor') {
        screen.innerText = `Draw! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#a2d2ff";


    } else if (userInput === 'Paper' && computerInput === 'Rock') {
        screen.innerText = `You Won! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#2daf3b";
        userScore += 1;
        users.innerText = `User Score : ${userScore}`;
        comps.innerText = `Computer Score : ${computerScore}`;

    } else if (userInput === 'Paper' && computerInput === 'Paper') {
        screen.innerText = `Draw! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#a2d2ff";

    } else if (userInput === 'Paper' && computerInput === 'Scissor') {
        screen.innerText = `You Lost! User : ${userInput} and Computer : ${computerInput}`;
        screen.style.backgroundColor = "#ff758f";
        computerScore += 1;
        users.innerText = `User Score : ${userScore}`;
        comps.innerText = `Computer Score : ${computerScore}`;
    }
}

// Events

rock.addEventListener('click', () => {
    if (rock.onlclick !== null) {
        userInput = 'Rock';
        computerInput = computerMove(comp);
        winner(userInput, computerInput);

    }
});

paper.addEventListener('click', () => {
    let userInput = "";
    if (paper.onlclick !== null) {
        userInput = 'Paper';
        computerInput = computerMove(comp);
        winner(userInput, computerInput);

    }
});

scissors.addEventListener('click', () => {
    let userInput = "";
    if (paper.onlclick !== null) {
        userInput = 'Scissor';
        computerInput = computerMove(comp);
        winner(userInput, computerInput);
    }
});

reset.addEventListener('click', () => {
    window.location.reload();
});

