"use strict"
exports.__esModule = true
exports.Canvas = void 0
var utils_1 = require("../../utils")
var img = new Image()
var block = new Image()
img.src = "https://svgshare.com/i/Thc.svg"
block.src = "https://svgshare.com/i/Tii.svg"
var Canvas = /** @class */ (function () {
  function Canvas(Size) {
    this.Size = Size
  }
  Object.defineProperty(Canvas.prototype, "Element", {
    get: function () {
      return this._elm
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(Canvas.prototype, "Context", {
    get: function () {
      return this._ctx
    },
    enumerable: false,
    configurable: true,
  })
  Canvas.prototype.Awake = function () {
    var canvas = document.createElement("canvas")
    canvas.setAttribute("width", this.Size.x + "px")
    canvas.setAttribute("height", this.Size.y + "px")
    document.body.appendChild(canvas)
    this._elm = canvas
    var ctx = this._elm.getContext("2d")
    if (!ctx) {
      throw new Error("Context identifier is not supported")
    }
    this._ctx = ctx
  }
  Canvas.prototype.FillRect = function (start, size, color) {
    this._ctx.beginPath()
    this._ctx.fillStyle = color.AsString()
    this._ctx.rect(start.x, start.y, size.x, size.y)
    this._ctx.fill()
  }
  Canvas.prototype.FillCircle = function (center) {
    this._ctx.beginPath()
    this._ctx.drawImage(img, center.x - 40, center.y - 40)
    this._ctx.fill()
  }
  Canvas.prototype.FillBlock = function (center) {
    this._ctx.beginPath()
    this._ctx.drawImage(block, 130, 240)
    this._ctx.drawImage(block, 240, 460)
    this._ctx.drawImage(block, 350, 680)
    this._ctx.fill()
  }
  Canvas.prototype.ClearRect = function (start, size) {
    this._ctx.clearRect(start.x, start.y, size.x, size.y)
  }
  Canvas.prototype.SetStyle = function (style) {
    for (var key in style) {
      if (!Object.hasOwnProperty.call(style, key)) {
        continue
      }
      if (!style[key]) {
        continue
      }
      this._elm.style[key] = style[key]
    }
  }
  Canvas.prototype.CalcLocalPointFrom = function (globalPoint) {
    var canvasRect = this._elm.getBoundingClientRect()
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    var offset = {
      top: canvasRect.top + scrollTop,
      left: canvasRect.left + scrollLeft,
    }
    var x = globalPoint.x - offset.left
    var y = globalPoint.y - offset.top
    if (x < 0 || y < 0) {
      return null
    }
    if (
      x > offset.left + canvasRect.width ||
      y > offset.top + canvasRect.height
    ) {
      return null
    }
    return new utils_1.Vector2D(x, y)
  }
  return Canvas
})()
exports.Canvas = Canvas
