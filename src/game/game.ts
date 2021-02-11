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
        grid.Nodes.length - Math.floor(Math.random() * 56) + 1
      )
    )

    for (const entity of this.Entities) {
      entity.Awake()
    }

    window.requestAnimationFrame(() => {
      this._lastTimestamp = Date.now()
      this.Update()
    })
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
