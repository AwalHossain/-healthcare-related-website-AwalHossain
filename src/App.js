
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Body/Services/Services';
import About from './components/Body/About/About';
import MiddlePart from './components/Body/MiddlePart/MiddlePart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <MiddlePart />
      <Footer></Footer>
    </div>
  );
}

export default App;
