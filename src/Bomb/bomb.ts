import { Entity, Vector2D } from "../utils"
import { Player } from "../Player"
import { BombLocomotionComponent } from "./components/locomotion"
import { BombDrawComponent } from "./components"
import ExplosionComponent from "./components/explosion/explosionComponent"
import { Node } from "../node"
import { Grid } from "../grid"

export class Bomb extends Entity {
  private readonly _locomotionComponent: BombLocomotionComponent
  private _bombExplosionComponent: ExplosionComponent

  public get Position(): Vector2D | null {
    return this._locomotionComponent.Position
  }

  public get Node(): Node | null {
    return this._locomotionComponent.Node
  }

  public set Node(node: Node | null) {
    this._locomotionComponent.Node = node
  }

  constructor(private readonly Player: Player, grid: Grid) {
    super()

    this._locomotionComponent = new BombLocomotionComponent(this)
    this._bombExplosionComponent = new ExplosionComponent(this, grid)
  }

  public Awake(): void {
    this.AddComponent(this._locomotionComponent)
    this.AddComponent(new BombDrawComponent(this))
    this.AddComponent(this._bombExplosionComponent)

    super.Awake()
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)
  }
}
