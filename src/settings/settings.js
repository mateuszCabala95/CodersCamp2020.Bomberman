"use strict"
exports.__esModule = true
exports.Settings = void 0
var utils_1 = require("../utils")
exports.Settings = Object.freeze({
  grid: {
    dimension: 8,
    nodeSize: 100,
    nodeOffset: 10,
    color: new utils_1.Color(245, 245, 245, 1),
  },
  bombs: {
    numberOfBombs: 1,
  },
  players: {
    radius: 40,
    colors: {
      a: new utils_1.Color(187, 222, 251, 1),
      b: new utils_1.Color(255, 236, 179, 1),
    },
  },
})
