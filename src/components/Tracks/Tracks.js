import './Tracks.css';
import Track from '../Track/Track.js';

function Tracks({ isLoading }) {
    return (
        <div className="centerblock__content">
                <div className="content__title playlist-title">
                  <div className="playlist-title__col col01">Трек</div>
                  <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                  <div className="playlist-title__col col03">АЛЬБОМ</div>
                  <div className="playlist-title__col col04">
                    <svg className="playlist-title__svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                  </div>
                </div>
                <div className="content__playlist playlist">
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
                
                </div>
              </div>
    )
}

export default Tracks;