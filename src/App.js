import './App.css';
import Achivments from './Components/Achivments';
import Footer from './Components/Footer';
import Hackathon from './Components/Hackathon';
import HardWork from './Components/HardWork';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Products from './Components/Products';
import Programmers from './Components/Programmers'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <HardWork/>
      <Achivments/>
      <Programmers/>
      <Hackathon/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
