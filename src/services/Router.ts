import MainPage from "../pages/mainPage/MainPage"
import { Game } from "../game"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mainPage = require("../pages/mainPage/main-page.html")

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
          this.appContainer.innerHTML = mainPage
          new MainPage().render()
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
    window.addEventListener("hashchange", (e) => {
      this.initPage()
      console.log(e)
    })
  }
}
