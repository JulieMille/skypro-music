import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Sidebar.styles';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

export const SideBar = ({ isLoading, handleLogout}) => {
  const user = useContext(UserContext);
    return (
    
        <S.MainSidebar>
              <S.SidebarPersonal>
                <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
                <S.SidebarIcon onClick={handleLogout}>
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
                  <Link to="/category/1">
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="../../../img/playlist01.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  </Link>
                  <Link to="/category/2">
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="../../../img/playlist02.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  </Link>
                  <Link to="/category/3">
                  <S.SidebarItem>
                    <S.SidebarLink href="#">
                      <S.SidebarImg
                        src="../../../img/playlist03.png"
                        alt="day's playlist"
                      />
                    </S.SidebarLink>
                  </S.SidebarItem>
                  </Link>
                  </>)}
                  
                </S.SidebarList>
              </S.SidebarBlock>
            </S.MainSidebar>
    )
}