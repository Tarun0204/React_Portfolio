import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => (
    <div className="portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );

export default App;
