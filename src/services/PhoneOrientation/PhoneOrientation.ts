import provider from "../Provider"
import MobileDetectionService from "../MobileDetection"

export default class PhoneOrientationService {
  mobile = provider.get<MobileDetectionService>("mobileDetection")

  forceLandscape = (): void => {
    this.mobile.isMobileDevice()
      ? screen.orientation.lock("landscape-primary")
      : screen.orientation.lock("any")
  }
}
