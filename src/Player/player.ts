import { Entity, Vector2D } from "../utils"
import { Team } from "../team"
import { Bombs } from "../bombs"
import { Settings } from "../settings"
import { PlayerDrawComponent, PlayerLocomotionComponent } from "../team"
import { Grid } from "../grid"

export class Player extends Entity {
  private readonly _locomotionComponent: PlayerLocomotionComponent
  private readonly _grid: Grid
  private _currentNodeIdx: number

  public Move(x: number, y: number): void {
    const currentPos = this._currentNodeIdx
    const dim = Settings.grid.dimension
    const currX = currentPos % dim
    const currY = Math.floor(currentPos / dim)

    if (currY === 0 && y === -1) return
    if (currY === dim - 1 && y === 1) return
    if (currX === 0 && x === -1) return
    if (currX === dim - 1 && x === 1) return

    // validate if player can move there (walls) - TODO
    this._currentNodeIdx = currentPos + x + y * dim
    const nextNode = this._grid.Nodes[this._currentNodeIdx]
    this._locomotionComponent.Node = nextNode
  }

  public get Position(): Vector2D | null {
    return this._locomotionComponent.Position
  }

  private _bombs: Bombs[] = []

  constructor(public readonly Team: Team, grid: Grid, startNodeIdx: number) {
    super()

    this._locomotionComponent = new PlayerLocomotionComponent()
    this._grid = grid
    this._locomotionComponent.Node = grid.Nodes[startNodeIdx]
    this._currentNodeIdx = startNodeIdx
  }

  public Awake(): void {
    this.AddComponent(this._locomotionComponent)
    this.AddComponent(new PlayerDrawComponent(this))

    super.Awake()
    // this.PrepareBombs()
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)

    this._bombs.map((bombs) => bombs.Update(deltaTime))
  }

  private PreparePlayer(): void {
    const dimension = Settings.grid.dimension
    const nodes = this._grid.Nodes

    const node =
      this.Team == Team.A ? nodes[dimension] : nodes[nodes.length - 1]
    this._locomotionComponent.Node = node
    this.Awake()
  }

  private PrepareBombs(): void {
    const numberOfBombs = Settings.bombs.numberOfBombs

    for (let i = 0; i < numberOfBombs; i++) {
      const bomb = new Bombs(this)
      this._bombs.push(bomb)
      bomb.Awake()
    }
  }
}
