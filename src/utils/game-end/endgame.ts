import { Player } from "../../Player"
import { Bot } from "../../bot"
import { Game } from "../../game"
import { IUpdate } from "../lifecycle"

export default class Endgame implements IUpdate {
  private game: Game
  private _endOfGame = false

  get EndOfGame(): boolean {
    return this._endOfGame
  }

  constructor(game: Game) {
    this.game = game
  }

  Update(): void {
    const players = this.game.Entities.filter(
      (entity) => entity instanceof Player && (entity as Player).IsAlive
    )
    const bots = this.game.Entities.filter(
      (entity) => entity instanceof Bot && (entity as Bot).IsAlive
    )

    if ((players.length === 1 && bots.length === 0) || players.length === 0) {
      this._endOfGame = true
    }
  }
}
