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
exports.Player = void 0
var utils_1 = require("../utils")
var team_1 = require("../team")
var bombs_1 = require("../bombs")
var settings_1 = require("../settings")
var team_2 = require("../team")
var Player = /** @class */ (function (_super) {
  __extends(Player, _super)
  function Player(Team, node) {
    var _this = _super.call(this) || this
    _this.Team = Team
    _this._bombs = []
    _this._locomotionComponent = new team_2.PlayerLocomotionComponent()
    _this._locomotionComponent.Node = node
    return _this
  }
  Object.defineProperty(Player.prototype, "Position", {
    get: function () {
      return this._locomotionComponent.Position
    },
    enumerable: false,
    configurable: true,
  })
  Player.prototype.Awake = function () {
    this.AddComponent(this._locomotionComponent)
    this.AddComponent(new team_2.PlayerDrawComponent(this))
    _super.prototype.Awake.call(this)
    // this.PrepareBombs()
  }
  Player.prototype.Update = function (deltaTime) {
    _super.prototype.Update.call(this, deltaTime)
    this._bombs.map(function (bombs) {
      return bombs.Update(deltaTime)
    })
  }
  Player.prototype.PreparePlayer = function () {
    var dimension = settings_1.Settings.grid.dimension
    var nodes = this._grid.Nodes
    var node =
      this.Team == team_1.Team.A ? nodes[dimension] : nodes[nodes.length - 1]
    this._locomotionComponent.Node = node
    this.Awake()
  }
  Player.prototype.PrepareBombs = function () {
    var numberOfBombs = settings_1.Settings.bombs.numberOfBombs
    for (var i = 0; i < numberOfBombs; i++) {
      var bomb = new bombs_1.Bombs(this)
      this._bombs.push(bomb)
      bomb.Awake()
    }
  }
  return Player
})(utils_1.Entity)
exports.Player = Player
