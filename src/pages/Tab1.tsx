import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonImg, IonIcon } from '@ionic/react';
import { logoTwitter, logoFacebook, logoGithub } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Montana PM2.5 Map</IonTitle>
          <IonButtons slot="end">
            <IonButton><IonIcon icon={logoTwitter}></IonIcon></IonButton>
            <IonButton><IonIcon icon={logoFacebook}></IonIcon></IonButton>
            <IonButton><IonIcon icon={logoGithub}></IonIcon></IonButton>
            <IonButton>
              <IonImg src="https://inbre.montana.edu/images/inbre_logo_blue_shaddow.png" class="cus_logo"></IonImg>
            </IonButton>
          </IonButtons> 
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
