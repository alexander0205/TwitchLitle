import React from "react";
import {
    IonHeader, IonPage, IonTitle, IonToolbar,
    IonButton, IonContent, IonLoading, IonToast, IonChip, IonLabel
} from '@ionic/react';

interface IProfile {
    userData: any,
    logout: any,
    showLoading: boolean,
    setShowLoading: any
    toast: boolean,
    showToast: any,
    error: string | any,
}

const Profile: React.FC<IProfile |any> = ({ toast, showToast, error, showLoading, setShowLoading, userData, logout }) => {
    return ( <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>User Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <IonToast
                    isOpen={toast}
                    color="danger"
                    onDidDismiss={() => showToast(false)}
                    message={error}
                    duration={5000}
                />

                <IonLoading
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Please wait load user data...'}

                />

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>


                <IonContent slot="fixed" >
                    <div className="card">
                        <div className="header">
                            <div className="avatar">
                                <img src={userData.profile_image_url} alt="" />
                                <br></br>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="user-meta ion-text-center">
                                <h3 className="playername">{userData.display_name}</h3>
                                <h5 className="country">{userData.email}</h5>
                               
                            </div>
                            <IonButton expand="full" color="primary" onClick={logout}>{"Logout"}</IonButton>

                        </div>
                    </div>
                </IonContent>

            </IonContent>
        </IonPage>
    );
};

export default Profile;
