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
exports.Node = void 0
var utils_1 = require("../utils")
var components_1 = require("./components")
var Node = /** @class */ (function (_super) {
  __extends(Node, _super)
  function Node(Start, End, Index) {
    var _this = _super.call(this) || this
    _this.Start = Start
    _this.End = End
    _this.Index = Index
    return _this
  }
  Object.defineProperty(Node.prototype, "Size", {
    get: function () {
      return new utils_1.Vector2D(
        this.End.x - this.Start.x,
        this.End.y - this.Start.y
      )
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Node.prototype, "Center", {
    get: function () {
      return new utils_1.Vector2D(
        this.Start.x + this.Size.x / 2,
        this.Start.y + this.Size.y / 2
      )
    },
    enumerable: false,
    configurable: true,
  })
  Node.prototype.Awake = function () {
    this.AddComponent(new components_1.NodeDrawComponent())
    _super.prototype.Awake.call(this)
  }
  return Node
})(utils_1.Entity)
exports.Node = Node
