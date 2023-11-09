import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { useEffect, useState } from 'react';
import { Main } from '../../App.styles';
import { Route, Routes, useParams } from 'react-router-dom';
import { setClassicPlaylist, setElectronicPlaylist, setRockPlaylist } from '../../store/actions';
import { useDispatch } from 'react-redux';


export const Category = ({ handleChoice, addFavorite, deleteFavorite, isLoading, isPlaying }) => {
    const heading = ['Плейлист дня', '100 танцевальных хитов', 'Инди заряд']
    const { id } = useParams();
    const [categoryTracks, setCategoryTracks] = useState(null);
    const dispatch = useDispatch();
  

  useEffect(() => {
    fetch(`https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCategoryTracks(response.items);
        // if (1>0) {
          dispatch(setClassicPlaylist(response.items))
        // } else if (2) {
        //   dispatch(setElectronicPlaylist(response.items))
        // } else {
        //   dispatch(setRockPlaylist(response.items))
        // }
      })
      .catch((error) => {
        console.log(error)
          // handleLogout()
      })
      // .finally(() => setIsLoading(false))
    }, [])


    // const App = () => {
    //   const transactions = [
    //     { id: '1', details: 'Transaction 1' },
    //     { id: '2', details: 'Transactions 2' },
    //   ];return (
    //    <Routes>
    //         <Route element={<Layout />}>
    //           <Route index element={<Home />} />
    //           <Route path="home" element={<Home />} />
    //           <Route path="user" element={<User />}>
    //             <Route index element={<Profile />} />
    //             <Route path="profile" element={<Profile />} />
    //             <Route path="transactions" element={<Transactions transactions={transactions} />} />
    //             <Route path="*" element={<NotFound />} />
    //           </Route>
    //           <Route path="*" element={<NotFound />} />
    //         </Route>
    //     </Routes>
    //   );
    // }

  return (
    <>
    <Main>
        <Nav/>
        <CenterBlock 
          handleChoice={handleChoice}
          addFavorite={addFavorite} 
          deleteFavorite={deleteFavorite}
          realTracks={categoryTracks} 
          title={heading[id - 1]} 
          isLoading={isLoading}
          isPlaying={isPlaying}/>
    </Main>
    </>
  );
}