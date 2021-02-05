import { Game } from "../../game"
import { IComponent } from "../../../utils"
import { Player } from "../../../Player"

export class GameInputComponent implements IComponent {
  public Entity: Game

  constructor(game: Game) {
    this.Entity = game
  }

  public Awake(): void {
    document.body.addEventListener("keydown", this.HandleKeyInput.bind(this))
  }

  private HandleKeyInput(e: KeyboardEvent): void {
    const locomotionKeys: Map<string, [number, number]> = new Map([
      ["ArrowUp", [0, -1]],
      ["ArrowDown", [0, 1]],
      ["ArrowRight", [1, 0]],
      ["ArrowLeft", [-1, 0]],
      ["KeyW", [0, -1]],
      ["KeyS", [0, 1]],
      ["KeyD", [1, 0]],
      ["KeyA", [-1, 0]],
    ])

    if (!locomotionKeys.has(e.code)) {
      return
    }

    const playerEntities = this.Entity.Entities.filter(
      (x) => x instanceof Player
    ) as Player[]
    const [x, y] = locomotionKeys.get(e.code)!

    if (playerEntities[1]) {
      const playerBKeys = ["KeyW", "KeyS", "KeyD", "KeyA"]

      if (playerBKeys.includes(e.code)) {
        playerEntities[1].Move(x, y)
      } else {
        playerEntities[0].Move(x, y)
      }
    } else {
      playerEntities[0].Move(x, y)
    }

    window.requestAnimationFrame(() => {
      this.Entity.Update()
    })
  }

  public Update(deltaTime: number): void {
    // @todo
  }
}
