import { IComponent, Vector2D } from "../../../utils"
import { CanvasLayer } from "../../../canvas-layer"
import { Player } from "../../player"
import { Settings } from "../../../settings"

export class PlayerDrawComponent implements IComponent {
  public Entity: Player

  constructor(entity: Player) {
    this.Entity = entity
  }

  private get Position(): Vector2D {
    const position = this.Entity.Position
    if (!position) {
      throw new Error("Attempt to draw a player that has no Position")
    }

    return position
  }

  public Awake(): void {
    this.Clear()
  }

  public Update(): void {
    this.Clear()
    this.Draw()
  }

  private Draw(): void {
    CanvasLayer.Foreground.DrawPlayer(this.Position, this.Entity.Team)
    CanvasLayer.Foreground2.FillBlock()
    CanvasLayer.Foreground2.FillGround()
  }

  public Clear(): void {
    CanvasLayer.Foreground2.ClearRect(
      new Vector2D(
        this.Position.x - Settings.grid.nodeSize / 2,
        this.Position.y - Settings.grid.nodeSize / 2
      ),
      new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
    )
  }
}
