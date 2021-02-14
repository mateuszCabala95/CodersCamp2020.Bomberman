"use strict"
exports.__esModule = true
exports.CanvasLayer = void 0
var utils_1 = require("../utils")
var settings_1 = require("../settings")
var CanvasLayer = /** @class */ (function () {
  function CanvasLayer() {
    /* make it unaccessible */
  }
  CanvasLayer.InitCanvas = function (style) {
    var size =
      (settings_1.Settings.grid.nodeSize +
        settings_1.Settings.grid.nodeOffset) *
        settings_1.Settings.grid.dimension +
      settings_1.Settings.grid.nodeOffset
    var canvas = new utils_1.Canvas(new utils_1.Vector2D(size, size))
    canvas.Awake()
    canvas.SetStyle(style)
    return canvas
  }
  Object.defineProperty(CanvasLayer, "Background", {
    get: function () {
      if (!this._background) {
        this._background = this.InitCanvas({ zIndex: "0" })
      }
      return this._background
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(CanvasLayer, "Foreground", {
    get: function () {
      if (!this._foreground) {
        this._foreground = this.InitCanvas({ zIndex: "1" })
      }
      return this._foreground
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(CanvasLayer, "Foreground2", {
    get: function () {
      if (!this._foreground2) {
        this._foreground2 = this.InitCanvas({ zIndex: "2" })
      }
      return this._foreground2
    },
    enumerable: false,
    configurable: true,
  })
  return CanvasLayer
})()
exports.CanvasLayer = CanvasLayer
