import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Skill from "./Skill";
import Intersts from "./Intersts"

function Home(){
    return(
        <div>
            <About/>
            <Education/>
            <Experience/>
            <Skill/>
            <Intersts/>
        </div>
    )
}
export default Home;