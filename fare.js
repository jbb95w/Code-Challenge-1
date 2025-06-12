// handle input and output in terminal
const readline = require("readline");

const asker = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

asker.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", function (input) {
  const distanceInKm = Number(input);
  calculateBodaFare(distanceInKm);
  asker.close();
});

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const fareToDestination = distanceInKm * chargePerKm;
  const totalFare = baseFare + fareToDestination;

  console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${fareToDestination}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);
}
