// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './Components/Js/Navbar';

// import User from "./Components/Js/User";

import MenuBar from "./Components/Js/MenuBar";
import About from "./Components/Js/About";
import Experience from "./Components/Js/Experience";
import Education from "./Components/Js/Education";
import Skill from "./Components/Js/Skill";
import Interests from "./Components/Js/Intersts";
import Home from "./Components/Js/Home"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <MenuBar />

          <Routes>
           
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/interests" element={<Interests />} />
             <Route path="/" element={<Home />} />
            
          </Routes>

        </header>
      </div>
    </BrowserRouter>
    // <div className="">
    //   <About/>
    // </div>
  );
}

export default App;
