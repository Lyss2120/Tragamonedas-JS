// 1. deposit money
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again


const prompt = require('prompt-sync')(); //require the package imports into the program, and the second parentesis gives acces to the function that you can use to set the user input

const deposit = () => {
    // loop forever till the else condition is met, that break the loop    
    while (true) {
        const depositAmount = prompt('Enter a deposit amount: ')
        const numberDepositAmount = parseFloat(depositAmount)

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('invalid deposit amount, please try again.');
        } else {
            return numberDepositAmount
        }
    }
}


const getNumberLines = () => {

    while (true) {
        const lines = prompt('Enter the number of lines to bet on (1-3): ');
        const numberOfLines = parseFloat(lines)

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Invalid number of lines, please try again');
        } else {
            return numberOfLines
        }

    }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt('Enter the total bet: ');

        if (isNaN(numberBet) || numberBet >= 0 || numberBet > balance / lines)
            console.log('Invalid bet, try again');
            
    } // numberBet > balance / lines: revisa si el monto de cada apuesta es menor al $ total/por las lineas a jugar o no alcanza

let balance = deposit();
const numberOfLines = getNumberLines();
const bet = getBet(balance, numberOfLines);


