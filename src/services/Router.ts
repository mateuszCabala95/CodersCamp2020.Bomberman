export default class Router {
    path: Location
    appContainer: HTMLDivElement

    constructor() {
        this.appContainer = document.querySelector("#app")
        this.path = window.location
        this.render()
    }


    initPage = (): void => {
        switch (this.path.hash) {
            //main page
            case("/" || "") : {
                //load main page
                this.appContainer.innerHTML = ""
                break
            }

            //game window
            case("/game"): {
                this.appContainer.innerHTML = ""
                break
            }

            //table with results
            case("/finish") : {
                this.appContainer.innerHTML = ""
                break
            }
            // in case wrong URL should redirect to main page
            default: {
                window.location.pathname = "/"
                window.location.reload()
                break
            }

        }
    }

    render = (): void => {
        window.addEventListener("hashchange", () => {
            this.initPage()
        })
    }

}
