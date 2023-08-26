import { useState } from 'react';
import './Track.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Track({ isLoading, track, album, artist, time }) {
    return (
        <div className="playlist__item">
                    <div className="playlist__track track">
                    {isLoading ? (
            <>
              <Skeleton width={51} height={51} baseColor='#2f3030' /> 
              <Skeleton width={380} height={25} baseColor='#2f3030' style={{ margin: '5px' }} /> 
              <Skeleton width={320} height={25} baseColor='#2f3030' style={{ margin: '7px' }} /> 
              <Skeleton width={300} height={25} baseColor='#2f3030' style={{ margin: '7px' }} />  
            </>
          ) : (
            <>
            <div className="track__title">
                        <div className="track__title-image">
                          <svg className="track__title-svg" alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                          </svg>
                        </div>
                        <div className="track__title-text">
                          <a className="track__title-link" href="http://">{track}
                            <span className="track__title-span"></span></a>
                        </div>
                      </div>
                      <div className="track__author">
                        <a className="track__author-link" href="http://">{artist}</a>
                      </div>
                      <div className="track__album">
                        <a className="track__album-link" href="http://">{album}</a>
                      </div>
                      <div className="track__time">
                        <svg className="track__time-svg" alt="time">
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className="track__time-text">{time}</span>
                      </div>
                      </>)}
              
      </div>
    </div>
  );
}