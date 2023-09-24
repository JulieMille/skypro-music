import { Bar } from '../../components/Bar/Bar';
import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { SideBar } from '../../components/SideBar/SideBar';
import { useEffect, useState, useRef } from 'react';
import { Main } from '../../App.styles';

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [realTracks, setRealTracks] = useState([]);
  const [chosenTrack, setChosenTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCycled, setIsCycled] = useState(false);
  const [rangedVolume, setRangedVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const onTimeUpdate = (event) => {
    const minutes = Math.floor(event.target.currentTime / 60);
        const seconds = Math.floor(event.target.currentTime - minutes * 60);
        const currentTime = makeTimeString(minutes,'0',2) + ':' + makeTimeString(seconds,'0',2);
        setCurrentTime(currentTime);
        const durationMinutes = Math.floor(event.target.duration / 60);
        const durationSeconds = Math.floor(event.target.duration - durationMinutes * 60);
        const duration = makeTimeString(durationMinutes,'0',2) + ':' + makeTimeString(durationSeconds,'0',2);
        setDuration(duration);
  }

  const makeTimeString = (string,pad,length) => {
    return (new Array(length+1).join(pad)+string).slice(-length);
  }


  const handleStart = (next) => {
    if (audioRef.current) {
      if(next === false) {
      audioRef.current.load();
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const togglePlay = () => {
    if (isPlaying) {
      handleStop();
    } else {
      handleStart();
    }
  };

  const playStart = async (item) => {
    const next = chosenTrack ? item.id === chosenTrack.id : false
    await setChosenTrack(item);
    handleStart(next);
  }

  const toggleLoop = () => {
    audioRef.current.loop = !audioRef.current.loop
    setIsCycled(!isCycled);
  }

  const handleVolume = (event) => {
    setRangedVolume(event.target.value);
    console.log(rangedVolume);
    audioRef.current.volume = event.target.value;
  }

  useEffect(() => {
    fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0].track_file);
        setRealTracks(response)})
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, []);
  return (
    <>
    <Main>
        <Nav/>
        <CenterBlock playStart={playStart} realTracks={realTracks} title={'Треки'} isLoading={isLoading}/>
        <SideBar isLoading={isLoading}/>
    </Main>
    {chosenTrack &&
    <Bar
      chosenTrack={chosenTrack} 
      isLoading={isLoading}
      audioRef={audioRef}
      togglePlay={togglePlay}
      isPlaying={isPlaying}
      toggleLoop={toggleLoop}
      isCycled={isCycled}
      handleVolume={handleVolume}
      rangedVolume={rangedVolume}
      currentTime={currentTime}
      duration={duration}>
        <audio onTimeUpdate={onTimeUpdate} controls ref={audioRef}>
          <source src={chosenTrack.track_file} type="audio/mpeg" />
        </audio>
      </Bar>}
    </>
  );
}