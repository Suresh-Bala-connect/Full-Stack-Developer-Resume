import React from "react";
import '../Css/Skill.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
function Skill() {
    return (
        <div className="skillCont">
            <h2>Skill & Strengths </h2>
            <div className="techSkill">
                <h3>Technical Skills</h3>
                <ul>
                    <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React JS, Axios, Responsive Design</li>
                    <li>Backend: Node.js, Express.js, REST API, JWT Authentication</li>
                    <li>Database: MongoDB, Mongoose</li>
                    <li>Tools: Git, GitHub, Postman, VS Code, Netlify, Render</li>
                </ul>
            </div>
            <div className="skillIcon">
                <ul>
                    <li><FaHtml5 /></li>
                    <li><FaCss3Alt /></li>
                    <li><TbBrandJavascript /></li>
                    <li><RiReactjsLine /></li>
                    <li><IoLogoNodejs /></li>
                    <li><SiMongodb /></li>
                </ul>
            </div>
            <div className="strength">
                <ul>
                     <h3>Strengths</h3>
                    <li>Strong Logical Thinking</li>
                    <li>Fast Learner</li>
                    <li>Team Collaboration</li>
                    <li>Clean Coding</li>
                </ul>

            </div>
        </div>
    )
}
export default Skill;