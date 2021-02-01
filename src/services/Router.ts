export default class Router {
  appContainer: Nullable<HTMLDivElement | undefined>

  initVariable = (): void => {
    this.appContainer = document.querySelector(
      "#app"
    ) as Nullable<HTMLDivElement>
  }

  initPage = (): void => {
    switch (window.location.hash) {
      case "/" || "": {
        if (this.appContainer) {
          this.appContainer.innerHTML = ""
        }
        break
      }

      case "/game": {
        if (this.appContainer) {
          this.appContainer.innerHTML = ""
        }
        break
      }

      case "/finish": {
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
