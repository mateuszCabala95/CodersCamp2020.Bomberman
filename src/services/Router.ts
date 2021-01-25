export default class Router {
    appContainer: HTMLDivElement



    initVariable = () => {
        this.appContainer = document.querySelector("#app")
    }


    initPage = (e: HashChangeEvent): void => {
        switch (e.target.location.hash) {
            case("/" || "") : {
                this.appContainer.innerHTML = ""
                break
            }

            case("/game"): {
                this.appContainer.innerHTML = ""
                break
            }

            case("/finish") : {
                this.appContainer.innerHTML = ""
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
        window.addEventListener("hashchange", (e) => {
            this.initPage(e)
        })
    }

}
