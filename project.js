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

const depositAmount = deposit();
const numberOfLines = getNumberLines();

