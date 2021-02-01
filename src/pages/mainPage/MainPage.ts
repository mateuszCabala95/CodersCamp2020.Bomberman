import "../mainPage/main-page.scss"
import Typed from "typed.js"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mainPage = require("./main-page.html")

export default class MainPage {

  player1Nickname = ""
  player2Nickname = ""
  private is2Players = false
  private player1Input: Nullable<HTMLInputElement> | undefined
  private player2Input: Nullable<HTMLInputElement> | undefined
  private is2PlayersCheckbox: Nullable<HTMLInputElement> | undefined
  private playersForm: Nullable<HTMLFormElement> | undefined
  descriptions: string[] = ["- Brick walls -", "- Collect bonuses -", " - Explode your enemies -"]
  typedOptions = {
    strings: [...this.descriptions],
    typeSpeed: 40,
    loop: true,
    smartBackspace: true,
    backSpeed: 40
  }

  private initVariables = (): void => {
    this.player1Input = document.querySelector("#player1") as HTMLInputElement
    this.player2Input = document.querySelector("#player2") as HTMLInputElement
    this.is2PlayersCheckbox = document.querySelector("#numberOfPlayers") as HTMLInputElement
    this.playersForm = document.querySelector(".player__form") as HTMLFormElement
  }

  private initEventListeners = (): void => {
    this.checkIs2Players()
    this.getPlayer1Name()
    this.getPlayer2Name()
    this.sendForm()
  }

  private getPlayer1Name = (): void => {
    this.player1Input?.addEventListener("keyup", (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.player1Nickname = e.target.value
    })
  }

  private getPlayer2Name = (): void => {
    this.player2Input?.addEventListener("keyup", (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.player2Nickname = e.target.value
    })

  }

  private checkIs2Players = (): void => {
    this.is2PlayersCheckbox!.addEventListener("input", (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.is2Players = e.target.checked
      this.is2Players ? this.player2Input!.classList.add("player__name--show") : this.player2Input!.classList.remove("player__name--show")
    })
  }

  private sendForm = (): void => {
    this.playersForm?.addEventListener("submit", (e) => {
      e.preventDefault()
      localStorage.setItem("Player1Name", this.player1Nickname)
      if (this.is2Players) {
        localStorage.setItem("Player2Name", this.player2Nickname)
        localStorage.setItem("TwoPlayers", String(this.is2Players))
      }
      window.location.hash = "game"
    })
  }

  render = (): void => {
    const app: Nullable<HTMLDivElement> = document.querySelector("#app") as HTMLDivElement
    app.innerHTML = mainPage
    this.initVariables()
    this.initEventListeners()
    const typed = new Typed("#description", this.typedOptions)
  }

}
