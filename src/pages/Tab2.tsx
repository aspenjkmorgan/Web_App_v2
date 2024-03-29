import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonImg, IonIcon, IonText, IonItem, IonLabel } from '@ionic/react';
import { logoTwitter, logoGithub } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
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
      <IonContent class='about_part'>
        <IonHeader>
          <IonTitle class='about_title'>About</IonTitle>
        </IonHeader>
          <IonItem><IonImg class='about_mini_image' src='https://images.unsplash.com/photo-1510267519236-48581949f65a?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></IonImg></IonItem>
          <IonItem>
            <IonLabel class='about_text'>
              This website is a part of a project to estimate and predict
              hazardous gas particle concentrations across Montana. This project is focused on
              particulate matter under 2.5 micrometers in diameter (PM-2.5). Exposure to these 
              particles can have a severe impact on human health, even leading to cancer and premature 
              death. Although PM-2.5 is created in lots of ways, wildfires across Canada and the American 
              west are a major contributor.
              </IonLabel>
          </IonItem>
          <IonItem><IonImg class='about_mini_image' src='https://www.forwardme.de/wp-content/uploads/2020/04/ws980wifi_dach.jpg'></IonImg></IonItem>
          <IonItem>
            <IonLabel class='about_text'>There are only 20 ground-stations monitoring PM-2.5 in 
              Montana shown above (DEQ, 2022). The first part of this project involved correlating 
              ground-station measurements of PM-2.5 with satellite data to create a full coverage 
              concentration map. We used aerosol optical depth and several other climate variables 
              in our models. The random forest regression model outperformed simple and multiple 
              linear regression, so we utilized it on our Google Earth Engine app to generate the 
              daily estimates of PM-2.5 concentrations. We are in the process of writing a manuscript 
              for publication.
            </IonLabel>
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
