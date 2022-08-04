import './App.css';
import Achivments from './Components/Achivments';
import HardWork from './Components/HardWork';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <HardWork/>
      <Achivments/>
    </div>
  );
}

export default App;
