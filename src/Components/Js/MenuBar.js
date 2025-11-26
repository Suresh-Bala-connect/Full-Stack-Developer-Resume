import React, { useState } from "react";
import '../Css/MenuBar.css'

import { Link } from "react-router-dom";
import img from '../my-photo.jpg'
function MenuBar() {
    // const[getOpt,setOpt]=useState('')
    return (
        <div className="container">
            <h2>Portfolio</h2>
            {/* <div className="photo">
                <img src={img}></img>
            </div> */}
            <div className="about">
                {/* <button>About</button> */}
                  <Link to="/about"><button>About</button></Link>
            </div>
            <div className="experience">
                {/* <button>Experience</button> */}
                <Link to="/experience"><button>Experience</button></Link>
            </div>
            <div className="edu">
                {/* <button>Education</button> */}
                   <Link to="/education"><button>Education</button></Link>
            </div>
            <div className="skill">
                {/* <button>Skills</button> */}
                 <Link to="/skill"><button>Skills</button></Link>
            </div>
            <div className="inter">
                {/* <button>Interests</button> */}
                 <Link to="/interests"><button>Interests</button></Link>
            </div>
        </div>
    );
}

export default MenuBar;
