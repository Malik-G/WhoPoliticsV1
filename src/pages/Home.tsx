import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  let history = useHistory()
  const onClick = () => {
    history.push('/willhaley')
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={onClick}>U.S. Map</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
