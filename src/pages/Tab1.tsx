import { IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonImg, IonIcon, 
  IonMenuToggle, IonMenu, IonContent } from '@ionic/react';
import { logoTwitter, logoGithub, closeCircleOutline, addCircleOutline,  } from 'ionicons/icons';
import './Tab1.css';
import MyMap from '../components/Map';
import MenuBar from '../components/MenuBar';

const Tab1: React.FC = () => {
  return (
    <>
    <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Air Quality Index Legend</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton><IonIcon icon={closeCircleOutline}></IonIcon></IonButton>
          </IonMenuToggle>
          <MenuBar />
        </IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Montana PM2.5 Map</IonTitle>
          <IonButtons slot="end">
            <IonButton href='https://twitter.com/pm25map_mt'><IonIcon icon={logoTwitter}></IonIcon></IonButton>
            <IonButton href='https://github.com/mt-pm-concentration-map'><IonIcon icon={logoGithub}></IonIcon></IonButton>
            <IonButton href='https://inbre.montana.edu/'>
              <IonImg src="https://inbre.montana.edu/images/inbre_logo_blue_shaddow.png" class="cus_logo"></IonImg>
            </IonButton>
          </IonButtons> 
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton><IonIcon icon={addCircleOutline}></IonIcon></IonButton>
            <MyMap />
          </IonMenuToggle>
      </IonContent>  
    </IonPage>
    </>
  );
};

export default Tab1;


        