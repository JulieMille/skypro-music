import { useEffect, useState, createContext } from 'react';
import { GlobalStyles, AppContainer, Wrapper, Container } from './App.styles.js';
import { AppRoutes } from './Routes/routes';
import { useNavigate } from 'react-router-dom';
import { setCurrentPlaylist } from './store/actions.js';
import { useDispatch } from 'react-redux';

export const UserContext = createContext(null);

export const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem("user") ? true : false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [realTracks, setRealTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedin(false);
    setUser({});
    navigate("/login");
    };
  
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
        console.log(response[0].track_file);
        dispatch(setCurrentPlaylist(response))
        localStorage.setItem("Tracks", JSON.stringify(response))
        // setRealTracks(response)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <UserContext.Provider value={user}>
    <GlobalStyles/>
    <AppContainer>
      <Wrapper>
        <Container>
        <AppRoutes 
          realTracks={realTracks}
          isLoading={isLoading}
          handleLogout={handleLogout} 
          setUser={setUser} 
          isLoggedin={isLoggedin}
          setIsLoggedin={setIsLoggedin} 
          user={user}/>
        </Container>
      </Wrapper>
    </AppContainer>
    </UserContext.Provider>
  );
}
