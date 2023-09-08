import { useEffect, useState } from 'react';
import { GlobalStyles, AppContainer, Wrapper, Container } from './App.styles.js';
import { AppRoutes } from './Routes/routes';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => { 
    setUser({ login: "taradam" }) 
    console.log(user);
  };
  
  return (
    <>
    <GlobalStyles/>
    <AppContainer>
      <Wrapper>
        <Container>
        <AppRoutes onLogin={handleLogin} user={user}/>
        </Container>
      </Wrapper>
    </AppContainer>
    </>
  );
}

export default App;
