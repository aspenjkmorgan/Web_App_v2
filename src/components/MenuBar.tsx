import './MenuBar.css';
import {IonSearchbar, IonButton, IonPopover, IonContent} from '@ionic/react';


const AQILegend: React.FC = () => {
  return (
    <>
    <IonSearchbar showClearButton="focus"></IonSearchbar>

    <IonButton className='B1' id="ct1">Healthy</IonButton>
    <IonPopover trigger="ct1" triggerAction="click">
        <IonContent class="ion-padding">PM-2.5 concentration: 0.0 - 12.0 ug/m^3.</IonContent>
    </IonPopover>

    <IonButton className='B2' id="ct2">Moderate</IonButton>
    <IonPopover trigger="ct2" triggerAction="click">
        <IonContent class="ion-padding">PM-2.5 concentration: 12.1 - 35.5 ug/m^3.</IonContent>
    </IonPopover>

    <IonButton className='B3' id="ct3">Unhealthy*</IonButton>
    <IonPopover trigger="ct3" triggerAction="click">
        <IonContent class="ion-padding">PM-2.5 concentration: 35.51 - 55.5 ug/m^3. 
        *Unhealthy for sensitive groups</IonContent>
    </IonPopover>

    <IonButton className='B4' id="ct4">Unhealthy</IonButton>
    <IonPopover trigger="ct4" triggerAction="click">
        <IonContent class="ion-padding">PM-2.5 concentration: 55.51 - 150.0 ug/m^3.</IonContent>
    </IonPopover>

    <IonButton className='B5' id="ct5">Very Unhealthy</IonButton>
    <IonPopover trigger="ct5" triggerAction="click">
        <IonContent class="ion-padding">PM-2.5 concentration: 150.1 - 200.0 ug/m^3.</IonContent>
    </IonPopover>

    <IonButton className='B6' id="ct6">Dangerous</IonButton>
    <IonPopover trigger="ct6" triggerAction="click">
        <IonContent class="ion-padding">PM-2.5 concentration: 200.1+ ug/m^3.</IonContent>
    </IonPopover>
    
    </>
  );
};
export default AQILegend;