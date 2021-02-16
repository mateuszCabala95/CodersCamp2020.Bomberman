import { IComponent, Vector2D } from "../../../utils"
import { CanvasLayer } from "../../../canvas-layer"
import { Bot } from "../../bot"
import { Settings } from "../../../settings"

export class BotDrawComponent implements IComponent {
  public Entity: Bot

  constructor(entity: Bot) {
    this.Entity = entity
  }

  private get Position(): Vector2D {
    const position = this.Entity.Position
    if (!position) {
      throw new Error("Attempt to draw a bot that has no Position")
    }

    return position
  }

  public Awake(): void {
    this.Clear()
  }

  public Update(): void {
    this.Clear()
    if (this.Entity.IsAlive) {
      this.Draw()
    }
  }

  private Draw(): void {
    CanvasLayer.Foreground.DrawPlayerBot(this.Position)
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
