import MainPage from "../pages/mainPage/MainPage"
import { Game } from "../game"

export default class Router {
  appContainer: Nullable<HTMLDivElement | undefined>

  initVariable = (): void => {
    this.appContainer = document.querySelector(
      "#app"
    ) as Nullable<HTMLDivElement>
  }

  initPage = (): void => {
    const hash = window.location.hash.split("#")[1]

    switch (hash) {
      case "/" || "": {
        if (this.appContainer) {
          this.appContainer.innerHTML = ""
          new MainPage.render()
        }
        break
      }

      case "game": {
        if (this.appContainer) {
          new Game().Awake()
        }
        break
      }
      case "finish": {
        if (this.appContainer) {
          this.appContainer.innerHTML = ""
        }
        break
      }
      default: {
        window.location.hash = ""
        window.location.reload()
        break
      }
    }
  }

  render = (): void => {
    this.initVariable()
    new MainPage().render()
    window.addEventListener("hashchange", () => {
      this.initPage()
    })

  }
}
