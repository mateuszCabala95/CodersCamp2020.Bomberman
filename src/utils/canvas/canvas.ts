import { settings } from "cluster"
import { Settings } from "src/settings"
import { Team } from "src/team"
import { Vector2D, IAwake, Color } from "../../utils"
const img = new Image()
const block = new Image()

img.src = "https://svgshare.com/i/Thc.svg"
block.src = "https://svgshare.com/i/Tii.svg"
export class Canvas implements IAwake {
  private _elm!: HTMLCanvasElement
  private _ctx!: CanvasRenderingContext2D

  public get Element(): HTMLCanvasElement {
    return this._elm
  }

  public get Context(): CanvasRenderingContext2D {
    return this._ctx
  }

  constructor(public readonly Size: Vector2D) {}

  public Awake(): void {
    const canvas = document.createElement("canvas")
    canvas.setAttribute("width", `${this.Size.x}px`)
    canvas.setAttribute("height", `${this.Size.y}px`)

    document.body.appendChild(canvas)
    this._elm = canvas

    const ctx = this._elm.getContext("2d")
    if (!ctx) {
      throw new Error("Context identifier is not supported")
    }

    this._ctx = ctx
  }

  public FillRect(start: Vector2D, size: Vector2D, color: Color): void {
    this._ctx.beginPath()
    this._ctx.fillStyle = color.AsString()
    this._ctx.rect(start.x, start.y, size.x, size.y)
    this._ctx.fill()
  }

  public DrawPlayer(center: Vector2D, team: Team): void {
    console.log(center)
    this._ctx.beginPath()
    if (team == 0) {
      this._ctx.drawImage(img, center.x - 40, center.y - 40)
    } else {
      this._ctx.drawImage(block, center.x - 40, center.y - 40)
    }
    this._ctx.fill()
  }

  public FillBlock(): void {
    this._ctx.beginPath()
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i % 2 === 1 && j % 2 === 1) {
          this._ctx.drawImage(block, i * 100, j * 100)
        }
        //this._ctx.drawImage(block, 130, 240)
        // this._ctx.drawImage(block, 240, 460)
        //   this._ctx.drawImage(block, 350, 680)
      }
    }
    this._ctx.fill()
  }

  public ClearRect(start: Vector2D, size: Vector2D): void {
    this._ctx.clearRect(start.x, start.y, size.x, size.y)
  }

  public SetStyle(style: Partial<CSSStyleDeclaration>): void {
    for (const key in style) {
      if (!Object.hasOwnProperty.call(style, key)) {
        continue
      }

      if (!style[key]) {
        continue
      }

      this._elm.style[key] = style[key] as string
    }
  }

  public CalcLocalPointFrom(globalPoint: Vector2D): Vector2D | null {
    const canvasRect = this._elm.getBoundingClientRect()
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    const offset = {
      top: canvasRect.top + scrollTop,
      left: canvasRect.left + scrollLeft,
    }

    const x = globalPoint.x - offset.left
    const y = globalPoint.y - offset.top

    if (x < 0 || y < 0) {
      return null
    }

    if (
      x > offset.left + canvasRect.width ||
      y > offset.top + canvasRect.height
    ) {
      return null
    }

    return new Vector2D(x, y)
  }
}
