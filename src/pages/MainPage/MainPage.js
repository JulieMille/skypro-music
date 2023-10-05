import { Bar } from '../../components/Bar/Bar';
import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { SideBar } from '../../components/SideBar/SideBar';
import { useEffect, useState, useRef } from 'react';
import { Main } from '../../App.styles';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../store/actions'

export const MainPage = ({ isLoading, handleLogout, realTracks }) => {
  // const [chosenTrack, setChosenTrack] = useState(null);
  const chosenTrack = useSelector((state) => state.currentTrack);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCycled, setIsCycled] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [rangedVolume, setRangedVolume] = useState(0.1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  function getRandomIndexFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return randomIndex;
    } else {
      throw new Error('Пустой массив или не массив');
    }
  }

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

  const handleNext = () => {
    if (chosenTrack && chosenTrack.id) {
    const foundObject = realTracks?.findIndex((obj) => obj?.id === chosenTrack?.id)
      if (isShuffled){
        playStart(realTracks[getRandomIndexFromArray(realTracks)]);
      } else {
        if (realTracks[foundObject + 1]) {
          playStart(realTracks[foundObject + 1]);
      }
    }
    }
  }

  const handleCycle = () => {
    const id = +localStorage.getItem("id");
    console.log(typeof id, id);
    if (audioRef.current) {
      const foundObject = realTracks?.findIndex((obj) => obj?.id === chosenTrack?.id)
      audioRef.current.src = realTracks[id + 1].track_file;
      audioRef.current.load();
      audioRef.current.play();
      dispatch(setCurrentTrack(realTracks[id + 1]));
      localStorage.setItem("id", id + 1);
    }
  }

  const handlePrev = () => {
    const foundObject = realTracks.findIndex((obj) => obj.id === chosenTrack.id)
    if (isShuffled){
      playStart(realTracks[getRandomIndexFromArray(realTracks)]);
    } else {
      if (realTracks[foundObject - 1]) {
        playStart(realTracks[foundObject - 1]);
    }
  }
  }

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
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
      audioRef.current.removeEventListener('ended', handleNext)
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

  const playStart = (item) => {
    const foundObject = realTracks?.findIndex((obj) => obj?.id === item?.id)
    localStorage.setItem("id", foundObject);
    const next = chosenTrack ? item.id === chosenTrack.id : false
    dispatch(setCurrentTrack(item));
    handleStart(next);
  }

  const toggleLoop = () => {
    audioRef.current.loop = !audioRef.current.loop
    setIsCycled(!isCycled);
  }

  const handleVolume = (event) => {
    setRangedVolume(event.target.value);
    audioRef.current.volume = event.target.value;
  }

  useEffect(() => {
    if (audioRef.current) {
      if (isAdded === false) {
        audioRef.current.addEventListener("ended", handleCycle);
        setIsAdded(true);
      }
    }
  }, [chosenTrack])

  
  return (
    <>
    <Main>
        <Nav handleLogout={handleLogout}/>
        <CenterBlock isPlaying={isPlaying} playStart={playStart} realTracks={realTracks} title={'Треки'} isLoading={isLoading}/>
        <SideBar handleLogout={handleLogout} isLoading={isLoading}/>
    </Main>
    {chosenTrack &&
    <Bar
      // chosenTrack={chosenTrack} 
      isLoading={isLoading}
      handleNext = {handleNext}
      handlePrev = {handlePrev}
      audioRef={audioRef}
      togglePlay={togglePlay}
      isPlaying={isPlaying}
      toggleLoop={toggleLoop}
      isCycled={isCycled}
      isShuffled={isShuffled}
      handleShuffle={handleShuffle}
      handleVolume={handleVolume}
      rangedVolume={rangedVolume}
      currentTime={currentTime}
      duration={duration}>
        <audio onTimeUpdate={onTimeUpdate} controls ref={audioRef} style={{visibility: 'hidden'}}>
          <source src={chosenTrack.track_file} type="audio/mpeg" />
        </audio>
      </Bar>}
    </>
  );
}