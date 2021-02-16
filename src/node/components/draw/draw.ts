import { IComponent } from "../../../utils"
import { Node } from "../../node"
import { Settings } from "../../../settings"
import { CanvasLayer } from "../../../canvas-layer"
import { BuildState } from "../build-state"

export class NodeDrawComponent implements IComponent {
  get Entity(): Node {
    return this._Entity
  }

  set Entity(value: Node) {
    this._Entity = value
  }

  private _Entity!: Node

  public Awake(): void {
    this.Clear()
  }

  public Update(): void {
    this.Clear()
    this.Draw()
    this.DrawRect()
  }

  private Draw(): void {
    CanvasLayer.Background.FillRect(
      this._Entity.Start,
      this._Entity.Size,
      Settings.grid.color
    )
  }

  private DrawRect(): void {
    CanvasLayer.Foreground.FillRect(
      this._Entity.Start,
      this._Entity.Size,
      Settings.grid.color
    )
    switch (this.Entity.BuildState) {
      case BuildState.block:
        CanvasLayer.Foreground.DrawBlock(this.Entity.Center)
        break
      case BuildState.ground:
        CanvasLayer.Foreground.DrawGround(this.Entity.Center)
        break
      default:
    }
  }

  private Clear(): void {
    CanvasLayer.Background.ClearRect(this._Entity.Start, this._Entity.Size)
  }
}
