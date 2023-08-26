import './SideBar.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SideBar({ isLoading}) {
    return (
    
        <div className="main__sidebar sidebar">
              <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__icon">
                  <svg alt="logout">
                    <use xlinkHref="../../../img/icon/sprite.svg#logout"></use>
                  </svg>
                </div>
              </div>
              <div className="sidebar__block">
                <div className="sidebar__list">

                {isLoading ? (
            <> 
              <Skeleton width={250} height={150} baseColor='#2f3030' style={{ 'margin-bottom': '30px' }} /> 
              <Skeleton width={250} height={150} baseColor='#2f3030' style={{ 'margin-bottom': '30px' }} /> 
              <Skeleton width={250} height={150} baseColor='#2f3030' style={{ 'margin-bottom': '30px' }} /> 
                
            </>
          ) : (
            <>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src="../../../img/playlist01.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src="../../../img/playlist02.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                      <img
                        className="sidebar__img"
                        src="../../../img/playlist03.png"
                        alt="day's playlist"
                      />
                    </a>
                  </div>
                  </>)}
                  
                </div>
              </div>
            </div>
    )
}

export default SideBar;