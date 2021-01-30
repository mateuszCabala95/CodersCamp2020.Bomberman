export default class Router {
    appContainer: Nullable<HTMLDivElement | undefined>



    initVariable = () => {
        this.appContainer = document.querySelector("#app") as Nullable<HTMLDivElement>
    }


    initPage = (e: any): void => {
        switch (e.target?.location.hash) {
            case("/" || "") : {
                if(this.appContainer) {
                    this.appContainer.innerHTML = ""
                }
                break
            }

            case("/game"): {
                if(this.appContainer) {
                    this.appContainer.innerHTML = ""
                }
                break
            }

            case("/finish") : {
                if(this.appContainer) {
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
        window.addEventListener("hashchange", (e) => {
            this.initPage(e)
        })
    }

}
