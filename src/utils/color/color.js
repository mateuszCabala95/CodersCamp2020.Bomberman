"use strict"
exports.__esModule = true
exports.Color = void 0
var Color = /** @class */ (function () {
  function Color(r, g, b, a) {
    if (!Color.IsValidChannel(r)) {
      throw new Error("Provided incorrect value for Red channel")
    }
    if (!Color.IsValidChannel(g)) {
      throw new Error("Provided incorrect value for Green channel")
    }
    if (!Color.IsValidChannel(b)) {
      throw new Error("Provided incorrect value for Blue channel")
    }
    if (!Color.IsValidChannel(a, true)) {
      throw new Error("Provided incorrect value for Alpha channel")
    }
    this.R = r
    this.G = g
    this.B = b
    this.A = a
  }
  Color.IsValidChannel = function (v, isAlpha) {
    if (isAlpha === void 0) {
      isAlpha = false
    }
    var max = isAlpha ? 1 : 255
    if (v < 0 || v > max) {
      return false
    }
    if (!isAlpha && v % 1 !== 0) {
      return false
    }
    return true
  }
  Color.prototype.AsString = function () {
    return (
      "rgba(" + this.R + ", " + this.G + ", " + this.B + ", " + this.A + ")"
    )
  }
  Color.FromString = function (str) {
    var arr = str.replace(new RegExp(/\(|\)|[A-Za-z]/g), "").split(",")
    var r = Number(arr[0]),
      g = Number(arr[1]),
      b = Number(arr[2]),
      a = Number(arr[3])
    if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
      throw new Error("Invalid string")
    }
    return new Color(r, g, b, a)
  }
  return Color
})()
exports.Color = Color
