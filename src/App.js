
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Body/Services/Services';
import About from './components/Body/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
