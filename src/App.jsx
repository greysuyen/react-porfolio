import { HashRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <>
        <Profile />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;


