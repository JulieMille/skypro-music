import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Sidebar.styles';

function SideBar({ isLoading}) {
    return (
    
        <S.MainSidebar>
              <S.SidebarPersonal>
                <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
                <S.SidebarIcon>
                  <svg alt="logout">
                    <use xlinkHref="../../../img/icon/sprite.svg#logout"></use>
                  </svg>
                </S.SidebarIcon>
              </S.SidebarPersonal>
              <S.SidebarBlock>
                <S.SidebarList>

                {isLoading ? (
            <> 
              <Skeleton width={250} height={150} baseColor='#2f3030' style={{ 'margin-bottom': '30px' }} /> 
              <Skeleton width={250} height={150} baseColor='#2f3030' style={{ 'margin-bottom': '30px' }} /> 
              <Skeleton width={250} height={150} baseColor='#2f3030' style={{ 'margin-bottom': '30px' }} /> 
                
            </>
          ) : (
            <>
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="../../../img/playlist01.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="../../../img/playlist02.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="../../../img/playlist03.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  </>)}
                  
                </S.SidebarList>
              </S.SidebarBlock>
            </S.MainSidebar>
    )
}

export default SideBar;