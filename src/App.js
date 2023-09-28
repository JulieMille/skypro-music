import { useEffect, useState, createContext } from 'react';
import { GlobalStyles, AppContainer, Wrapper, Container } from './App.styles.js';
import { AppRoutes } from './Routes/routes';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext(null);

export const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem("user") ? true : false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedin(false);
    setUser({});
    navigate("/login");
    };
  
  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log(localStorage.getItem("user"));
      setIsLoggedin(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
    <GlobalStyles/>
    <AppContainer>
      <Wrapper>
        <Container>
        <AppRoutes 
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
