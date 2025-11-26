import React from "react";
import '../Css/Experience.css'
function Experience() {
    return (
        <div>
            <div className="expContainer">
                <h2>Experience</h2>
                <div className="web">
                    <h2>Full Stack Developer</h2>
                    <h2>Projects</h2>
                    <p>Library Management System (MERN Stack)</p>
                    <ul>
                        <li>- Admin can add, update, delete books</li>
                        <li>- Borrower management with due-date tracking</li>
                        <li> - MongoDB schemas for Books, Categories, Borrowers</li>
                        <li>- JWT authentication</li>
                    </ul>
                    <p>ATM Web Application (React + Node)</p>
                    <ul>
                        <li>- Deposit/Withdraw/PIN verification</li>
                        <li>- Transaction history tracking</li>
                        <li>- Error handling for balance conditions</li>
                    </ul>
                    <p>Course & Student Management System</p>
                    <ul>
                        <li>- Add Course/Staff/Subject with CRUD operations</li>
                        <li>- Populate used for subject & staff dropdown</li>
                    </ul>
                </div>
                <div class="companyName">
                    <h3>Swachh Bharat Scheme - Bio Mining Project</h3>
                    <div class="comName">Progo Green Pvt Limited</div>
                    <p>Bio-mining includes segregation of waste to separate sand that can be used for agriculture
                        and dry waste that will be sent to cement factories to be used as fuel.
                        After completion of the entire process, the land becomes vacant and will be used for implementing other projects.</p>
                    <div class="exp">Mar 2022 To Apr 2025</div>
                </div>
                <div class="companyName">
                    <h3>Swachh Bharat Scheme - Bio Mining Project</h3>
                    <div class="comName">3R Management</div>
                    <p>Bio-mining includes segregation of waste to separate sand that can be used for agriculture
                        and dry waste that will be sent to cement factories to be used as fuel.
                        After completion of the entire process, the land becomes vacant and will be used for implementing other projects.</p>
                    <div class="exp">Jan 2019 To Mar 2022</div>
                </div>
                <div class="companyName">
                    <h3>HVAV Project Engineer</h3>
                    <div class="comName">VK Building Services</div>
                    <p>The	Project	Engineer (PE)	has	the	primary	role of	providing	the	necessary planning,organization,coordination,and direction	of	the	project	managers	to	meet	the	profit	and	growth	objectives	of	United
                        Mechanical,	Inc.		A	PE	also	provides	the	project	management	team	resources	to	act for	the	company	in	matters	pertaining	to	the	successful	progress	and	completion	of	assigned	projects
                        according	to	established	schedules	and	specifications.
                        They	assist	in	the	marketing	and	sales	activities	of	the	company,	including	business	development,	sales,	direct	customer relations,	estimating,	bidding,	pricing	and	project	negotiations.
                        The	Project	Engineer	performs	basic	engineering	for	selected projects	as	assigned	for	HVAC,	Plumbing	and	Controls with the oversight	of	the	Chief	Engineer...</p>
                    <div class="exp">Jully 2017 To Dec 2017</div>
                </div>
                <div class="companyName">
                    <h3>Junior Engineer - Humidification Plant</h3>
                    <div class="comName">Ramco Mills</div>
                    <p>Our range of air controlling equipment, fans,
                        filters and other air cleaning equipment is well known for its durability,
                        optimum performance, low power consumption and low maintenance.</p>
                    <div class="exp">May 2015 To Jully 2017</div>
                </div>
            </div>
        </div>
    )
}
export default Experience