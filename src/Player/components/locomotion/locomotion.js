"use strict"
exports.__esModule = true
exports.PlayerLocomotionComponent = void 0
var PlayerLocomotionComponent = /** @class */ (function () {
  function PlayerLocomotionComponent() {
    this._node = null
  }
  Object.defineProperty(PlayerLocomotionComponent.prototype, "Node", {
    get: function () {
      return this._node
    },
    set: function (v) {
      this._node = v
    },
    enumerable: false,
    configurable: true,
  })
  Object.defineProperty(PlayerLocomotionComponent.prototype, "Position", {
    get: function () {
      return this.Node ? this.Node.Center : null
    },
    enumerable: false,
    configurable: true,
  })
  PlayerLocomotionComponent.prototype.Awake = function () {
    /* @todo */
  }
  PlayerLocomotionComponent.prototype.Update = function (deltaTime) {
    /* @todo */
  }
  return PlayerLocomotionComponent
})()
exports.PlayerLocomotionComponent = PlayerLocomotionComponent
