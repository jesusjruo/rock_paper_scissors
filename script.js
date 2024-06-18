

//this is the function that will be going into the event listner
const handleClick = (e) => {
    console.log('clicked', e.target.className);
    
    document.querySelector('p').textContent = e.target.className;
  
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    let msg = '';
    if (e.target.className === computerChoice) {
        msg = 'You tied!';
    } else if (e.target.className === choices[0] && computerChoice === choices[2]) {
        msg = 'Congrats! You win!';
    } else if (e.target.className === choices[1] && computerChoice === choices[0]) {
        msg = 'Congrats! You win!';
    } else if (e.target.className === choices[2] && computerChoice === choices[1]) {
        msg = 'Congrats! You win!';
    } else {
        msg = 'You lose! Try again?';
    }

    const text = `you choose ${e.target.className} and computer chooses ${computerChoice}. ${msg}`;

    document.querySelector('p').textContent = text;
}


document.querySelector('.rock').addEventListener('click', handleClick);
document.querySelector('.paper').addEventListener('click', handleClick);
document.querySelector('.scissors').addEventListener('click', handleClick);