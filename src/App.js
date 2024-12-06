import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Topics from './components/topics/Topics';
import SpeakerList from './components/speakers/SpeakerList';
import EventGalleryList from './components/eventgallery/EventGalleryList';
import Exhibition from './components/exhibition/Exhibition';
import Convener from './components/convener/Convener';


function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <Header />
    <About />
    <Features />
    <Topics />
    <Convener />
    <SpeakerList heading = { "Speakers" } />
    <EventGalleryList />
    <Exhibition />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
