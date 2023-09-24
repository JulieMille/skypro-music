import { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles';

export const Track = ({ isLoading, track, album, artist, time, playStart, item }) => {
    return (
        <S.PlaylistItem onClick={() => playStart(item)} >
                    <S.PlaylistTrack>
                    {isLoading ? (
            <>
              <Skeleton width={51} height={51} baseColor='#2f3030' /> 
              <Skeleton width={380} height={25} baseColor='#2f3030' style={{ margin: '5px' }} /> 
              <Skeleton width={320} height={25} baseColor='#2f3030' style={{ margin: '7px' }} /> 
              <Skeleton width={300} height={25} baseColor='#2f3030' style={{ margin: '7px' }} />  
            </>
          ) : (
            <>
            <S.TrackTitle>
              <S.TrackTitleImg>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="#">{track}
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="#">{artist}</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="#">{album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>{time}</S.TrackTimeText>
            </S.TrackTime>
            </>)}
              
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}