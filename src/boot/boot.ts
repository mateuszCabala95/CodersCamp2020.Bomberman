import { Entity, Vector2D } from "../utils"
import { Team } from "../team"
import { Settings } from "../settings"
import { BootDrawComponent } from "./components/index"
import { BootLocomotionComponent } from "./components/index"
import { Grid } from "../grid"

export class Boot extends Entity {
  private readonly _locomotionComponent: BootLocomotionComponent
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

  constructor(public readonly Team: Team, grid: Grid, startNodeIdx: number) {
    super()

    this._locomotionComponent = new BootLocomotionComponent()
    this._grid = grid
    this._locomotionComponent.Node = grid.Nodes[startNodeIdx]
    this._currentNodeIdx = startNodeIdx
  }

  public Awake(): void {
    this.AddComponent(this._locomotionComponent)
    this.AddComponent(new BootDrawComponent(this))

    super.Awake()
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)
  }
}
