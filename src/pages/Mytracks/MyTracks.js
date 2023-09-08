import Bar from '../../components/Bar/Bar';
import Nav from '../../components/Nav/Nav';
import CenterBlock from '../../components/CenterBlock/CenterBlock';
import { useEffect, useState } from 'react';
import { Main } from '../../App.styles';


function MyTracks() {
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
        <CenterBlock title={'Мои треки'} isLoading={isLoading}/>
    </Main>
    <Bar isLoading={isLoading}/>
    </>
  );
}

export default MyTracks;
