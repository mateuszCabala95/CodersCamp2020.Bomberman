import { Canvas, Vector2D } from "../utils"
import { Settings } from "../settings"

export class CanvasLayer {
  private static _background: Canvas
  private static _bombLayer: Canvas
  private static _foreground: Canvas
  private static _foreground2: Canvas

  private static InitCanvas(style: Partial<CSSStyleDeclaration>): Canvas {
    const size =
      (Settings.grid.nodeSize + Settings.grid.nodeOffset) *
        Settings.grid.dimension +
      Settings.grid.nodeOffset
    const canvas = new Canvas(new Vector2D(size, size))
    canvas.Awake()
    canvas.SetStyle(style)

    return canvas
  }

  public static get Background(): Canvas {
    if (!this._background) {
      this._background = this.InitCanvas({ zIndex: "0" })
    }

    return this._background
  }

  public static get BombLayer(): Canvas {
    if (!this._bombLayer) {
      this._bombLayer = this.InitCanvas({ zIndex: "1" })
    }

    return this._bombLayer
  }

  public static get Foreground(): Canvas {
    if (!this._foreground) {
      this._foreground = this.InitCanvas({ zIndex: "2" })
    }

    return this._foreground
  }

  public static get Foreground2(): Canvas {
    if (!this._foreground2) {
      this._foreground2 = this.InitCanvas({ zIndex: "3" })
    }

    return this._foreground2
  }
}
