type ReportMsgType = string

class ErrorReporting {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    report(msg: ReportMsgType): void {
        throw new Error("Not implemented")
    }
}

export default ErrorReporting
