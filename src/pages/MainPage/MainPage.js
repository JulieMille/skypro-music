import Bar from '../../components/Bar/Bar';
import Nav from '../../components/Nav/Nav';
import CenterBlock from '../../components/CenterBlock/CenterBlock';
import SideBar from '../../components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import { Main } from '../../App.styles';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000) 
  }, []);
  return (
    <>
    <Main>
        <Nav/>
        <CenterBlock title={'Треки'} isLoading={isLoading}/>
        <SideBar isLoading={isLoading}/>
    </Main>
    <Bar isLoading={isLoading}/>
    </>
  );
}

export default MainPage;
