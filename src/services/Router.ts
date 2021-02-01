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
    console.log(hash)

    switch (hash) {
      case "/" || "": {
        if (this.appContainer) {
          this.appContainer.innerHTML = ""
        }
        break
      }

      case "game": {
        console.log(12)
        if (this.appContainer) {
          new Game().Awake()
          console.log(this.appContainer)
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
        window.location.pathname = "/"
        window.location.reload()
        break
      }
    }
  }

  render = (): void => {
    this.initVariable()
    window.addEventListener("hashchange", () => {
      this.initPage()
    })
  }
}
