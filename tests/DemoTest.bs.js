// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Demo = require("../src/Demo.bs.js");
var Tests = require("./Tests.bs.js");

function equals(a, b) {
  return a === b;
}

function run(param) {
  Tests.run([
        [
          "DemoTest.res",
          7,
          23,
          53
        ],
        "Adding 2 numbers should work"
      ], Demo.add(1, 2), equals, 3);
  [
      1,
      5,
      6,
      9
    ].forEach(function (num) {
        return Tests.run([
                    [
                      "DemoTest.res",
                      10,
                      25,
                      64
                    ],
                    "Adding random numbers should work too"
                  ], Demo.add(num, num), equals, Math.imul(num, 22));
      });
  
}

exports.equals = equals;
exports.run = run;
/* Tests Not a pure module */
