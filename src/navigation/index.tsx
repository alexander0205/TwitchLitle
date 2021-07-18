import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { person } from "ionicons/icons";

import AppUrlListener from "./url.listener";
import Login from "../pages/auth/login";
import Profile from "../pages/tabs/profile";

import PrivateRoute from "./private.route";

export default function Index() {
  return (
    <IonApp>
      <IonReactRouter>
        <AppUrlListener></AppUrlListener>

        <Switch>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/tab1">
                  <Profile />
                </Route>
                <Route exact path="/">
                  <Redirect to="/tab1" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1s">
                  <IonIcon icon={person} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </PrivateRoute>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
}
