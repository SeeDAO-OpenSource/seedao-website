import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Intro from './pages/Intro';
import Journey from './pages/Journey';
import Build from './pages/Build';
import Footer from './components/layout/Footer';
import Privacy from './pages/privacy';
import Tos from './pages/tos';

const RouterLink = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/build" element={<Build />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/tos" element={<Tos />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterLink;
