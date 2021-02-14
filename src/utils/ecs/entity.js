"use strict"
exports.__esModule = true
exports.Entity = void 0
var Entity = /** @class */ (function () {
  function Entity() {
    this._components = []
  }
  Object.defineProperty(Entity.prototype, "Components", {
    get: function () {
      return this._components
    },
    enumerable: false,
    configurable: true,
  })
  Entity.prototype.AddComponent = function (component) {
    this._components.push(component)
    component.Entity = this
  }
  Entity.prototype.GetComponent = function (constr) {
    for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
      var component = _a[_i]
      if (component instanceof constr) {
        return component
      }
    }
    throw new Error(
      "Component " +
        constr.name +
        " not found on Entity " +
        this.constructor.name
    )
  }
  Entity.prototype.RemoveComponent = function (constr) {
    var toRemove
    var index
    for (var i = 0; i < this._components.length; i++) {
      var component = this._components[i]
      if (component instanceof constr) {
        toRemove = component
        index = i
        break
      }
    }
    if (toRemove && index) {
      toRemove.Entity = null
      this._components.splice(index, 1)
    }
  }
  Entity.prototype.HasComponent = function (constr) {
    for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
      var component = _a[_i]
      if (component instanceof constr) {
        return true
      }
    }
    return false
  }
  Entity.prototype.Awake = function () {
    for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
      var component = _a[_i]
      component.Awake()
    }
  }
  Entity.prototype.Update = function (deltaTime) {
    for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
      var component = _a[_i]
      component.Update(deltaTime)
    }
  }
  return Entity
})()
exports.Entity = Entity
