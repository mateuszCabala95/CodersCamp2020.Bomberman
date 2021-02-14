import { IComponent, Vector2D } from "../../../utils"
import { Bomb } from "../../bomb"
import { Settings } from "../../../settings"
import { Grid } from "../../../grid"
import { Node } from "../../../node"
import { CanvasLayer } from "../../../canvas-layer"

export default class ExplosionComponent implements IComponent {
  public Entity: Bomb

  private _remainingTime: number

  public Awake(): void {
    return
  }

  public Update(deltaTime: number): void {
    if (this.Entity.Node) {
      this._remainingTime -= deltaTime
      if (this._remainingTime <= 0) {
        this.explosionEffect()
      }
    } else {
      this._remainingTime = Settings.bombs.duration / 1000
    }
  }

  constructor(bomb: Bomb, private readonly _grid: Grid) {
    this.Entity = bomb
    this._remainingTime = Settings.bombs.duration / 1000
  }

  public explosionEffect(): void {
    if (this.Entity.Node) {
      const currentNodeIdx = this._grid.Nodes.indexOf(this.Entity.Node)
      const explosionNodes = this.getNodesToExplode(currentNodeIdx)
      explosionNodes.forEach((node) => {
        CanvasLayer.Foreground2.DrawExplosion(
          node.Center,
          Settings.players.radius,
          Settings.players.colors.b
        )
      })
      setTimeout(() => {
        explosionNodes.forEach((node) => {
          this.Clear(node.Start)
        })
      }, 500)
      this.Entity.Node = null
    }
  }

  private getNodesToExplode(nodeIdx: number): Node[] {
    const res: Set<Node> = new Set()
    const boardDim = Settings.grid.dimension
    const x = nodeIdx % boardDim
    const y = Math.floor(nodeIdx / boardDim)

    for (let i = Math.max(x - 2, 0); i <= Math.min(x + 2, boardDim - 1); i++) {
      res.add(this._grid.Nodes[i + y * boardDim])
    }

    for (let i = Math.max(y - 2, 0); i <= Math.min(y + 2, boardDim - 1); i++) {
      res.add(this._grid.Nodes[x + i * boardDim])
    }

    return Array.from(res)
  }

  private Clear(startPosition: Vector2D): void {
    CanvasLayer.Foreground2.ClearRect(
      new Vector2D(startPosition.x, startPosition.y),
      new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
    )
  }
}
