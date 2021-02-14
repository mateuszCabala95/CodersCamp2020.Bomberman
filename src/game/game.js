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
exports.Game = void 0
var utils_1 = require("../utils")
var grid_1 = require("../grid")
var Player_1 = require("../Player")
var team_1 = require("../team")
var components_1 = require("./components")
var settings_1 = require("../settings")
var i = 0
var Game = /** @class */ (function (_super) {
  __extends(Game, _super)
  function Game() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this._lastTimestamp = 0
    _this._entities = []
    return _this
  }
  Object.defineProperty(Game.prototype, "Entities", {
    get: function () {
      return this._entities
    },
    enumerable: false,
    configurable: true,
  })
  Game.prototype.HandleKeyInput = function (e) {
    var _this = this
    this.AddComponent(new components_1.GameInputComponent())
    var grid = new grid_1.Grid()
    switch (e.code) {
      case "KeyA":
        console.log(e.code + " pressed")
        this._entities.length = this._entities.length - 2
        --i
        if (i < 0 || i > 63) {
          ++i
          break
        }
        this._entities.push(
          grid,
          new Player_1.Player(team_1.Team.A, grid.Nodes[i])
        )
        for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
          var entity = _a[_i]
          entity.Awake()
        }
        window.requestAnimationFrame(function () {
          _this._lastTimestamp = Date.now()
          _this.Update()
        })
        break
      case "KeyD":
        console.log(e.code + " pressed")
        this._entities.length = this._entities.length - 2
        ++i
        if (i < 0 || i > 63) {
          --i
          break
        }
        this._entities.push(
          grid,
          new Player_1.Player(team_1.Team.A, grid.Nodes[i])
        )
        for (var _b = 0, _c = this.Entities; _b < _c.length; _b++) {
          var entity = _c[_b]
          entity.Awake()
        }
        window.requestAnimationFrame(function () {
          _this._lastTimestamp = Date.now()
          _this.Update()
        })
        break
      case "KeyW":
        console.log(e.code + " pressed")
        this._entities.length = this._entities.length - 2
        i = i - settings_1.Settings.grid.dimension
        if (i < 0 || i > 63) {
          i = i + settings_1.Settings.grid.dimension
          break
        }
        this._entities.push(
          grid,
          new Player_1.Player(team_1.Team.A, grid.Nodes[i])
        )
        for (var _d = 0, _e = this.Entities; _d < _e.length; _d++) {
          var entity = _e[_d]
          entity.Awake()
        }
        window.requestAnimationFrame(function () {
          _this._lastTimestamp = Date.now()
          _this.Update()
        })
        break
      case "KeyS":
        console.log(e.code + " pressed")
        this._entities.length = this._entities.length - 2
        i = i + settings_1.Settings.grid.dimension
        if (i < 0 || i > 63) {
          i = i - settings_1.Settings.grid.dimension
          break
        }
        this._entities.push(
          grid,
          new Player_1.Player(team_1.Team.A, grid.Nodes[i])
        )
        for (var _f = 0, _g = this.Entities; _f < _g.length; _f++) {
          var entity = _g[_f]
          entity.Awake()
        }
        window.requestAnimationFrame(function () {
          _this._lastTimestamp = Date.now()
          _this.Update()
        })
        break
      case "Space":
        console.log(e.code + " pressed - Bomb")
        break
    }
  }
  Game.prototype.Awake = function () {
    var _this = this
    this.AddComponent(new components_1.GameInputComponent())
    _super.prototype.Awake.call(this)
    var grid = new grid_1.Grid()
    this._entities.push(
      grid,
      new Player_1.Player(team_1.Team.A, grid.Nodes[0])
      // new Player(Team.B, grid.Nodes[grid.Nodes.length - 1])
    )
    for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
      var entity = _a[_i]
      entity.Awake()
    }
    document.body.addEventListener("keydown", this.HandleKeyInput.bind(this))
    window.requestAnimationFrame(function () {
      _this._lastTimestamp = Date.now()
      _this.Update()
    })
  }
  Game.prototype.Update = function () {
    var _this = this
    var deltaTime = (Date.now() - this._lastTimestamp) / 1000
    _super.prototype.Update.call(this, deltaTime)
    for (var _i = 0, _a = this.Entities; _i < _a.length; _i++) {
      var entity = _a[_i]
      entity.Update(deltaTime)
    }
    this._lastTimestamp = Date.now()
    window.requestAnimationFrame(function () {
      return _this.Update()
    })
  }
  return Game
})(utils_1.Entity)
exports.Game = Game
