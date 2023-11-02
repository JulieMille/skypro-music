import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { SideBar } from '../../components/SideBar/SideBar';
import { useState, useRef } from 'react';
import { Main } from '../../App.styles';
import { useSelector, useDispatch } from 'react-redux';

export const MainPage = ({searchFilter, filterTracksByGenre, filterTracksByAuthor, sortedTracks, isSorted, sortUp, sortDown, sortBack, addFavorite, deleteFavorite, isLoading, handleLogout, handleChoice }) => {
  const realTracks = useSelector((state) => state.currentPlaylist);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
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
        <CenterBlock 
          searchFilter={searchFilter}
          filterTracksByGenre={filterTracksByGenre}
          filterTracksByAuthor={filterTracksByAuthor}
          sortUp={sortUp} 
          sortDown={sortDown} 
          sortBack={sortBack} 
          addFavorite={addFavorite} 
          deleteFavorite={deleteFavorite} 
          isPlaying={isPlaying} 
          handleChoice={handleChoice} 
          realTracks={isSorted ? sortedTracks : realTracks} 
          title={'Треки'} 
          isLoading={isLoading}/>
        <SideBar handleLogout={handleLogout} isLoading={isLoading}/>
    </Main>
    </>
  );
}