import { IonButton, IonCol, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '../../context/MusicContext';
import ListPageScreen from '../ListPageScreen/ListPageScreen';
import './HomePage.css';

const initialState = {
  listPlaylist:[]
}

const HomePage = (props) => {
  const [state,setState] = useState(initialState);
  const musicContext = useContext(MusicContext);
  const {listPlaylist} = state;

  const getMusic = async ()=>{
    const resolve = await fetch('http://localhost:3000/getPlaylists',{
      method:'GET',
      headers:{
        'accept':'application/json',
        'content-type':'application/json'
      }
    });
    if(resolve.status===200){
      return resolve.json();
    }
  }

  useEffect(()=>{
    getMusic().then((result)=>{
      setState((pv)=>({...pv,listPlaylist:result}));
    })
  },[]);

  return (
   (listPlaylist) && (
    <ListPageScreen
      listMusics={listPlaylist}
      name={'Home'}
      onSelect={(item,index)=>{
        musicContext.setSelectedPlaylist({id:index,...item})
      }}
      goTo='/playlist'
     />
    )
  );
};

export default HomePage;
