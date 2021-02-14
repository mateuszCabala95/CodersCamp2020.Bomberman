import { IComponent, Vector2D } from "../../../utils"
import { CanvasLayer } from "../../../canvas-layer"
import { Bomb } from "../../bomb"
import { Settings } from "../../../settings"

export class BombDrawComponent implements IComponent {
  public Entity: Bomb

  constructor(entity: Bomb) {
    this.Entity = entity
  }

  private get Position(): Vector2D {
    const position = this.Entity.Position
    if (!position) {
      throw new Error("Attempt to draw a bomb that has no Position")
    }

    return position
  }

  public Awake(): void {
    return
  }

  public Update(deltaTime: number): void {
    if (this.Entity.Node) {
      this.Clear()
      this.Draw()
    }
  }

  private Draw(): void {
    const colors = Settings.players.colors
    const color = colors.a

    CanvasLayer.BombLayer.FillBomb(
      this.Position,
      Settings.players.radius,
      color
    )
  }

  private Clear(): void {
    CanvasLayer.Foreground.ClearRect(
      new Vector2D(
        this.Position.x - Settings.grid.nodeSize / 2,
        this.Position.y - Settings.grid.nodeSize / 2
      ),
      new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
    )
  }
}
