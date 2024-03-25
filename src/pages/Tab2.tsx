import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonImg, IonIcon, IonText, IonItem, IonLabel } from '@ionic/react';
import { logoTwitter, logoFacebook, logoGithub } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
      <IonContent class='about_part'>
        <IonHeader>
          <IonTitle class='about_title'>About</IonTitle>
        </IonHeader>
          <IonItem>
            <IonImg class='about_mini_image1' src='src/pages/smoke_circle.png'></IonImg>
            <IonLabel>
              This website is a part of a project to estimate and predict
              hazardous gas particle concentrations across Montana. This project is focused on
              particulate matter under 2.5 micrometers in diameter (PM-2.5). Exposure to these 
              particles can have a severe impact on human health, even leading to cancer and premature 
              death. Although PM-2.5 is created in lots of ways, wildfires across Canada and the American 
              west are a major contributor.
              </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>There are only 20 ground-stations monitoring PM-2.5 in 
              Montana shown above (DEQ, 2022). The first part of this project involved correlating 
              ground-station measurements of PM-2.5 with satellite data to create a full coverage 
              concentration map. We used aerosol optical depth and several other climate variables 
              in our models. The random forest regression model outperformed simple and multiple 
              linear regression, so we utilized it on our Google Earth Engine app to generate the 
              daily estimates of PM-2.5 concentrations. We are in the process of writing a manuscript 
              for publication.
            </IonLabel>
            <IonImg class='about_mini_image2' src='src/pages/map.png'></IonImg>
          </IonItem> 
          <IonItem>
            <IonHeader class='about_subheader'>Moving Forward</IonHeader>
          </IonItem>
        <IonItem>
            <IonLabel class='about_text'>
              The next phase of the project is aimed at predicting PM-2.5 concentrations three 
              days in advance. Our goal is to provide Montanans with advanced notice of hazardous 
              gas in their area, allowing them to prepare to stay inside if the air quality is 
              bad. We will continue to provide updates on this website.
            </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
