import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed:', location.pathname);
  }, [location]);

  return (
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
};

export default App;
