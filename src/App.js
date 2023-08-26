import './App.css';
import Bar from './components/Bar/Bar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/CenterBlock/CenterBlock';
import SideBar from './components/SideBar/SideBar';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000) 
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav/>
            <CenterBlock isLoading={isLoading}/>
            <SideBar isLoading={isLoading}/>
          </main>
          <Bar isLoading={isLoading}/>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
