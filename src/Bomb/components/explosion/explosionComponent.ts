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
    const res: Node[] = []
    const boardDim = Settings.grid.dimension
    const x = nodeIdx % boardDim
    const y = Math.floor(nodeIdx / boardDim)
    for (let i = Math.max(x - 2, 0); i <= Math.min(x + 2, boardDim - 1); i++) {
      for (
        let j = Math.max(y - 2, 0);
        j <= Math.min(y + 2, boardDim - 1);
        j++
      ) {
        res.push(this._grid.Nodes[j * boardDim + i])
      }
    }
    return res
  }

  private Clear(startPosition: Vector2D): void {
    CanvasLayer.Foreground2.ClearRect(
      new Vector2D(
        startPosition.x - Settings.grid.nodeSize / 2,
        startPosition.y - Settings.grid.nodeSize / 2
      ),
      new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
    )
  }
}
