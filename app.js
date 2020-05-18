/**
 * /*
 * Game function:
 * player must guess number between min and max
 * player gets certain amount of guesses
 * notify player of remaining guesses
 * notify the player of the correect answer if lose
 * let player choose to play again
 *
 * @format
 */

//game values
let min = 1,
	max = 10,
	winningNum = 2,
	guessesLeft = 3;

//UI elements
// put # for id in queryselector
const UIgame = document.querySelector('#game'),
	UIminNum = document.querySelector('.min-num');
UImaxNum = document.querySelector('.max-num');
UIguessBtn = document.querySelector('#guess-btn');
UIguessInput = document.querySelector('#guess-input');
UImessage = document.querySelector('.message');

//assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//listen for guess
UIguessBtn.addEventListener('click', function () {
	let guess = parseInt(UIguessInput.value);
	console.log('clicked bruh' + UIguessInput.value);

	//validate input
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	//check if user won or lost
	if (guess === winningNum) {
		gameOver(true, `${winningNum} is correct, YOU WIN!`);
		//wrong number
	} else {
		guessesLeft -= 1;
		//wrong number
		if (guessesLeft === 0) {
			//game over
			gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
		} else {
			//change border color
			UIguessInput.style.borderColor = 'red';
			//clear input
			UIguessInput.value = '';
			//game continues - answer wrong
			setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
		}
	}
});

//game over
function gameOver(won, msg) {
	let color;
	won === true ? (color = 'green') : (color = 'red');

	//disable input
	UIguessInput.disabled = true;
	//change border color
	UIguessInput.style.borderColor = color;

	//set text color
	UImessage.style.color = color;
	//set message for win
	setMessage(msg);
}

function setMessage(msg, color) {
	UImessage.style.color = color;
	UImessage.textContent = msg;
}
