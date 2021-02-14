"use strict"
exports.__esModule = true
exports.mockNodeFactory = void 0
var node_1 = require("../node")
var utils_1 = require("../../utils")
var mockNodeFactory = function (start, end, index) {
  if (start === void 0) {
    start = new utils_1.Vector2D(0, 0)
  }
  if (end === void 0) {
    end = new utils_1.Vector2D(1, 1)
  }
  if (index === void 0) {
    index = new utils_1.Vector2D(0, 0)
  }
  return new node_1.Node(start, end, index)
}
exports.mockNodeFactory = mockNodeFactory
