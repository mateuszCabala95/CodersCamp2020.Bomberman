import { IComponent, Vector2D } from "../../../utils"
import { Bomb } from "../../bomb"
import { Settings } from "../../../settings"
import { Grid } from "../../../grid"
import { BuildState, Node } from "../../../node"
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
        CanvasLayer.Foreground2.DrawExplosion(node.Center)
      })
      setTimeout(() => {
        explosionNodes.forEach((node) => {
          if (node.BuildState === BuildState.ground) {
            node.BuildState = BuildState.none
          }
          if (node.Player) {
            node.Player.IsAlive = false
          }
          if (node.Bot) {
            node.Bot.IsAlive = false
          }
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

    res.add(this._grid.Nodes[x + y * boardDim])

    for (let i = x; i >= Math.max(x - 2, 0); i--) {
      const currentNode = this._grid.Nodes[i + y * boardDim]
      if (currentNode.BuildState === BuildState.block) {
        break
      } else if (currentNode.BuildState === BuildState.ground) {
        res.add(currentNode)
        break
      } else {
        res.add(currentNode)
      }
    }

    for (let i = y; i >= Math.max(y - 2, 0); i--) {
      const currentNode = this._grid.Nodes[x + i * boardDim]
      if (currentNode.BuildState === BuildState.block) {
        break
      } else if (currentNode.BuildState === BuildState.ground) {
        res.add(currentNode)
        break
      } else {
        res.add(currentNode)
      }
    }

    for (let i = x; i <= Math.min(x + 2, boardDim - 1); i++) {
      const currentNode = this._grid.Nodes[i + y * boardDim]
      if (currentNode.BuildState === BuildState.block) {
        break
      } else if (currentNode.BuildState === BuildState.ground) {
        res.add(currentNode)
        break
      } else {
        res.add(currentNode)
      }
    }

    for (let i = y; i <= Math.min(y + 2, boardDim - 1); i++) {
      const currentNode = this._grid.Nodes[x + i * boardDim]
      if (currentNode.BuildState === BuildState.block) {
        break
      } else if (currentNode.BuildState === BuildState.ground) {
        res.add(currentNode)
        break
      } else {
        res.add(currentNode)
      }
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
