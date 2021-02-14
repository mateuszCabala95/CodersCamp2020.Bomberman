"use strict"
exports.__esModule = true
exports.PlayerDrawComponent = void 0
var utils_1 = require("../../../utils")
var canvas_layer_1 = require("../../../canvas-layer")
var settings_1 = require("../../../settings")
var team_1 = require("../../../team")
var PlayerDrawComponent = /** @class */ (function () {
  function PlayerDrawComponent(entity) {
    this.Entity = entity
  }
  Object.defineProperty(PlayerDrawComponent.prototype, "Position", {
    get: function () {
      var position = this.Entity.Position
      if (!position) {
        throw new Error("Attempt to draw a player that has no Position")
      }
      return position
    },
    enumerable: false,
    configurable: true,
  })
  PlayerDrawComponent.prototype.Awake = function () {
    this.Clear()
  }
  PlayerDrawComponent.prototype.Update = function (deltaTime) {
    this.Clear()
    this.Draw()
  }
  PlayerDrawComponent.prototype.Draw = function () {
    var colors = settings_1.Settings.players.colors
    var color = this.Entity.Team === team_1.Team.A ? colors.a : colors.b
    canvas_layer_1.CanvasLayer.Foreground.FillCircle(this.Position)
    canvas_layer_1.CanvasLayer.Foreground2.FillBlock(
      new utils_1.Vector2D(
        this.Position.x - settings_1.Settings.grid.nodeSize,
        this.Position.y - settings_1.Settings.grid.nodeSize
      )
    )
  }
  PlayerDrawComponent.prototype.Clear = function () {
    canvas_layer_1.CanvasLayer.Foreground.ClearRect(
      new utils_1.Vector2D(
        this.Position.x - settings_1.Settings.grid.nodeSize / 2,
        this.Position.y - settings_1.Settings.grid.nodeSize / 2
      ),
      new utils_1.Vector2D(
        settings_1.Settings.grid.nodeSize,
        settings_1.Settings.grid.nodeSize
      )
    )
  }
  return PlayerDrawComponent
})()
exports.PlayerDrawComponent = PlayerDrawComponent
