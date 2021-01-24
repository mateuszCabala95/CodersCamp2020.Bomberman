import { Entity } from "../utils"
import { Grid } from "../grid"
import { Player } from "../Player"
import { Team } from "../team"

export class Game extends Entity {
  private _lastTimestamp = 0

  private _entities: Entity[] = []

  public get Entities(): Entity[] {
    return this._entities
  }

  public Awake(): void {
    super.Awake()
    const grid = new Grid()
    this._entities.push(
      grid,
      new Player(Team.A, grid.Nodes[0]),
      new Player(Team.B, grid.Nodes[grid.Nodes.length - 1])
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
