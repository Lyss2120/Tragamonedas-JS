// 1. deposit money
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again


const prompt = require('prompt-sync')(); //require the package imports into the program, and the second parentesis gives acces to the function that you can use to set the user input
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT =
{
    A: 2,
    B: 4,
    C: 6,
    D: 8
}
const SYMBOL_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


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
        const bet = prompt('Enter the bet per line: ');
        const numberBet = parseFloat(bet)

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {// numberBet > balance / lines: revisa si el monto de las apuestas (bet per line) no es mayor al $ total / por el nro de apuestas
            console.log('Invalid bet, try again');
        } else { return numberBet }
    }
}
const spin = () => {
    const symbols = [];

    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol); //envia el numero de simbolos correspondiente al array symbols 2 A, 4 B, 6 C, 8 D
        }
    }    
    const reels = [[], [], []]; //crea 3 espacios para los simbolos
    
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols]//copia el array symbols para tener disponibles los simbolos en cada linea
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]//selecciona un simbolo al azar
            reels[i].push(selectedSymbol)//añade el simbolo su posicion en la linea
            reelSymbols.splice(randomIndex, 1) //elimina el elemento del array reelSymbols
            // console.log({j}, {randomIndex}, {selectedSymbol}, {reelSymbols}, {reels});
        }
    }
    return reels;
     
}
console.log(spin());

spin()



// let balance1 = deposit();
// const numberOfLines = getNumberLines();
// const bet = getBet(balance1, numberOfLines);



