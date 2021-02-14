"use strict"
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
exports.__esModule = true
exports.Bombs = void 0
var utils_1 = require("../utils")
var Bombs = /** @class */ (function (_super) {
  __extends(Bombs, _super)
  function Bombs(Factory) {
    var _this = _super.call(this) || this
    _this.Factory = Factory
    return _this
  }
  return Bombs
})(utils_1.Entity)
exports.Bombs = Bombs
