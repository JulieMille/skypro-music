import { Bar } from '../../components/Bar/Bar';
import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { useContext, useEffect, useState } from 'react';
import { Main } from '../../App.styles';
import { useSelector } from 'react-redux';
import { PlayerContext } from '../../App';
import { Tracks } from '../../components/Tracks/Tracks';


export const MyTracks = ({ addFavorite, deleteFavorite, isPlaying, isLoading, handleChoice}) => {
  const chosenTrack = useSelector((state) => state.currentTrack);
  const realTracks = useSelector((state) => state.currentPlaylist);
  const favorTracks = useSelector((state) => state.favoritePlaylist);
  const audioRef = useContext(PlayerContext);

  console.log(favorTracks);
  
  return (
    <>
    <Main>
        <Nav/>
        <CenterBlock title={'Мои треки'}  
        addFavorite={addFavorite} 
        deleteFavorite={deleteFavorite}
        realTracks={favorTracks}
        isPlaying={isPlaying} 
        isLoading={isLoading} 
        handleChoice={handleChoice}/>
    </Main>
    </>
  );
}
