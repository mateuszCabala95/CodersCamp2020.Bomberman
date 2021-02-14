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
    this._entities.push(
      grid,
      new Player(Team.A, grid, 0),
      new Player(Team.B, grid, grid.Nodes.length - 1),
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
    }, 1000)
  }

  showPlayersNamesOnSidePanel(): void {
    const player1name = document.getElementById("player1")
    const player2name = document.getElementById("player2")

    if (player1name) {
      player1name.textContent = localStorage.getItem("Player1Name")
    }
    if (player2name) {
      player2name.textContent = localStorage.getItem("Player2Name")
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
