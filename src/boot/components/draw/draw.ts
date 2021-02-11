import { IComponent, Vector2D } from "../../../utils"
import { CanvasLayer } from "../../../canvas-layer"
import { Boot } from "../../boot"
import { Settings } from "../../../settings"
// import { Team } from "../../../team"

export class BootDrawComponent implements IComponent {
  public Entity: Boot

  constructor(entity: Boot) {
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
    CanvasLayer.Foreground.DrawPlayer(this.Position, 1)
    CanvasLayer.Foreground2
      .FillBlock
      // new Vector2D(
      //   this.Position.x - Settings.grid.nodeSize,
      //   this.Position.y - Settings.grid.nodeSize
      // )
      ()
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
