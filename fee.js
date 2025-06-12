// handle input and output in terminal
const readline = require("readline");

const asker = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
asker.question("Unatuma Ngapi? (KES): ", function (input) {
  const amountToSend = Number(input);
  estimateTransactionFee(amountToSend);
  asker.close();
});

function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015;
  const fee = Math.max(10, Math.min(percentageFee, 70));
  const totalAmount = amountToSend + fee;

  console.log(`\nSending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log(`\nSend Money Securely!`);
}
