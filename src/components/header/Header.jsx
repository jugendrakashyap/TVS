import React from 'react'
import './header.css'

function Header() {
    return (
        <header style={{ position: "fixed" }}>
            <div style={{ height: "45px" }}>
                <select name="" id="" className="header_select">
                    <option value="">India</option>
                    <option value="">USA</option>
                    <option value="">Pakistan</option>
                </select>
                <a href="#" className="header_text">Dealer Locator</a>
                <a href="#" className="header_text">Test Ride</a>
                <a href="#" className="header_text">Booking</a>
            </div>
            <div>
                <div className="logo">
                    <img src="https://www.tvsmotor.com/-/media/Feature/Header/TVSLogo-hr.svg?la=en&hash=034409D6FBB73C2421FCC22BC6A52B58"
                        alt="img" />
                </div>
                <nav style={{ backgroundColor: "rgba(255, 255, 255, 0.616)", height: "50px" }}>
                    <ul className="dropdown-toggle">
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>ABOUT US</p>
                                <div className="mini-menu"></div>
                            </div>
                            <ul className="options sec1">
                                <li className="option">Overview</li>
                                <li className="option">Company Vision</li>
                                <li className="option">Achievements</li>
                                <li className="option">Careers</li>
                                <li className="option">Contact Us</li>
                            </ul>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>OUT PRODUCTS</p>
                            </div>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>OUR SERVICE</p>
                            </div>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>INVESTORS</p>
                                <div className="mini-menu"></div>
                            </div>
                            <ul className="options sec4">
                                <li className="option">Overview</li>
                                <li className="option">Finacial Reports</li>
                                <li className="option">Investor Information</li>
                                <li className="option">Investor Communication</li>
                                <li className="option">SEBI Discloser</li>
                            </ul>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>SUSTAINABILITY</p>
                                <div className="mini-menu"></div>
                            </div>
                            <ul className="options sec5">
                                <li className="option">ESG Profile</li>
                                <li className="option">Option2</li>
                                <li className="option">Option3</li>
                            </ul>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>MEDIA</p>
                                <div className="mini-menu"></div>
                            </div>
                            <ul className="options sec6">
                                <li className="option">Press Release</li>
                                <li className="option">News</li>
                                <li className="option">Blog</li>
                                <li className="option">Press Kit</li>
                                <li className="option">Media Contact</li>
                            </ul>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>INTERNATIONAL</p>
                            </div>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <p>SHOP</p>
                                <div className="mini-menu"></div>
                            </div>
                            <ul className="options sec6">
                                <li className="option">Accesories & Merchandise</li>
                                <li className="option">Parts & Lubricants</li>
                            </ul>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu">
                                <img src="https://www.tvsmotor.com/-/media/TVSv2/10-05-23/tvs-racing-logo-img.webp?la=en&h=20&w=116&hash=E63D0A2DDC9FE7F7288F9EDC6314DA34"
                                    alt="img" />
                            </div>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu login_btn"></div>
                        </li>
                        <li className="dropdown-menu">
                            <div className="menu cart_btn"></div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header