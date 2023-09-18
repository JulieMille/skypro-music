import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.styles'

function Bar({ isLoading, chosenTrack }) {
    return (
        <S.Bar>
            <S.BarContent>
              <S.BarPlayerProgress></S.BarPlayerProgress>
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.BarPlayerControls>
                    <S.PlayerBtnPrev>
                      <S.PlayerBtnPrevSvg alt="prev">
                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                      </S.PlayerBtnPrevSvg>
                    </S.PlayerBtnPrev>
                    <S.PlayerBtnPlay className="_btn">
                      <S.PlayerBtnPlaySvg alt="play">
                        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                      </S.PlayerBtnPlaySvg>
                    </S.PlayerBtnPlay>
                    <S.PlayerBtnNext>
                      <S.PlayerBtnNextSvg alt="next">
                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                      </S.PlayerBtnNextSvg>
                    </S.PlayerBtnNext>
                    <S.PlayerBtnRepeat className="_btn-icon">
                      <S.PlayerBtnRepeatSvg alt="repeat">
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                      </S.PlayerBtnRepeatSvg>
                    </S.PlayerBtnRepeat>
                    <S.PlayerBtnShuffle className="_btn-icon">
                      <S.PlayerBtnShuffleSvg alt="shuffle">
                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
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
                      <S.VolumeProgressLine className="_btn"
                        type="range"
                        name="range"
                      />
                    </S.VolumeProgress>
                  </S.VolumeContent>
                </S.BarVolumeBlock>
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
    )
}

export default Bar;