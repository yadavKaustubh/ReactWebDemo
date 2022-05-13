import React from "react";
import ExCard from "../Card";
import {NavLink} from "react-router-dom";

const Projects= () => {
    return (
        <>
            <div className="projects d-flex flex-column ">
                <h1 className= "pt-3 pb-3">Projects and Services</h1>
                <div className="cardContainer">
                    <ExCard/>
                    <ExCard/>
                    <ExCard/>
                    <ExCard/>
                    <ExCard/>
                </div>
            
                <div className="pt-4 mt-4 justify-content-center text-center">
                    <h3> Interested in availing our services, feel free to  </h3>
                    <NavLink to= "/contact" className="btn btn-primary btn-get-started">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </>      
    )
}

export default Projects;