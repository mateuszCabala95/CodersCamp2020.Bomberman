import MainPage from "../pages/mainPage/MainPage"
import { Game } from "../game"
import mainPage from "../pages/mainPage/main-page.html"

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
      case "main": {
        if (this.appContainer) {
          this.appContainer.innerHTML = mainPage
          new MainPage().render()
        }
        break
      }

      case "game": {
        if (this.appContainer) {
          this.appContainer.innerHTML = ""
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
        window.location.href = "/#main"
        break
      }
    }
  }

  render = (): void => {
    this.initPage()
    this.initVariable()
    window.location.hash = "#"
    window.addEventListener("hashchange", () => {
      this.initPage()
    })
  }
}
