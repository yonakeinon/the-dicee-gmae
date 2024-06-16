document.addEventListener('DOMContentLoaded', () => {
    function getRandomDiceNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function setDiceImage(playerClass, diceNumber) {
        document.querySelector(playerClass).setAttribute('src', `images/dice${diceNumber}.png`);
    }

    function rollDice() {
        const player1DiceNumber = getRandomDiceNumber();
        const player2DiceNumber = getRandomDiceNumber();

        setDiceImage('.img1', player1DiceNumber);
        setDiceImage('.img2', player2DiceNumber);

        const header = document.querySelector('h1');
        if (player1DiceNumber > player2DiceNumber) {
            header.textContent = '🚩 Player 1 Wins!';
        } else if (player1DiceNumber < player2DiceNumber) {
            header.textContent = 'Player 2 Wins! 🚩';
        } else {
            header.textContent = 'Draw!';
        }
    }

    // Roll the dice when the page is loaded
    rollDice();

    // Roll the dice when the button is clicked
    document.querySelector('#rollButton').addEventListener('click', rollDice);
});
