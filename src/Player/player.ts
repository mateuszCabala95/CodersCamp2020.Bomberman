import { Entity, Vector2D } from "../utils"
import { PlayerDrawComponent, PlayerLocomotionComponent, Team } from "../team"
import { Bomb } from "../Bomb"
import { Settings } from "../settings"
import { Grid } from "../grid"
import { BuildState } from "../node"

export class Player extends Entity {
  private readonly _locomotionComponent: PlayerLocomotionComponent
  private readonly _grid: Grid
  private _currentNodeIdx: number
  private _entities: Entity[] = []
  private _bomb: Bomb
  private _playerDrawComponent: PlayerDrawComponent
  private _isAlive = true

  public get Entities(): Entity[] {
    return this._entities
  }

  get IsAlive(): boolean {
    return this._isAlive
  }

  set IsAlive(value: boolean) {
    this._isAlive = value
  }

  public Move(x: number, y: number): void {
    const currentPos = this._currentNodeIdx
    const currentNode = this._grid.Nodes[currentPos]
    currentNode.BuildState = BuildState.none
    currentNode.Player = undefined
    const dim = Settings.grid.dimension
    const currX = currentPos % dim
    const currY = Math.floor(currentPos / dim)

    if (currY === 0 && y === -1) return
    if (currY === dim - 1 && y === 1) return
    if (currX === 0 && x === -1) return
    if (currX === dim - 1 && x === 1) return

    this._currentNodeIdx = currentPos + x + y * dim
    if (this._grid.Nodes[this._currentNodeIdx].BuildState !== BuildState.none) {
      this._currentNodeIdx = currentPos
    }

    const nextNode = this._grid.Nodes[this._currentNodeIdx]
    nextNode.BuildState = BuildState.player
    nextNode.Player = this
    this._locomotionComponent.Node = nextNode
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
