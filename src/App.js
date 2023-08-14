import './App.css';
import Bar from './components/Bar/Bar';
import Nav from './components/Nav/Nav';
import CenterBlock from './components/CenterBlock/CenterBlock';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav/>
            <CenterBlock/>
            <SideBar/>
          </main>
          <Bar/>
          <footer className="footer"></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
