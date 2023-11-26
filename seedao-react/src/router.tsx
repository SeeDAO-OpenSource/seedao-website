import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Intro from "./pages/Intro";
import Journey from "./pages/Journey";
import Build from "./pages/Build";

const RouterLink = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/build" element={<Build />}></Route>
        {/* <Route path="/podcast" element={< />}></Route> */}
      </Routes>
    </Router>
  );
};

export default RouterLink;
