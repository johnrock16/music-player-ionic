import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './ListPageScreen.css';

const ListPageScreen = (props) => {

  const {listMusics,onSelect,goTo,name} = props;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            (listMusics.length>0 && listMusics.map((item,index)=>(
              <IonItem key={`${item.title}${item.band}${index}`} onClick={()=>{onSelect(item,index)}} routerLink={goTo}>
                <IonThumbnail class='thumb' style={{backgroundImage:`url(${(item?.thumb)?item.thumb:item.image})`}} slot="start"/>
                <IonRow style={{flexDirection:'column'}}>
                  <IonLabel className="music-title">{(item.title)?item.title:item.name}</IonLabel>
                  <IonLabel className="music-band">{item.band}</IonLabel>
                </IonRow>
              </IonItem>
            )))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListPageScreen;
