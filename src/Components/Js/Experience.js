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
                    {/* Project 1 */}
                    <p><strong>Product Warranty Management System (React, Node.js, MongoDB)</strong></p>
                    <ul>
                        <li>- User can add and manage product warranty details</li>
                        <li>- Warranty expiry tracking with active & expired status</li>
                        <li>- Secure authentication using JWT</li>
                        <li>- MongoDB schemas for Users and Products</li>
                        <li>- <a href="https://product-warranty-db.onrender.com" target="_blank" rel="noreferrer">Live Demo</a></li>
                    </ul>
                    {/* Project 2 */}
                    <p><strong>E-Commerce Application (React)</strong></p>
                    <ul>
                        <li>- Product listing with category-based filtering</li>
                        <li>- Add to cart and remove from cart functionality</li>
                        <li>- State management using React Hooks</li>
                        <li>- Responsive UI for mobile and desktop</li>
                        <li>- <a href="https://e-comm-product.onrender.com" target="_blank" rel="noreferrer">Live Demo</a></li>
                    </ul>
                    {/* Project 3 */}
                    <p><strong>Library Management System (MERN Stack)</strong></p>
                    <ul>
                        <li>- Admin can add, update, delete books</li>
                        <li>- Borrower management with due-date tracking</li>
                        <li> - MongoDB schemas for Books, Categories, Borrowers</li>
                        <li>- JWT authentication</li>
                        <li>- <a href="https://library-model.onrender.com" target="_blank" rel="noreferrer">Live Demo</a></li>
                    </ul>
                    {/* Project 4 */}
                    <p><strong>ATM Web Application (React + Node)</strong></p>
                    <ul>
                        <li>- Deposit/Withdraw/PIN verification</li>
                        <li>- Transaction history tracking</li>
                        <li>- Error handling for balance conditions</li>
                        <li>- <a href="https://atm-fucnction.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a></li>
                    </ul>
                    {/* Project 5 */}
                    <p><strong>Simple To-Do List Application (MERN Stack)</strong></p>
                    <ul>
                        <li>- User can add, edit, and delete tasks</li>
                        <li>- Task status management (completed / pending)</li>
                        <li>- Data stored and managed using MongoDB</li>
                        <li>- REST API built with Node.js and Express</li>
                        <li>- React frontend with state management using Hooks</li>
                        <li>- <a href="https://simple-todolist-9x0m.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a></li>
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