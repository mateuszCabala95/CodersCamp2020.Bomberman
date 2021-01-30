import "./index.scss"
import provider from "./services/Provider"
import ConsoleReporting from "./services/ErrorReporting/ConsoleReporting"
import AppResourceProvider from "./services/ResourceProvider";

const registerDependencyFunc = (): void => {
    provider.provide("errorReporting", new ConsoleReporting())
    provider.provide("resourceProvider", new AppResourceProvider())
}

const init = (): void => registerDependencyFunc()

export default init()
