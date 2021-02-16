import { Entity, Vector2D } from "../utils"
import { BuildState, NodeDrawComponent } from "./components"
import { Player } from "../Player"
import { Bot } from "../bot"

export class Node extends Entity {
  private _buildState: BuildState
  private _player: Player | undefined = undefined
  private _bot: Bot | undefined = undefined

  public get Size(): Vector2D {
    return new Vector2D(this.End.x - this.Start.x, this.End.y - this.Start.y)
  }

  public get Center(): Vector2D {
    return new Vector2D(
      this.Start.x + this.Size.x / 2,
      this.Start.y + this.Size.y / 2
    )
  }

  get Bot(): Bot | undefined {
    return this._bot
  }

  set Bot(value: Bot | undefined) {
    this._bot = value
  }

  get Player(): Player | undefined {
    return this._player
  }

  set Player(value: Player | undefined) {
    this._player = value
  }

  public get BuildState(): BuildState {
    return this._buildState
  }

  public set BuildState(value: BuildState) {
    this._buildState = value
  }

  constructor(
    public readonly Start: Vector2D,
    public readonly End: Vector2D,
    public readonly Index: Vector2D,
    public Brick: boolean
  ) {
    super()
    this._buildState = buildState
  }

  public Awake(): void {
    this.AddComponent(new NodeDrawComponent())

    super.Awake()
  }
}
