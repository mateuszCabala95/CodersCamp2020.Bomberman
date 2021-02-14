"use strict"
exports.__esModule = true
exports.NodeDrawComponent = void 0
var settings_1 = require("../../../settings")
var canvas_layer_1 = require("../../../canvas-layer")
var NodeDrawComponent = /** @class */ (function () {
  function NodeDrawComponent() {}
  Object.defineProperty(NodeDrawComponent.prototype, "Entity", {
    get: function () {
      return this._Entity
    },
    set: function (value) {
      this._Entity = value
    },
    enumerable: false,
    configurable: true,
  })
  NodeDrawComponent.prototype.Awake = function () {
    this.Clear()
  }
  NodeDrawComponent.prototype.Update = function (deltaTime) {
    this.Clear()
    this.Draw()
    this.DrawRect()
  }
  NodeDrawComponent.prototype.Draw = function () {
    canvas_layer_1.CanvasLayer.Background.FillRect(
      this._Entity.Start,
      this._Entity.Size,
      settings_1.Settings.grid.color
    )
  }
  NodeDrawComponent.prototype.DrawRect = function () {
    canvas_layer_1.CanvasLayer.Foreground.FillRect(
      this._Entity.Start,
      this._Entity.Size,
      settings_1.Settings.grid.color
    )
  }
  NodeDrawComponent.prototype.Clear = function () {
    canvas_layer_1.CanvasLayer.Background.ClearRect(
      this._Entity.Start,
      this._Entity.Size
    )
  }
  return NodeDrawComponent
})()
exports.NodeDrawComponent = NodeDrawComponent
