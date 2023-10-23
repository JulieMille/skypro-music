import { useSelector } from 'react-redux';
import { Track } from '../Track/Track.js';
import * as S from './Tracks.styles'
import { useContext } from 'react';
import { UserContext } from '../../App.js';

export const Tracks = ({ addFavorite, deleteFavorite, isPlaying, isLoading, realTracks, handleChoice }) => {

  const user = useContext(UserContext);
  
  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
}

    function getIsLiked (item) {
      if (Array.isArray(item.stared_user)) {
        return item.stared_user.some((stared_user) => stared_user.username === user.username);
      }
      return false;
    }

    return (
        <S.CenterblockContent>
                <S.ContentTitle>
                  <S.Col01>Трек</S.Col01>
                  <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
                  <S.Col03>АЛЬБОМ</S.Col03>
                  <S.Col04>
                    <S.PlaylistTitleSvg alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                  </S.Col04>
                </S.ContentTitle>
                <S.ContentPlaylist>
                  {
                    realTracks && realTracks.map((item) => {
                      return <Track 
                      isLiked={getIsLiked(item)}
                      addFavorite={addFavorite} 
                      deleteFavorite={deleteFavorite}
                      isPlaying={isPlaying}
                      handleChoice={handleChoice} 
                      item={item} 
                      key={item.id} 
                      isLoading={isLoading}
                        track={item.name}
                        artist={item.author}
                        album={item.album}
                        time={secondsToMinutes(item.duration_in_seconds)}
                        />
                    })
                  }
                </S.ContentPlaylist>
              </S.CenterblockContent>
    )
}