import { Redirect, Route } from 'react-router-dom';
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
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { MusicContextProvider } from './context/MusicContext.jsx';
import AlbumScreen from './pages/AlbumScreen/AlbumScreen.jsx';
import PlayerScreen from './pages/Player/Player.jsx';
import HomePage from './pages/HomePage/HomePage';

const App: React.FC = () => (
  <IonApp>
    <MusicContextProvider>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/player">
            <PlayerScreen />
          </Route>
          <Route exact path="/playlist">
            <AlbumScreen />
          </Route>
          <Route path="/homePage">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/homePage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab-ṕlaylist" href="/homePage">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab-player" href="/playlist">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/player">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </MusicContextProvider>
  </IonApp>
);

export default App;
