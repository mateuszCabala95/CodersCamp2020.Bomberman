import { Team } from "src/team"
import { Vector2D, IAwake, Color } from "../../utils"
const player1 = new Image()
const player2 = new Image()
const block = new Image()
const bot = new Image()
const ground = new Image()

player1.src = "https://svgshare.com/i/Thc.svg"
player2.src = "https://svgshare.com/i/Twu.svg"
block.src = "https://svgshare.com/i/Tii.svg"
ground.src = "https://svgshare.com/i/Tx8.svg"
bot.src = "https://svgshare.com/i/TxT.svg"

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
    this._ctx.beginPath()
    if (team == 0) {
      this._ctx.drawImage(player1, center.x - 40, center.y - 40)
    } else {
      this._ctx.drawImage(player2, center.x - 40, center.y - 40)
    }
    this._ctx.fill()
  }

  public DrawPlayerBot(center: Vector2D): void {
    this._ctx.beginPath()
    this._ctx.drawImage(bot, center.x - 40, center.y - 40)
    this._ctx.fill()
  }

  public FillBlock(): void {
    this._ctx.beginPath()
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (i % 2 === 1 && j % 2 === 1) {
          this._ctx.drawImage(block, i * 110 + 20, j * 110 + 20)
        }
      }
    }
    this._ctx.fill()
  }

  public FillGround(): void {
    this._ctx.beginPath()
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (i % 2 === 0 && j % 2 === 1 && i > 0 && i < 8) {
          this._ctx.drawImage(ground, i * 110 + 20, j * 110 + 20)
        }
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
