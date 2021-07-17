import React, { useEffect, useState } from "react";
import {
  IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonContent, IonButtons, IonLoading, IonToast, IonIcon, IonChip, IonLabel
} from '@ionic/react';

import ExploreContainer from '../../components/ExploreContainer';
import './Tab2.css';
import { logout, getUserData } from "../../models/user.authentication"
const Tab2: React.FC = () => {
  const [userData, setUserData] = useState({
    profile_image_url: "",
    display_name: "",
    email: "email"

  });

  const [showLoading, setShowLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, showToast] = useState(false);


  useEffect(() => {
    const loadUserData = async () => {
      const result = await getUserData()
      if (result.valid) {
        const { profile_image_url, display_name, email } = result.data.data[0]
        setUserData({ profile_image_url, display_name, email })

      } else {
        showToast(true)
        setError(result.message)
        console.error("Erro login twitch", result)
      }
      console.log(result)
      setShowLoading(false)
    }
    loadUserData()

  }, [])
  return (
    <IonPage>
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
                <h6 className="ranking">Current ranking: <IonChip>
                  <IonLabel>2</IonLabel>
                </IonChip>
                </h6>
              </div>
              <IonButton expand="full" color="primary" onClick={logout}>{"Logout"}</IonButton>

            </div>
          </div>
        </IonContent>
       
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
