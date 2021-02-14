"use strict"
exports.__esModule = true
exports.GameInputComponent = void 0
var GameInputComponent = /** @class */ (function () {
  function GameInputComponent() {}
  GameInputComponent.prototype.Awake = function () {
    document.body.addEventListener("keydown", this.HandleKeyInput.bind(this))
  }
  GameInputComponent.prototype.HandleKeyInput = function (e) {
    var locomotionKeys = [
      "ArrowUp",
      "ArrowDown",
      "ArrowRight",
      "ArrowLeft",
      "KeyW",
      "KeyS",
      "KeyA",
      "KeyD",
    ]
    if (!(locomotionKeys.indexOf(e.code) > -1)) {
      return
    }
  }
  GameInputComponent.prototype.Update = function (deltaTime) {
    // @todo
  }
  return GameInputComponent
})()
exports.GameInputComponent = GameInputComponent
