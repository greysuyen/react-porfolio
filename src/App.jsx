import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Profile from './components/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Stacks from './pages/Stacks';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router basename="/react-portfolio">
      <>
        <Profile />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Stacks />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;


