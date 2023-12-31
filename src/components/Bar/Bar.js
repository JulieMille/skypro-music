import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.styles'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { PlayerContext } from '../../App'


export const Bar = ({ handlePrev, handleNext, isLoading, isPlaying, togglePlay, children, toggleLoop, isCycled, isShuffled, handleShuffle, handleVolume, rangedVolume, currentTime, duration }) => {

  const audioRef = useContext(PlayerContext);

  const chosenTrack = useSelector((state) => state.currentTrack);
  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
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
      {/* {children} */}
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
                        <S.TrackPlayLikeSvg alt="like">
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLike>
                      <S.TrackPlayDis className='_btn-icon'>
                        <S.TrackPlayDisSvg alt="dislike">
                          <use
                            xlinkHref="img/icon/sprite.svg#icon-dislike"
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