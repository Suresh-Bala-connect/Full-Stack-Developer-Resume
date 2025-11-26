import React from "react";
import '../Css/About.css'

import { SlSocialFacebook } from "react-icons/sl";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";

function About() {
    return (
        <div>
            <div className="aboutContainer">
                <div className="name">
                    <h1>Suresh<span>bala</span> </h1>
                </div>
                <div className="address">
                    <h3>Rajapalayam,626117·<br></br>
                        Mobile-9751232747</h3>
                    <h3>E mail  -  sureshbalaconnect@gmail.com</h3>
                    <a href="https://github.com/Suresh-Bala-connect" target="_blank">My Git Hub</a>
                    
                </div>
                <div className="aboutObj">
                    <p>I am able to handle multiple tasks on a daily basis.<br></br>
                        I use a creative approach to problem solve.<br></br>I am always energetic and eager to learn new skills.<br></br>
                        I have experience working as part of a team and individually.<br></br>
                        I am hardworking and always the last to leave the office in the evening.<br></br>
                        I work with the team to provide imaginative solutions for our customers<br></br>I am motivated to go to the gym before work to get fit and healthy<br></br>
                        Co-workers rely on me to be on time.<br></br></p>
                </div>
                <div className="socialIcon">
                    <SlSocialFacebook /><RiInstagramLine /><FaWhatsapp /><IoMailUnreadOutline />
                </div>
            </div>
        </div>
    )
}
export default About;