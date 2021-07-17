import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Tab1.css';
import { Browser } from '@capacitor/browser';
 import { InAppBrowser } from '@ionic-native/in-app-browser';
import { App } from '@capacitor/app';
const Tab1: React.FC = () => {
  const go = () => {
    const url = "https://io.ionic.starter/tab1"
const page = `https://id.twitch.tv/oauth2/authorize?client_id=0w32ep7bsjp1qx0p5h5xkwzu1rseq5&redirect_uri=${url}&response_type=code&scope=user_read`
//     const browser = InAppBrowser.create(page,'_self',{footer:"yes"});
// InAppBrowser.create(page, '_self', {
//   hardwareback: 'yes',
//   hidenavigationbuttons: 'yes',
//   hideurlbar: 'yes',
// });


// browser.close();

    const openCapacitorSite = async () => {
      Browser.addListener("browserFinished", () => {})
      await Browser.open({ url: page,presentationStyle:"popover"});
    };
    openCapacitorSite()
    
  }
  // App.addListener('appStateChange', ({ isActive }) => {
  //   console.log('App state changed. Is active?', isActive);
  // });
  
  // App.addListener('appUrlOpen', data => {
  //   console.log('App opened with URL:', data);
  // });
  
  // App.addListener('appRestoredResult', data => {
  //   console.log('Restored state:', data);
  // });
  
  const checkAppLaunchUrl = async () => {
    // const { url } = await App.getLaunchUrl();
  
    // alert('App opened with URL: ' + url);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>

            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={go}>{"Click"}</IonButton>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
