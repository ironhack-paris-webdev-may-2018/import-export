// uses the math functions defined in "math.ts"
import {
  secondPower,
  sum,
  subtract,
  multiply
} from "./math";

// import everything with *
import * as Blah from "./math";

// import a default export (usually when there's only one thing)
import mySongs from "./data";

console.log("6 * 6 =", secondPower(6));

console.log("17 + 25 =", sum(17, 25));

// use functions as methods when importing with *
console.log(Blah.randomInteger(100));

console.log("Our class likes these songs:");
mySongs.forEach((oneSong) => {
  console.log(`* ${oneSong}`);
});
