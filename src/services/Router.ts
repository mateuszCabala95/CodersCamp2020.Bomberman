import MainPage from "../pages/mainPage/MainPage"

export default class Router {
  appContainer: Nullable<HTMLDivElement | undefined>

  initVariable = (): void => {
    this.appContainer = document.querySelector(
      "#app"
    ) as Nullable<HTMLDivElement>
  }

  initPage = (): void => {
    switch (window.location.hash) {
      case "" : {
        new MainPage().render()
        break
      }

      case "#game": {
        if (this.appContainer) {
          this.appContainer.innerHTML = "work game"
        }
        break
      }

      case "#finish": {
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
