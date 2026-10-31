import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinos from './pages/Destinos';
import Ofertas from './pages/Ofertas';
import Contato from './pages/Contato';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}