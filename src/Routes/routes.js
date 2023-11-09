import { Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage';
import { MyTracks } from '../pages/Mytracks/MyTracks';
import { Error } from '../pages/Error/Error'
import { Category } from '../pages/Category/Category';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import AuthPage from '../pages/AuthPage/AuthPage';
import { Layout } from '../pages/Layout/Layout';
import { CategoryRoutes} from '../Routes/categoryRoutes';

export const AppRoutes = ({setBaseFilters, setJwt, searchFilter, filterTracksByGenre, filterTracksByAuthor, sortedTracks, isSorted, sortUp, sortDown, sortBack, addFavorite, deleteFavorite, handleChoice, duration, currentTime, rangedVolume, handleVolume, handleShuffle, handlePrev, handleNext, togglePlay, isPlaying, toggleLoop, isCycled, isShuffled,  playStart, isLoading, realTracks, setUser, setIsLoggedin, isLoggedin, handleLogout}) => {
  return (
    <Routes>
      <Route path="/" element={<Layout 
              handleNext = {handleNext}
              handlePrev = {handlePrev}
              togglePlay={togglePlay}
              isPlaying={isPlaying}
              toggleLoop={toggleLoop}
              isCycled={isCycled}
              isShuffled={isShuffled}
              handleShuffle={handleShuffle}
              handleVolume={handleVolume}
              rangedVolume={rangedVolume}
              currentTime={currentTime}
              duration={duration}
              addFavorite={addFavorite} 
              deleteFavorite={deleteFavorite}
               />}>
        <Route index element={<ProtectedRoute isAllowed={isLoggedin}><MainPage 
          searchFilter={searchFilter}
          setBaseFilters={setBaseFilters}
          filterTracksByGenre={filterTracksByGenre}
          filterTracksByAuthor={filterTracksByAuthor}
          sortedTracks={sortedTracks} 
          isSorted={isSorted} 
          sortUp={sortUp} 
          sortDown={sortDown} 
          sortBack={sortBack} 
          addFavorite={addFavorite} 
          deleteFavorite={deleteFavorite} 
          isLoading={isLoading} 
          handleChoice={handleChoice} 
          handleLogout={handleLogout}/></ProtectedRoute>} />
        <Route path="favorites" element={<ProtectedRoute isAllowed={isLoggedin}><MyTracks addFavorite={addFavorite} deleteFavorite={deleteFavorite} isLoading={isLoading} handleChoice={handleChoice} isPlaying={isPlaying} /></ProtectedRoute>} />
        <Route path='category/*' element={<CategoryRoutes isLoggedin={isLoggedin}  isPlaying={isPlaying} isLoading={isLoading} handleChoice={handleChoice} addFavorite={addFavorite} deleteFavorite={deleteFavorite}  />}/>
      </Route>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage setJwt={setJwt} setIsLoggedin={setIsLoggedin} setUser={setUser} isLoginMode={true} />} />
        <Route path="*" element={<Error />} />
    </Routes>
  );
};
