import React, { FC } from 'react'
import {
    IonTitle, IonToolbar, IonCardTitle, IonImg, IonCardContent, IonCardHeader, IonCard, IonListHeader, IonIcon, IonLabel, IonItem, IonList, IonButton, IonContent, IonText, IonLoading, IonToast,
    IonHeader, IonCardSubtitle
} from '@ionic/react'

interface IndexLogin {
    authentication: any,
    code: string | any,
    showLoading: boolean,
    setShowLoading: any
    toast: boolean,
    showToast: any,
    error: string | any,
}
const Index: FC<IndexLogin> = ({ authentication, code, showLoading, setShowLoading, toast, showToast, error }) => {
    return (<IonContent>
        <IonToast
            isOpen={toast}
            color="danger"
            onDidDismiss={() => showToast(false)}
            message={error}
            duration={5000}
        />
        <IonLoading
            cssClass='my-custom-class'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Please wait...'}
            duration={5000}
        />
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                   Twitch Litle
                </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonCard class="welcome-card">
                <IonImg src="/assets/shapes.svg"></IonImg>
                <IonCardHeader>
                    <IonCardSubtitle>Gazoom Movile Test</IonCardSubtitle>
                    <IonCardTitle>Welcome to TwitchLitle</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <p>
                    This a test mobile app for Gazoom developed by Alexander Ferreras, the purpose of this app probes my skills in developing applications, in this section "login flow using twitch authentication flow manually." 
                    </p>
                    <IonButton onClick={authentication} margin-top >Login</IonButton>
                </IonCardContent>
            </IonCard>
           
            <IonList lines="none">
                <IonListHeader>
                    <IonLabel>Resources</IonLabel>
                </IonListHeader>
                <IonItem href="https://www.linkedin.com/in/alexanderferreras/">
                    <IonIcon slot="start" color="medium" name="book"></IonIcon>
                    <IonLabel>My linkedin</IonLabel>
                </IonItem>
                <IonItem href="https://github.com/alexander0205/TwitchLitle">
                    <IonIcon slot="start" color="medium" name="build"></IonIcon>
                    <IonLabel>Github Code</IonLabel>
                </IonItem>
                <IonItem href="https://github.com/alexander0205">
                    <IonIcon slot="start" color="medium" name="grid"></IonIcon>
                    <IonLabel>My Github</IonLabel>
                </IonItem>
             
            </IonList>
        </IonContent>
        </IonContent>
        )
}

        export default Index
