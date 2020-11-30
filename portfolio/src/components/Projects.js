import React from 'react';
import '../index.css'
import image from "../bishank.jpg"


function Projects() {
    return (
        <>
            <div className="container-fluid bg-3 text-center">
                <h3 className="margin">Where To Find Me?</h3><br />
                <div className="row">
                    <div className="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={image} className="img-responsive margin" alt="Image" />
                    </div>
                    <div className="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={image} className="img-responsive margin" alt="Image" />
                    </div>
                    <div className="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={image} className="img-responsive margin" alt="Image" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;