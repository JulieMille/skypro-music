import { useEffect, useState, createContext } from 'react';
import { GlobalStyles, AppContainer, Wrapper, Container } from './App.styles.js';
import { AppRoutes } from './Routes/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { setCurrentTrack, setFavoritePlaylist, setNowPlaylist, setCurrentPlaylist } from './store/actions.js';


export const UserContext = createContext(null);
export const PlayerContext = createContext(null);

export const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem("user") ? true : false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const chosenTrack = useSelector((state) => state.currentTrack);
  const realTracks = useSelector((state) => state.currentPlaylist);
  const favorTracks = useSelector((state) => state.favoritePlaylist);
  const nowTracks = useSelector((state) => state.nowPlaylist);
  const classicTracks = useSelector((state) => state.classicPlaylist);
  const electronicTracks = useSelector((state) => state.electronicPlaylist);
  const rockTracks = useSelector((state) => state.rockPlaylist);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isCycled, setIsCycled] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [rangedVolume, setRangedVolume] = useState(0.1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedTracks, setSortedTracks] = useState([]); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setIsLoggedin(false);
    setUser({});
    navigate("/login");
    };

    function getRandomIndexFromArray(array) {
      if (Array.isArray(array) && array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return randomIndex;
      } else {
        throw new Error('Пустой массив или не массив');
      }
    }
  
    const onTimeUpdate = (event) => {
      const minutes = Math.floor(event.target.currentTime / 60);
          const seconds = Math.floor(event.target.currentTime - minutes * 60);
          const currentTime = makeTimeString(minutes,'0',2) + ':' + makeTimeString(seconds,'0',2);
          setCurrentTime(currentTime);
          const durationMinutes = Math.floor(event.target.duration / 60);
          const durationSeconds = Math.floor(event.target.duration - durationMinutes * 60);
          const duration = makeTimeString(durationMinutes,'0',2) + ':' + makeTimeString(durationSeconds,'0',2);
          setDuration(duration);
    }
  
    const makeTimeString = (string,pad,length) => {
      return (new Array(length+1).join(pad)+string).slice(-length);
    }
  
    const handleNext = () => {
      if (chosenTrack && chosenTrack.id) {
      const foundObject = nowTracks?.findIndex((obj) => obj?.id === chosenTrack?.id)
      console.log(foundObject);
        if (isShuffled){
          playStart(nowTracks[getRandomIndexFromArray(nowTracks)]);
        } else {
          if (nowTracks[foundObject + 1]) {
            playStart(nowTracks[foundObject + 1]);
        }
        }
      }
    }
  
    const handleCycle = () => {
      const id = +localStorage.getItem("id");
      const nowTracks = JSON.parse(localStorage.getItem("Tracks"));
      if (audioRef.current) {
        if (isShuffled) {
          playStart(nowTracks[getRandomIndexFromArray(nowTracks)]);
        } else {
        audioRef.current.src = nowTracks[id + 1].track_file;
        audioRef.current.load();
        audioRef.current.play();
        dispatch(setCurrentTrack(nowTracks[id + 1]));
        localStorage.setItem("id", id + 1);
        }
      }
    }
  
    const handlePrev = () => {
      const foundObject = nowTracks.findIndex((obj) => obj.id === chosenTrack.id)
      if (isShuffled){
        playStart(nowTracks[getRandomIndexFromArray(nowTracks)]);
      } else {
        if (nowTracks[foundObject - 1]) {
          playStart(nowTracks[foundObject - 1]);
      }
    }
    }
  
    const handleShuffle = () => {
      setIsShuffled(!isShuffled);
    }
  
  
    const handleStart = (next) => {
      if (audioRef.current) {
        if(next === false) {
        audioRef.current.load();
        }
        audioRef.current.play();
        setIsPlaying(true);
      }
    };
  
    const handleStop = () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleNext)
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    
    const togglePlay = () => {
      if (isPlaying) {
        handleStop();
      } else {
        handleStart();
      }
    };
  
    const handleChoice = (item) => {
      if ((favorTracks !== nowTracks) && location.pathname === "/favorites") { 
        dispatch(setNowPlaylist(favorTracks))
        playStart(item)}
      else if ((favorTracks !== nowTracks) && location.pathname === "/") { 
        dispatch(setNowPlaylist(realTracks))
        playStart(item)}
      else if ((classicTracks !== nowTracks) && location.pathname === "/category/1") { 
        dispatch(setNowPlaylist(classicTracks))
        playStart(item)}
      else if ((electronicTracks !== nowTracks) && location.pathname === "/category/2") { 
        dispatch(setNowPlaylist(electronicTracks))
        playStart(item)}
      else if ((rockTracks !== nowTracks) && location.pathname === "/category/3") { 
        dispatch(setNowPlaylist(rockTracks))
        playStart(item)}
      else {
        playStart(item)
      }
    }
    const playStart = (item) => {
      const foundObject = nowTracks?.findIndex((obj) => obj?.id === item?.id)
      localStorage.setItem("id", foundObject);
      const next = chosenTrack ? item.id === chosenTrack.id : false
      dispatch(setCurrentTrack(item));
      handleStart(next);
    }
  
    const toggleLoop = () => {
      audioRef.current.loop = !audioRef.current.loop
      setIsCycled(!isCycled);
    }
  
    const handleVolume = (event) => {
      setRangedVolume(event.target.value);
      audioRef.current.volume = event.target.value;
    }

    function sortUp() {
      const sTracks = [...realTracks];
      sTracks.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateA - dateB;
      });
      setSortedTracks(sTracks);
      setIsSorted(true);
    }

    function sortDown() {
      const sTracks = [...realTracks];
      sTracks.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA;
      });
      setSortedTracks(sTracks);
      setIsSorted(true);
    }

    function sortBack() {
      setIsSorted(false);
        }

    function filterTracksByAuthor(chosenAuthors) {
      const filteredTracks = realTracks.filter((track) => {
        return chosenAuthors.includes(track.author);
      });
        
      setSortedTracks(filteredTracks);
      setIsSorted(true);
    }

    function filterTracksByGenre(chosenGenres) {
      const filteredTracks = realTracks.filter((track) => {
        return chosenGenres.includes(track.genre);
      });
        
      setSortedTracks(filteredTracks);
      setIsSorted(true);
    }

    function searchFilter(query) {
      const lowercaseQuery = query.toLowerCase();
      const filteredArray = realTracks.filter((item) => {
        const itemValue = item.name.toLowerCase();
        return itemValue.includes(lowercaseQuery);
      });
    
      setSortedTracks(filteredArray);
      setIsSorted(true);
    }

  const addFavorite = (id) => {
    fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
})
  .then((response) => response.json())
  .then((json) => {
    const foundObject = realTracks.find(item => item.id === id)
    if (favorTracks.find(item => item.id === id)) {
      return
    }
    dispatch(setFavoritePlaylist([...favorTracks, foundObject]))
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
    handleLogout()
  })
  }

  const deleteFavorite = (id) => {
    fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
})
  .then((response) => response.json())
  .then((json) => {
    dispatch(setFavoritePlaylist(favorTracks.filter(item => item.id !== id)))
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
    handleLogout()
  })
  }
  
  
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedin(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [])

  useEffect(() => {
    fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(setCurrentPlaylist(response))
        localStorage.setItem("Tracks", JSON.stringify(response))
      })
      .catch((error) => {
        console.log(error)
          handleLogout()
      })
      .finally(() => setIsLoading(false))

    fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            return handleLogout()
          }
          return response.json()
        })
        .then((playlist) => {
          dispatch(setFavoritePlaylist(playlist))
          })
        .catch((error) => {
          console.log(error)
          handleLogout()
        })
  }, []);

  return (
    <UserContext.Provider value={user}>
    <PlayerContext.Provider value={audioRef}>
    <GlobalStyles/>
    <AppContainer>
        
        <audio onTimeUpdate={onTimeUpdate} controls onEnded={handleCycle} ref={audioRef} style={{visibility: 'hidden', position: 'absolute'}}>
          <source src={chosenTrack?.track_file || ''} type="audio/mpeg" />
        </audio>
      <Wrapper>
        <Container>

        <AppRoutes 
          realTracks={nowTracks}
          isLoading={isLoading}
          handleLogout={handleLogout} 
          setUser={setUser} 
          isLoggedin={isLoggedin}
          setIsLoggedin={setIsLoggedin} 
          playStart={playStart}
          handleChoice={handleChoice}
          user={user}
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
          sortUp={sortUp}
          sortDown={sortDown}
          sortBack={sortBack}
          sortedTracks={sortedTracks} isSorted={isSorted}
          filterTracksByAuthor={filterTracksByAuthor}
          filterTracksByGenre={filterTracksByGenre}
          searchFilter={searchFilter}
          />
        </Container>
      </Wrapper>
    </AppContainer>
    </PlayerContext.Provider>
    </UserContext.Provider>
  );
}
