import { Entity, Vector2D } from "../utils"
import { Team } from "../team"
import { Bombs } from "../bombs"
import { Settings } from "../settings"
import { PlayerDrawComponent, PlayerLocomotionComponent } from "../team"
import { Node } from "../node"
import { Grid } from "../grid"

export class Player extends Entity {
  private readonly _locomotionComponent: PlayerLocomotionComponent
  private readonly _grid!: Grid

  public get Position(): Vector2D | null {
    return this._locomotionComponent.Position
  }

  private _bombs: Bombs[] = []

  constructor(public readonly Team: Team, node: Node) {
    super()

    this._locomotionComponent = new PlayerLocomotionComponent()
    this._locomotionComponent.Node = node
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
