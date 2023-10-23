import * as S from "../Bar/Bar.styles"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'
import { useContext, useState } from 'react'
import { PlayerContext, UserContext } from '../../App'

export const Player = ({ addFavorite, deleteFavorite, handlePrev, handleNext, isLoading, isPlaying, togglePlay, children, toggleLoop, isCycled, isShuffled, handleShuffle, handleVolume, rangedVolume, currentTime, duration }) => {

    const audioRef = useContext(PlayerContext);
    const chosenTrack = useSelector((state) => state.currentTrack);
    const user = useContext(UserContext);
    const favorTracks = useSelector((state) => state.favoritePlaylist);
    const [addLiked, setAddLiked] = useState(getIsLiked());

    function getIsLiked () {
      if (favorTracks.find(item => item.id === chosenTrack.id)) {
        return true
      }
      // if (Array.isArray(chosenTrack.stared_user)) {
      //   return chosenTrack.stared_user.some((stared_user) => stared_user.username === user.username);
      // }
      return false;
    }

    function timeToSeconds(timeString) {
        if (timeString) {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return minutes * 60 + seconds;
        }
      }
    
      const handleProgressBarChange = (e) => {
        if (audioRef.current) {
          const newTime = (e.target.value * timeToSeconds(duration)) / 100;
          audioRef.current.currentTime = newTime;
        }
      };
    

    return (
        <>
        <S.Bar>
            <S.BarContent>
              <S.BarTiming>{currentTime} / {duration}</S.BarTiming>
              <S.ProgressOther style={{width: `${(timeToSeconds(currentTime) / timeToSeconds(duration)) * 100}%`}}></S.ProgressOther>
                <S.BarPlayerProgress
                type="range"
                min="0"
                max="100"
                value={(timeToSeconds(currentTime) / timeToSeconds(duration)) * 100}
                onChange={handleProgressBarChange}>
                </S.BarPlayerProgress>
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.BarPlayerControls>
                    <S.PlayerBtnPrev>
                      <S.PlayerBtnPrevSvg onClick={handlePrev} alt="prev">
                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                      </S.PlayerBtnPrevSvg>
                    </S.PlayerBtnPrev>
                    <S.PlayerBtnPlay onClick={togglePlay} className="_btn">
                      <S.PlayerBtnPlaySvg alt="play">
                        <use href={isPlaying ? "img/icon/sprite.svg#icon-pause" : "img/icon/sprite.svg#icon-play"}></use>
                      </S.PlayerBtnPlaySvg>
                    </S.PlayerBtnPlay>
                    <S.PlayerBtnNext>
                      <S.PlayerBtnNextSvg onClick={handleNext} alt="next">
                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                      </S.PlayerBtnNextSvg>
                    </S.PlayerBtnNext>
                    <S.PlayerBtnRepeat onClick={toggleLoop} className="_btn-icon">
                      <S.PlayerBtnRepeatSvg alt="repeat">
                        <use href={isCycled ? "img/icon/sprite.svg#icon-repeat-active" : "img/icon/sprite.svg#icon-repeat"}></use>
                      </S.PlayerBtnRepeatSvg>
                    </S.PlayerBtnRepeat>
                    <S.PlayerBtnShuffle className="_btn-icon">
                      <S.PlayerBtnShuffleSvg onClick={handleShuffle} alt="shuffle">
                        <use xlinkHref={isShuffled ? "img/icon/sprite.svg#icon-shuffle-active" : "img/icon/sprite.svg#icon-shuffle"}></use>
                      </S.PlayerBtnShuffleSvg>
                    </S.PlayerBtnShuffle>
                  </S.BarPlayerControls>

                  <S.PlayerTrackPlay>
                    <S.TrackPlayContain>

                    {isLoading ? (
            <>
              <Skeleton width={51} height={51} baseColor='#2f3030' style={{ 'grid-area': 'image', 'margin-right': '12px' }} /> 
              <S.TrackPlayWrapper>
              <Skeleton width={49} height={10} baseColor='#2f3030' style={{ 'grid-area': 'author', margin: '1px' }} /> 
              <Skeleton width={49} height={10} baseColor='#2f3030' style={{ 'grid-area': 'album', margin: '1px' }} />
              </S.TrackPlayWrapper>  
            </>
          ) : (
            <>
                      <S.TrackPlayImg>
                        <S.TrackPlaySvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackPlaySvg>
                      </S.TrackPlayImg>
                      <S.TrackPlayWrapper>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink href="http://">{chosenTrack.name}</S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink href="http://">{chosenTrack.author}</S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                      </S.TrackPlayWrapper>
                  
                    </>)}

                    </S.TrackPlayContain>
                    <S.TrackPlayLikeDis>
                      <S.TrackPlayLike className='_btn-icon'>
                        <S.TrackPlayLikeSvg onClick={() => {
                          addFavorite(chosenTrack.id)
                          setAddLiked(true)}} alt="like">
                          <use xlinkHref={addLiked ? "img/icon/sprite.svg#icon-like-active" : "img/icon/sprite.svg#icon-like"}></use>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDis className='_btn-icon'>
                        <S.TrackPlayDisSvg onClick={() => {
                          deleteFavorite(chosenTrack.id)
                          setAddLiked(false)}} alt="dislike">
                          <use
                            xlinkHref={addLiked ? "img/icon/sprite.svg#icon-dislike" : "img/icon/sprite.svg#icon-dislike-active"}
                          ></use>
                        </S.TrackPlayDisSvg>
                      </S.TrackPlayDis>
                    </S.TrackPlayLikeDis>
                  </S.PlayerTrackPlay>
                </S.BarPlayer>
                <S.BarVolumeBlock>
                  <S.VolumeContent>
                    <S.VolumeImg>
                      <S.VolumeSvg alt="volume">
                        <use xlinkHref="../../../img/icon/sprite.svg#icon-volume"></use>
                      </S.VolumeSvg>
                    </S.VolumeImg>
                    <S.VolumeProgress className="_btn">
                      <S.VolumeProgressLine onChange={handleVolume} className="_btn"
                        type="range"
                        name="range"
                        min = "0"
                        max = "1"
                        step = "0.1"
                        value = {rangedVolume}
                      />
                    </S.VolumeProgress>
                  </S.VolumeContent>
                </S.BarVolumeBlock>
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
           </>
    )
}