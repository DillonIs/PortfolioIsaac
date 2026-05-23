import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import RedTeam1 from "./components/Projects/Writeups/RedTeam1";
import RedTeam2 from "./components/Projects/Writeups/RedTeam2";
import RedTeam3 from "./components/Projects/Writeups/RedTeam3";
import BlueTeam1 from "./components/Projects/Writeups/BlueTeam1";
import BlueTeam2 from "./components/Projects/Writeups/BlueTeam2";
import BlueTeam3 from "./components/Projects/Writeups/BlueTeam3";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/writeup/redteam1" element={<RedTeam1 />} />
          <Route path="/writeup/redteam2" element={<RedTeam2 />} />
          <Route path="/writeup/redteam3" element={<RedTeam3 />} />
          <Route path="/writeup/blueteam1" element={<BlueTeam1 />} />
          <Route path="/writeup/blueteam2" element={<BlueTeam2 />} />
          <Route path="/writeup/blueteam3" element={<BlueTeam3 />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
