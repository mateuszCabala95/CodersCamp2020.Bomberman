import provider from "../services/Provider"
import { ConsoleReporting } from "../services/ErrorReporting"
import AppResourceProvider from "../services/ResourceProvider";

const registerDependencyFunc = () => {
    provider.provide("errorReporting", new ConsoleReporting())
    provider.provide("resourceProvider", new AppResourceProvider())
}

export const App = () => {
    registerDependencyFunc()
}
