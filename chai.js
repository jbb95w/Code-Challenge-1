// handle input and output in terminal
const readline = require("readline");
const asker = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the question in terminal
asker.question(
  "Karibu! How many cups of Chai Bora would you like to make? ",
  function (userInput) {
    const numberOfCups = Number(userInput);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
      console.log("Please enter a valid positive number.");
    } else {
      calculateChaiIngredients(numberOfCups);
    }
    // close the readline interface
    rl.close();
  }
);

// calculating
function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200;
  const milk = numberOfCups * 50;
  const teaLeaves = numberOfCups * 1;
  const sugar = numberOfCups * 2;
  // output displayed based on calculation
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}
