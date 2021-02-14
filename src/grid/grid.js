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
exports.Grid = void 0
var utils_1 = require("../utils")
var node_1 = require("../node")
var settings_1 = require("../settings")
var Grid = /** @class */ (function (_super) {
  __extends(Grid, _super)
  function Grid() {
    var _this = _super.call(this) || this
    _this._nodes = []
    _this.InitNodes()
    return _this
  }
  Object.defineProperty(Grid.prototype, "Nodes", {
    get: function () {
      return this._nodes
    },
    enumerable: false,
    configurable: true,
  })
  Grid.prototype.Awake = function () {
    _super.prototype.Awake.call(this)
    for (var _i = 0, _a = this._nodes; _i < _a.length; _i++) {
      var node = _a[_i]
      node.Awake()
    }
  }
  Grid.prototype.Update = function (deltaTime) {
    _super.prototype.Update.call(this, deltaTime)
    for (var _i = 0, _a = this._nodes; _i < _a.length; _i++) {
      var node = _a[_i]
      node.Update(deltaTime)
    }
  }
  Grid.prototype.InitNodes = function () {
    var size = settings_1.Settings.grid.nodeSize
    var offset = settings_1.Settings.grid.nodeOffset
    for (var y = 0; y < settings_1.Settings.grid.dimension; y++) {
      for (var x = 0; x < settings_1.Settings.grid.dimension; x++) {
        var start = new utils_1.Vector2D(
          x * (size + offset) + offset,
          y * (size + offset) + offset
        )
        var end = new utils_1.Vector2D(start.x + size, start.y + size)
        var index = new utils_1.Vector2D(x, y)
        var node = new node_1.Node(start, end, index)
        this._nodes.push(node)
      }
    }
  }
  return Grid
})(utils_1.Entity)
exports.Grid = Grid
