import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "../images/undraw_in_the_office_re_jtgc.svg"

const Home= () => {
    return (<>
        <section id="header" className="d-flex align-items-centre">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1> Grow your business with <strong className="brand-name">TCS</strong></h1>
                            <h3 className="my-3"> Learn more about our team of skilled developers can help you bring your ideas to reality </h3>
                            <div className="mt-3">
                                <NavLink to="/about" className= "btn btn-primary btn-get-started">
                                    About Us
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 order-1 order-lg-2">
                            <img src={homeImg} alt="" className="img-fluid animated" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Home;