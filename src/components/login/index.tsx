import React, { FC } from 'react'
import { IonButton, IonContent, IonText, IonLoading, IonToast } from '@ionic/react'

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
        <div>
            {code ? (
                <h3>
                    The <code>name</code> in the query string is &quot;{code}
                    &quot;
                </h3>
            ) : (
                <h3>There is no name in the query string</h3>
            )}
        </div>
        <IonText color="secondary">
            <h1>H1: The quick brown fox jumps over the lazy dog</h1>
        </IonText>
        <IonButton onClick={authentication} expand="full">
            Login With Twitch
        </IonButton>
    </IonContent>
    )
}

export default Index
