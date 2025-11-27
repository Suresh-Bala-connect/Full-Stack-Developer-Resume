import React from "react";
import '../Css/Education.css'
function Education() {
    return (
        <div className="eduContainer">
            <h2>Education</h2>
            <div className="insdu">
                <h2 className="intName">PRIST UNIVERSITY</h2>
                <h3 className="course">B.Tech- Part Time</h3>
                <h3 classname="depat"> Mechanical Engineering</h3>
                <h3 className="time">2019 - 2022</h3>
            </div>
            <div className="insdu">
                <h2 className="intName">P.A.C.R.Polytechnic College</h2>
                <h3 className="course">Diploma In Mechanical Engineering</h3>
                <h3 classname="depat"> Mechanical Engineering</h3>
                <h3 className="time">2010 - 2012</h3>
            </div>
             <div className="insdu">
                <h2 className="intName">P.A.C.M High School</h2>
                <h3 className="course">12th Standard</h3>
                <h3 className="time">2008 - 2010</h3>
            </div>

        </div>
    )
}
export default Education;