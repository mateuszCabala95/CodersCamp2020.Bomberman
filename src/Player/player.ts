import { Entity, Vector2D } from "../utils"
import { Team } from "../team"
import { Bomb } from "../Bomb"
import { Settings } from "../settings"
import { PlayerDrawComponent, PlayerLocomotionComponent } from "../team"
import { Grid } from "../grid"

export class Player extends Entity {
  private readonly _locomotionComponent: PlayerLocomotionComponent
  private readonly _grid: Grid
  private _currentNodeIdx: number
  private _entities: Entity[] = []
  private _bomb: Bomb
  private _playerDrawComponent: PlayerDrawComponent

  public get Entities(): Entity[] {
    return this._entities
  }

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
    const blockX = currX + x
    const blockY = currY + y
    // without ground
    // if (blockX % 2 === 1 && blockY % 2 === 1 && this._currentNodeIdx > dim && this._currentNodeIdx < (dim * dim - dim)) {
    // with ground
    if (
      blockY % 2 === 1 &&
      blockX > 0 &&
      blockX < dim - 1 &&
      this._currentNodeIdx > dim &&
      this._currentNodeIdx < dim * dim - dim
    ) {
      this._currentNodeIdx = currentPos
    }
    const nextNode = this._grid.Nodes[this._currentNodeIdx]
    this._locomotionComponent.Node = nextNode
    // this._playerDrawComponent
  }

  public SetBomb(): void {
    if (!this._bomb.Node) {
      this._bomb.Node = this._locomotionComponent.Node
    }
  }

  public get Position(): Vector2D | null {
    return this._locomotionComponent.Position
  }

  constructor(public readonly Team: Team, grid: Grid, startNodeIdx: number) {
    super()

    this._locomotionComponent = new PlayerLocomotionComponent()
    this._grid = grid
    this._locomotionComponent.Node = grid.Nodes[startNodeIdx]
    this._currentNodeIdx = startNodeIdx
    this._playerDrawComponent = new PlayerDrawComponent(this)
    this._bomb = new Bomb(this, grid)
    this._entities.push(this._bomb)
  }

  public Awake(): void {
    this.AddComponent(this._locomotionComponent)
    this.AddComponent(this._playerDrawComponent)

    super.Awake()
    for (const entity of this.Entities) {
      entity.Awake()
    }
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)
    for (const entity of this.Entities) {
      entity.Update(deltaTime)
    }
  }
}
