// eslint-disable-next-line
// @ts-nocheck
import MobileDetectionService from "../MobileDetection"

const mobileDetectionService = new MobileDetectionService()

describe("isMobile test", () => {
  it("Should output nothing since we're using computer browser", () => {
    const res: boolean = mobileDetectionService.isMobileDevice()
    expect(res).toBe("")
  })

  it("Should return 'landscapse' since we're passing default 'landscape-primary' value", () => {
    const type = "landscape-primary"
    window.screen.orientation = { type }
    const res: string = mobileDetectionService.phoneOrientation()
    expect(res).toBe("landscape")
  })

  it("Should return 'portrait' since we're passsing 'portrait' value", () => {
    const type = "portrait"
    window.screen.orientation = { type }
    const res: string = mobileDetectionService.phoneOrientation()
    expect(res).toBe("portrait")
  })
})
