import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Browser } from "@capacitor/browser";
/**
 * 
 * @param URL 
 */
export const OpenUrlInAppBrowser = (URL: string): void => {
  const browser = InAppBrowser.create(URL, "_self", {
    hardwareback: "yes",
    hidenavigationbuttons: "yes",
    hideurlbar: "yes",
  });
  browser.close();
};

/**
 * 
 * @param URL 
 */
export const OpenUrlBrowser = (URL: string): void => {
  const openCapacitorSite = async () => {
    await Browser.open({ url: URL, presentationStyle: "popover" });
  };
  openCapacitorSite();
};
