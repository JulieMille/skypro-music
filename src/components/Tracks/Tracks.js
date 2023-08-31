import Track from '../Track/Track.js';
import * as S from './Tracks.styles'

function Tracks({ isLoading }) {
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
                <Track isLoading={isLoading}
                  track="Guilt"
                  artist="Nero"
                  album="Welcome Reality"
                 time="4:44"
                />
                <Track isLoading={isLoading}
                  track="Elektro"
                  artist="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                  time="2:22"
                />
                <Track isLoading={isLoading}
                  track="Guilt"
                  artist="Nero"
                  album="Welcome Reality"
                  time="4:44"
                />
                <Track isLoading={isLoading}
                  track="Elektro"
                  artist="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                 time="2:22"
                />
                <Track isLoading={isLoading}
                  track="Guilt"
                  artist="Nero"
                  album="Welcome Reality"
                  time="4:44"
                />
                <Track isLoading={isLoading}
                  track="Elektro"
                  artist="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                  time="2:22"
                />
                <Track isLoading={isLoading}
                  track="Guilt"
                  artist="Nero"
                  album="Welcome Reality"
                  time="4:44"
                />
                <Track isLoading={isLoading}
                  track="Elektro"
                  artist="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                  time="2:22"
                />
                <Track isLoading={isLoading}
                 track="Guilt"
                  artist="Nero"
                  album="Welcome Reality"
                  time="4:44"
                />
                <Track isLoading={isLoading}
                 track="Elektro"
                  artist="Dynoro, Outwork, Mr. Gee"
                  album="Elektro"
                  time="2:22"
                />
                
                </S.ContentPlaylist>
              </S.CenterblockContent>
    )
}

export default Tracks;