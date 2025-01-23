import Home from './Components/Home';
import Navbar from './Components/Nav';
// import Registration from './Components/Registration';
import About from './Components/about';
import Event from './Components/Slideshow';
import Team from './Components/Team';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



import './Components/Home.css';
import './Components/about.css';
import './Components/Slideshow.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Slideshow" element={<Event />} />
            {/* <Route path="/registration" element={<Registration />} /> */}
            <Route path="/Team" element={<Team />} />
            {/* <Route path="/achievement" element={<Achievement />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;