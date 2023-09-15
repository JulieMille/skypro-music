import Bar from '../../components/Bar/Bar';
import Nav from '../../components/Nav/Nav';
import CenterBlock from '../../components/CenterBlock/CenterBlock';
import SideBar from '../../components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import { Main } from '../../App.styles';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [realTracks, setRealTracks] = useState([]);
  const [chosenTrack, setChosenTrack] = useState(null);

  useEffect(() => {
    fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => response.json())
      .then((response) => setRealTracks(response))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, []);
  return (
    <>
    <Main>
        <Nav/>
        <CenterBlock setChosenTrack={setChosenTrack} realTracks={realTracks} title={'Треки'} isLoading={isLoading}/>
        <SideBar isLoading={isLoading}/>
    </Main>
    {chosenTrack &&
    <Bar chosenTrack={chosenTrack} isLoading={isLoading}/>}
    </>
  );
}

export default MainPage;
