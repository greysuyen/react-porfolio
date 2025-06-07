import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Profile />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;


