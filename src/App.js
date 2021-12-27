import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './components/Contact';
import Service from './components/Service';
import Pnf from './components/Pnf';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
