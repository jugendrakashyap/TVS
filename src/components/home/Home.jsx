import React from 'react'
import './home.css'

function Home() {
    return (
        <>
            

            <main style={{ paddingTop: "95px" }}>
                <section className="hero">
                    <img style={{ width: "100vw" }}
                        src="https://www.tvsmotor.com/-/media/HomeOptimizedImages/TVS-Home-Page-WebP/Desktop/Vehicles/Motorcycles/MAIN_KV_1366x600-1-20241024-054955.webp"
                        alt="img"/>
                </section>

                <section className="sec sec1">
                    <div>
                        <div className="lavel" style={{ backgroundColor: "#f12a00" }}>
                            <p>THE MAKING OF</p>
                            <p style={{ fontSize: "2rem", fontWeight: "600" }}>OUR STORIES</p>
                        </div>
                    </div>
                    <div className="stories">
                        <div className="story story1">
                            <h3>TVS iQube Electric</h3>
                            <h1 style={{ fontSize: "2rem", marginTop: "15px" }}>The Sri Lankan Odyssey</h1>
                        </div>
                        <div className="story story2">
                            <h3>TVS Racing</h3>
                            <h1 style={{ fontSize: "2rem", marginTop: "15px" }}>Racing DNA Unleashed</h1>
                        </div>
                        <div className="story story3">
                            <h3>Safety</h3>
                            <h1 style={{ fontSize: "2rem", marginTop: "15px" }}>Protect Little Riders</h1>
                        </div>
                    </div>
                </section>

                <section className="sec sec2">
                    <div>
                        <div className="lavel" style={{ backgroundColor: "#183883" }}>
                            <p>DISCOVER YOUR RIDE</p>
                            <p style={{ fontSize: "2rem", fontWeight: "600" }}>VEHICLES</p>
                        </div>
                    </div>
                    <div className="vehicle_types">
                        <ul className="vehicle_list">
                            <li className="vehicle_type" style={{ borderBottom: "3px solid red" }}>SCOOTERS</li>
                            <li className="vehicle_type">MOTORCYCLES</li>
                            <li className="vehicle_type">MOPEDS</li>
                            <li className="vehicle_type">ELECTRIC</li>
                            <li className="vehicle_type">THREE WHEELERS</li>
                        </ul>
                        <select name="" id="" className="cities">
                            <option value="">Delhi</option>
                            <option value="">Assam</option>
                            <option value="">Gurugram</option>
                        </select>
                    </div>
                    <div style={{ display: "flex", width: "100vw" }}>
                        <div className="vehicle_names">
                            <div className="vehicle_name" style={{ border: "1px solid red" }}>
                                <div className="vehicle_logo logo1"></div>
                                <div style={{ marginLeft: "10px" }}>
                                    <h3 style={{ marginBottom: "5px" }}>TVS Ntorq</h3>
                                    <span className="parameters">124.8cc</span>
                                    <span className="parameters">7.5kW @ 7000 rpm</span>
                                    <span className="parameters">110kg</span>
                                </div>
                            </div>
                            <div className="vehicle_name">
                                <div className="vehicle_logo logo2"></div>
                                <div style={{ marginLeft: "10px" }}>
                                    <h3 style={{ marginBottom: "5px" }}>TVS Ntorq</h3>
                                    <span className="parameters">124.8cc</span>
                                    <span className="parameters">5.9kW @ 6500 rpm</span>
                                    <span className="parameters">160kg</span>
                                </div>
                            </div>
                            <div className="vehicle_name">
                                <div className="vehicle_logo  logo3"></div>
                                <div style={{ marginLeft: "10px" }}>
                                    <h3 style={{ marginBottom: "5px" }}>TVS Ntorq</h3>
                                    <span className="parameters">113.3cc</span>
                                    <span className="parameters">5.9kW @ 6500 rpm</span>
                                    <span className="parameters">160kg</span>
                                </div>
                            </div>
                            <div className="vehicle_name">
                                <div className="vehicle_logo logo4"></div>
                                <div style={{ marginLeft: "10px" }}>
                                    <h3 style={{ marginBottom: "5px" }}>TVS Ntorq</h3>
                                    <span className="parameters">113.3cc</span>
                                    <span className="parameters">5.9kW @ 6500 rpm</span>
                                    <span className="parameters">160kg</span>
                                </div>
                            </div>
                        </div>
                        <div className="detais">
                            <div className="photo"></div>
                            <div
                                style={{ display: "flex", alignItems: "center", paddingLeft: "15px", justifyContent: "space-between", width: "60vw", height: "90px", backgroundColor: "white" }}>
                                <h2>TVS Jupiter</h2>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <h5>Ex showroom, Delhi</h5>
                                        <h5><span style={{ color: "red", fontSize: "18px" }}>₹ 74 691 </span>Onwards</h5>
                                    </div>
                                    <button className="know_more">KNOW MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more_vehicles">
                        <button className="more_vehicles_btn">Veiw All Scooters</button>
                    </div>
                </section>

                <section className="sec sec3">
                    <div className="lavel" style={{ backgroundColor: "#f12a00" }}>
                        <p>FIND A RIDE NEAR YOU</p>
                        <p style={{ fontSize: "2rem", fontWeight: "600" }}>DEALERS</p>
                    </div>
                    <p style={{ marginLeft: "50px", marginTop: "20px", lineHeight: "60px", color: "rgb(80, 80, 80)" }}>Find your nearest
                        authorized TVS Motor dealer with our easy to use interactive tool. Get all details including phone
                        number, address, map and driving directions.</p>
                    <div className="bg_img">
                        <h1 style={{ marginTop: "30px", fontSize: "40px", fontWeight: "600", color: "white" }}>4000+</h1>
                        <p style={{ color: "white" }}>Dealers Across India</p>
                        <div className="cards">
                            <div className="card card1"></div>
                            <div className="card card2"></div>
                            <div className="card card3"></div>
                            <div className="card card4"></div>
                        </div>
                        <div className="text">
                            <a href="#" style={{ fontSize: "25px", textDecoration: "none", color: "white" }}>Become a TVS Motor Dealer</a>
                            <p style={{ marginTop: "20px" }}>Partnering with TVSM gives you the opportunity to sell diversified
                                products to possibly the
                                largest set of customers, thus maximizing profits. Becoming a TVSM dealer could also offer a
                                good supplementary business to your existing business, with an assured income every month at a
                                minimal initial investment in infrastructure.</p>
                        </div>
                    </div>
                </section>

                <section className="sec sec4">
                    <div className="lavel" style={{ backgroundColor: "#183883" }}>
                        <p>WINNERS AT HEART</p>
                        <p style={{ fontSize: "2rem", fontWeight: "600" }}>RACING</p>
                    </div>
                    <div className="winners"></div>
                </section>

                <section className="sec sec5">
                    <div className="lavel" style={{ backgroundColor: "#f12a00" }}>
                        <p>WHAT GUIDES US</p>
                        <p style={{ fontSize: "2rem", fontWeight: "600" }}>ABOUT US</p>
                    </div>
                    <p style={{ margin: "50px 50px 30px 50px", color: "rgb(80, 80, 80)" }}>We are committed to being a highly
                        profitable,
                        socially responsible, and leading manufacturer of high value for money, environmentally friendly,
                        lifetime personal transportation products under the TVSM brand, for customers predominantly in Asian
                        markets and to provide fulfillment and prosperity for employees, dealers, and suppliers.</p>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0 50px 25px 50px" }}>
                        <div className="about" style={{ display: "flex", flexDirection: "column" }}>
                            <div className="about1"></div>
                            <h4 style={{ margin: "25px 25px 0 25px" }}>MORE THAN 50 MILLION VEHICLES ON ROAD</h4>
                            <p style={{ margin: "5px 25px 0 25px", color: "rgb(107, 107, 107)" }}>With more than 50 million vehicles on
                                road, TVSM celebrates mobility and progress for countless number of people.</p>
                        </div>
                        <div className="about">
                            <div className="about2"></div>
                            <h4 style={{ margin: "25px 25px 0 25px" }}>A VEHICLE FOR EVERYONE</h4>
                            <p style={{ margin: "5px 25px 0 25px", color: "rgb(107, 107, 107)" }}>With the largest portfolio of
                                products, ranging from mopeds to premium performance bikes, TVSM has a vehicle that is perfectly
                                fit for you.</p>
                        </div>
                        <div className="about">
                            <div className="about3"></div>
                            <h4 style={{ margin: "25px 25px 0 25px" }}>PRESENCE IN 80+ COUNTRIES</h4>
                            <p style={{ margin: "5px 25px 0 25px", color: "rgb(107, 107, 107)" }}>TVSM vehicles are providing joy to
                                customers across more than 80 countries, and this footprint is only growing.</p>
                        </div>
                    </div>
                    <div className="more_vehicles">
                        <button className="more_vehicles_btn">MORE ABOUT TVS MOTORS</button>
                    </div>
                </section>

                <section className="sec sec6">
                    <div className="lavel" style={{ backgroundColor: "#f12a00" }}>
                        <p>OUR PRIDE</p>
                        <p style={{ fontSize: "2rem", fontWeight: "600" }}>ACHIEVEMENTS</p>
                    </div>
                    <h3 style={{ margin: "50px 0 30px 50px", color: "rgb(41, 41, 41)" }}>AWARDS</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0 50px 25px 50px" }}>
                        <div className="about" style={{ display: "flex", flexDirection: "column" }}>
                            <div className="award1"></div>
                            <h4 style={{ margin: "25px 25px 0 25px" }}>MORE THAN 50 MILLION VEHICLES ON ROAD</h4>
                            <p style={{ margin: "5px 25px 0 25px", color: "rgb(107, 107, 107)" }}>With more than 50 million vehicles on
                                road, TVSM celebrates mobility and progress for countless number of people.</p>
                        </div>
                        <div className="about">
                            <div className="award2"></div>
                            <h4 style={{ margin: "25px 25px 0 25px" }}>A VEHICLE FOR EVERYONE</h4>
                            <p style={{ margin: "5px 25px 0 25px; color: rgb(107, 107, 107)" }}>With the largest portfolio of
                                products, ranging from mopeds to premium performance bikes, TVSM has a vehicle that is perfectly
                                fit for you.</p>
                        </div>
                        <div className="about">
                            <div className="award3"></div>
                            <h4 style={{ margin: "25px 25px 0 25px" }}>PRESENCE IN 80+ COUNTRIES</h4>
                            <p style={{ margin: "5px 25px 0 25px; color: rgb(107, 107, 107)" }}>TVSM vehicles are providing joy to
                                customers across more than 80 countries, and this footprint is only growing.</p>
                        </div>
                    </div>
                    <div className="more_vehicles">
                        <button className="more_vehicles_btn">View Awards</button>
                    </div>
                </section>
            </main>

            
        </>
    )
}

export default Home