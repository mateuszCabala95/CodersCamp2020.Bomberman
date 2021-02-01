import { Game } from "../../game"
import { IComponent } from "../../../utils"

export class GameInputComponent implements IComponent {
  public Entity!: Game

  public Awake(): void {
    document.body.addEventListener("keydown", this.HandleKeyInput.bind(this))
  }

  private HandleKeyInput(e: KeyboardEvent): void {
    const locomotionKeys = [
      "ArrowUp",
      "ArrowDown",
      "ArrowRight",
      "ArrowLeft",
      "KeyW",
      "KeyS",
      "KeyA",
      "KeyD",
    ]
    if (!(locomotionKeys.indexOf(e.code) > -1)) {
      return
    }
  }

  public Update(deltaTime: number): void {
    // @todo
  }
}
