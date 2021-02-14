import { Entity, Vector2D } from "../utils"
import { Player } from "../Player"
import { BombLocomotionComponent } from "./components/locomotion"
import { BombDrawComponent } from "./components"
import { Grid } from "../grid"
import { Settings } from "../settings"

export class Bomb extends Entity {
  private readonly _locomotionComponent: BombLocomotionComponent
  private readonly _grid: Grid
  private _currentNodeIdx: number

  // constructor(public readonly Factory: Player) {
  //   super()
  // }

  // public putOnGrid() {
  //   const currentPos = this._currentNodeIdx
  // }

  public get Position(): Vector2D | null {
    return this._locomotionComponent.Position
  }

  constructor(
    public readonly Player: Player,
    grid: Grid,
    startNodeIdx: number,
    private readonly onBombExplosion: () => void
  ) {
    super()

    this._locomotionComponent = new BombLocomotionComponent()
    this._grid = grid
    this._locomotionComponent.Node = grid.Nodes[startNodeIdx]
    this._currentNodeIdx = startNodeIdx
  }

  public Awake(): void {
    this.AddComponent(this._locomotionComponent)
    this.AddComponent(new BombDrawComponent(this))

    setTimeout(() => this.onBombExplosion(), Settings.bombs.duration)

    super.Awake()
    // this.PrepareBombs()
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)
  }
}
