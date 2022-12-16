import './App.css';
import Hero from './component/Hero';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <div className="main">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
