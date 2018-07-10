"use strict";
exports.__esModule = true;
// uses the math functions defined in "math.ts"
var math_1 = require("./math");
// import everything with *
var Blah = require("./math");
// import a default export (usually when there's only one thing)
var data_1 = require("./data");
console.log("6 * 6 =", math_1.secondPower(6));
console.log("17 + 25 =", math_1.sum(17, 25));
// use functions as methods when importing with *
console.log(Blah.randomInteger(100));
console.log("Our class likes these songs:");
data_1["default"].forEach(function (oneSong) {
    console.log("* " + oneSong);
});
