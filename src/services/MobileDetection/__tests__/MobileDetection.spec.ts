import MobileDetectionService from "../MobileDetection"

const mobileDetectionService = new MobileDetectionService()

describe("isMobile test", () => {
    it("Should output false since we're using computer browser", () => {
        const res : boolean = mobileDetectionService.isMobileDevice()
        expect(res).toBe(false)
    })

    it("Should output 'landspace' since we're using landscape-primary computer browser settings", () => {
        const res : string = mobileDetectionService.phoneOrientation()
        expect(res).toBe("landscape")
    })
})