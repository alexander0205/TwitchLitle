import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, home, triangle,person } from 'ionicons/icons';
import Tab1 from '../pages/tabs/Tab1';
import Tab2 from '../pages/tabs/Tab2';
import Tab3 from '../pages/tabs/Tab3';
import AppUrlListener from './url.listener';
import Login from '../pages/auth/login';
import PrivateRoute from './private.route';

export default function Index() {

  return (
    <IonApp>
      <IonReactRouter>
        <AppUrlListener></AppUrlListener>

        <Switch>
          <Route path="/login" component={Login}>
          </Route>
          <PrivateRoute>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/tab1">
                  <Tab1 />
                </Route>
                <Route exact path="/tab2">
                  <Tab2 />
                </Route>
                <Route exact path="/">
                  <Redirect to="/tab1" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                  <IonIcon icon={person} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
             
              </IonTabBar>
            </IonTabs>
          </PrivateRoute>
        </Switch>
      </IonReactRouter>
    </IonApp>
  )
}
