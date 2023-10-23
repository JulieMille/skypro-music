import { Bar } from '../../components/Bar/Bar';
import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { SideBar } from '../../components/SideBar/SideBar';
import { useEffect, useState, useRef } from 'react';
import { Main } from '../../App.styles';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTrack } from '../../store/actions'

export const MainPage = ({ addFavorite, deleteFavorite, isLoading, handleLogout, handleChoice }) => {
  // const [chosenTrack, setChosenTrack] = useState(null);
  const chosenTrack = useSelector((state) => state.currentTrack);
  const realTracks = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();
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
  
  return (
    <>
    <Main>
        <Nav handleLogout={handleLogout}/>
        <CenterBlock addFavorite={addFavorite} deleteFavorite={deleteFavorite} isPlaying={isPlaying} handleChoice={handleChoice} realTracks={realTracks} title={'Треки'} isLoading={isLoading}/>
        <SideBar handleLogout={handleLogout} isLoading={isLoading}/>
    </Main>
    </>
  );
}