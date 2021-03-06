import { Entity, Vector2D } from "../utils"
import { BuildState, Node } from "../node"
import { Settings } from "../settings"

export class Grid extends Entity {
  private _nodes: Node[] = []

  constructor() {
    super()
    this.InitNodes()
  }

  public get Nodes(): Node[] {
    return this._nodes
  }

  public Awake(): void {
    super.Awake()

    for (const node of this._nodes) {
      node.Awake()
    }
  }

  public Update(deltaTime: number): void {
    super.Update(deltaTime)

    for (const node of this._nodes) {
      node.Update(deltaTime)
    }
  }

  private InitNodes(): void {
    const size = Settings.grid.nodeSize
    const offset = Settings.grid.nodeOffset
    for (let y = 0; y < Settings.grid.dimension; y++) {
      for (let x = 0; x < Settings.grid.dimension; x++) {
        const start = new Vector2D(
          x * (size + offset) + offset,
          y * (size + offset) + offset
        )

        const end = new Vector2D(start.x + size, start.y + size)
        let node: Node
        const index = new Vector2D(x, y)
        if (y % 2 === 1 && x % 2 === 1 && x > 0 && x < 8) {
          node = new Node(start, end, index, BuildState.block)
        } else if (y % 2 === 1 && x % 2 === 0 && x > 0 && x < 8) {
          node = new Node(start, end, index, BuildState.ground)
        } else {
          node = new Node(start, end, index, BuildState.none)
        }
        this._nodes.push(node)
      }
    }
  }
}
