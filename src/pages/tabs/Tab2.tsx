import React,{useEffect} from "react";
import { IonContent,IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Tab2.css';
import {getToken,logout}from "../../models/user.authentication"
const Tab2: React.FC = () => {

  useEffect(() => {
    const f =async ()=>{
    }
    f()
  },[])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={logout}>{"Logout"}</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
