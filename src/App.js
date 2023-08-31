import Bar from './components/Bar/Bar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/CenterBlock/CenterBlock';
import SideBar from './components/SideBar/SideBar';
import { useEffect, useState } from 'react';
import { GlobalStyles, AppContainer, Wrapper, Container, Main } from './App.styles.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000) 
  }, []);
  return (
    <>
    <GlobalStyles/>
    <AppContainer>
      <Wrapper>
        <Container>
          <Main>
            <Nav/>
            <CenterBlock isLoading={isLoading}/>
            <SideBar isLoading={isLoading}/>
          </Main>
          <Bar isLoading={isLoading}/>
        </Container>
      </Wrapper>
    </AppContainer>
    </>
  );
}

export default App;
