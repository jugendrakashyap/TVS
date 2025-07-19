import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="tvs_svg"></div>
                <div style={{ display: "flex" }}>
                    <div className="footer_col">
                        <h3 style={{ lineHeight: "60px", color: "white" }}>MOTORCYCLES</h3>
                        <p>TVS Apache</p>
                        <ul className="item">
                            <li>RTR310</li>
                            <li>RR310</li>
                            <li>RTR 200 4V</li>
                            <li>RTR 180</li>
                            <li>RTR 160 4V</li>
                            <li>RTR 160</li>
                        </ul>
                        <p>Ronin</p>
                        <p>Raider</p>
                        <p>Redeon</p>
                        <p>Sport</p>
                        <p>Star City+</p>
                    </div>
                    <div className="footer_col">
                        <h3 style={{ lineHeight: "60px", color: "white" }}>ELECTRIC SCOOTERS</h3>
                        <p>TVS iQube</p>
                        <ul className="item">
                            <li>iQube 2.2 kWh</li>
                            <li>iQube 3.4 kWh</li>
                            <li>iQube S 3.4 kWh</li>
                            <li>iQube ST 3.4 kWh</li>
                            <li>iQube S 5.1 kWh</li>
                        </ul>
                        <p>TVS X</p>

                        <h3 style={{ margin: "30px 0 5px 0", color: "white" }}>SCOOTERS</h3>
                        <p>Jupiter 110</p>
                        <p>Jupiter 125</p>
                        <p>Ntorq</p>
                        <p>Zest 110</p>
                    </div>
                    <div className="footer_col">
                        <h3 style={{ lineHeight: "60px", color: "white" }}>MOPEDS</h3>
                        <p>XL 100</p>

                        <h3 style={{ margin: "30px 0 5px 0", color: "white" }}>THREE WHEELERS</h3>
                        <p>King Deluxe</p>
                        <p>King Duramax</p>
                        <p>King Duramax Plus</p>
                        <p>King Kargo</p>

                        <h3 style={{ margin: "30px 0 5px 0", color: "white" }}>RIDES & EVENTS</h3>
                        <p>TVS Racing</p>
                        <p>TVS Motosoul</p>
                        <p>TVS Storm the Sands 2024</p>
                    </div>
                    <div className="footer_col">
                        <h3 style={{ lineHeight: "60px", color: "white" }}>INVESTORS</h3>
                        <p>Overview</p>
                        <p>Finacial Reports</p>
                        <p>Communication</p>

                        <h3 style={{ margin: "30px 0 5px 0", color: "white" }}>TVS DEALER LOCATOR</h3>
                        <p>Two Wheeler Dealers</p>
                        <p>Three Wheeler Dealers</p>
                        <p>Super Premium Dealers</p>
                        <p>Electric Scooter Dealers</p>
                        <p>AMD & AD Dealers</p>
                        <p>iQube Dealers</p>
                    </div>
                    <div className="footer_col">
                        <h3 style={{ lineHeight: "60px", color: "white" }}>ABOUT US</h3>
                        <p>Overview</p>
                        <p>Company Vision</p>
                        <p>Achievements</p>
                        <p>Careers</p>
                        <p>Contact Us</p>

                        <h3 style={{ margin: "30px 0 5px 0", color: "white" }}>NEWS & MEDIA</h3>
                        <p>News</p>
                        <p>Press Release</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer_col">
                        <h3 style={{ lineHeight: "60px", color: "white" }}>SHOP</h3>
                        <p>Accessories</p>
                        <p>Merchandise</p>
                        <p>Parts & Lubricants</p>

                        <h3 style={{ margin: "30px 0 5px 0", color: "white" }}>TVS CONNECT APP</h3>
                    </div>
                </div>
                <div className="contact" style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ margin: "20px 15px", paddingRight: "10px", borderRight: "1px solid rgba(255, 255, 255, 0.4)" }}>
                        <h4 style={{ color: "white", marginBottom: "10px", }}>CONTACT</h4>
                        <a href="#" style={{ textDecoration: "none", color: "white" }}>1800 2587 555</a>
                </div>
                <div style={{ margin: "20px 15px", paddingRight: "10px", borderRight: "1px solid rgba(255, 255, 255, 0.4)" }}>
                    <h4 style={{ color: "white", marginBottom: "10px" }}>EMAIL</h4>
                    <a href="#" style={{ textccdecoration: "none", color: "white" }}>customercare@tvsmoto.com</a></div>
                <div style={{ margin: "20px 15px", paddingRight: "10px", borderRight: "1px solid rgba(255, 255, 255, 0.4)" }}>
                    <h4 style={{ color: "white", marginBottom: "10px" }}>NEED ROAD SIDE ASSISTANCE</h4>
                    <a href="#" style={{ textDecoration: "none", color: "white" }}>Dial - 1800 258 7111 and Press "1"</a></div>
                <div></div>
                <div></div>
            </div>
            <div style={{ color: "white", fontSize: "12px", padding: "10px" }}>&copy TVS Motor. All Rights Reserved | Privacy
                Policy | Disclaimer | Cookie Policy</div>
        </div>
        </footer >
    )
}

export default Footer