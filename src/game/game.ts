/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Entity } from "../utils"
import { Grid } from "../grid"
import { Player } from "../Player"
import { Boot } from "../boot"
import { Team } from "../team"
import { GameInputComponent } from "./components"

export class Game extends Entity {
  private _lastTimestamp = 0
  private _entities: Entity[] = []

  public get Entities(): Entity[] {
    return this._entities
  }

  public Awake(): void {
    this.AddComponent(new GameInputComponent(this))
    super.Awake()
    const grid = new Grid()
    this._entities.push(grid, new Player(Team.A, grid, 0))
    if (localStorage.getItem("isTwoPlayers") === "true") {
      this._entities.push(new Player(Team.B, grid, grid.Nodes.length - 1))
    }
    this._entities.push(
      new Boot(
        Team.B,
        grid,
        grid.Nodes.length - Math.floor(Math.random() * 63) + 1
      ),
      new Boot(
        Team.B,
        grid,
        grid.Nodes.length - Math.floor(Math.random() * 63) + 1
      )
    )

    for (const entity of this.Entities) {
      entity.Awake()
    }

    window.requestAnimationFrame(() => {
      this._lastTimestamp = Date.now()
      this.Update()
    })

    this.countdown()
    this.showPlayersNamesOnSidePanel()
  }

  countdown(): void {
    let seconds = document.getElementById("countdown")?.textContent
    const countdown = setInterval(() => {
      if (seconds && parseInt(seconds)) {
        seconds = (parseInt(seconds) - 1).toString()
        document.getElementById("countdown")!.textContent = seconds
      } else {
        clearInterval(countdown)
      }
      if (seconds == "0") {
        document.body.innerHTML = ""
      }
    }, 1000)
    if (seconds == "0") {
      document.body.innerHTML = ""
    }
  }

  showPlayersNamesOnSidePanel(): void {
    const player1name = document.getElementById("player1")
    const player2name = document.getElementById("player2")
    const player2div = document.querySelector("#player2-box")

    if (player1name) {
      player1name.textContent = localStorage.getItem("Player1Name")
    }
    if (localStorage.getItem("Player2Name") && player2name) {
      player2name.textContent = localStorage.getItem("Player2Name")
    } else {
      if (player2div && player2div.parentNode) {
        player2div.parentNode.removeChild(player2div)
      }
    }
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000
    super.Update(deltaTime)

    for (const entity of this.Entities) {
      entity.Update(deltaTime)
    }

    this._lastTimestamp = Date.now()
    window.requestAnimationFrame(() => this.Update())
  }
}
