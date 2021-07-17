import { InAppBrowser } from '@ionic-native/in-app-browser'
import { Browser } from '@capacitor/browser'
export const OpenUrlInAppBrowser = (URL: string): void => {
  const browser = InAppBrowser.create(URL, '_self', {
    hardwareback: 'yes',
    hidenavigationbuttons: 'yes',
    hideurlbar: 'yes',
  })
  browser.close()
}
export const OpenUrlBrowser = (URL: string): void => {
  const openCapacitorSite = async () => {
    Browser.addListener('browserFinished', () => {})
    await Browser.open({ url: URL, presentationStyle: 'popover' })
  }
  openCapacitorSite()
}
