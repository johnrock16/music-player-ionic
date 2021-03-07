import { useEffect, useState } from "react";


const useAudio = url => {
    const [audio, setAudio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(()=>{
      audio.pause();
      audio.currentTime = 0;
      setAudio(new Audio(url));
      setPlaying(false);
    },[url])

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () =>{setPlaying(false)});
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio]);
  
    return [audio,playing, toggle];
};

export default useAudio;