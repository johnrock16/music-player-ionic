import React, { createContext, useState } from 'react';

const defaultValue={
  selectedMusic:{
    id:0,
    index:0,
    title:'',
    band:'',
    music:'',
    image:'',
  },
  listMusic:[],
  selectedPlaylist:{}
}

export const MusicContext= createContext(defaultValue);

export const MusicContextProvider=({children})=>{

  const [state,setState] = useState(defaultValue);

  const setSelectedMusic= (selectedMusic)=>{
    setState((pv)=>({...pv,selectedMusic}))
  }

  const setSelectedPlaylist= (selectedPlaylist)=>{
    setState((pv)=>({...pv,selectedPlaylist}))
  }

  const setListMusic=(listMusic)=>{
    setState((pv)=>({...pv,listMusic}))
  }

  return(
    <MusicContext.Provider value={{
        ...state,
        setListMusic,
        setSelectedMusic,
        setState,
        setSelectedPlaylist,
    }}>
      {children}
    </MusicContext.Provider>
  )
}