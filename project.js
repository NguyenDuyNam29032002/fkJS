const promt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = promt("enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOflines = () => {
  while (true) {
    const lines = promt("enter the number of line to the bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("invalid number of lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (blance) => {
  const bet = promt("enter the total bet: ");
  const numberBet = parseFloat(bet);
  if (isNaN(numberBet) || numberBet <= 0 || numberBet > blance) {
    console.log("invalied number bet, try again");
  } else {
    return numberBet;
  }
};

let blance = deposit();
const numberOfLines = getNumberOflines();
const bet = getBet(blance);
