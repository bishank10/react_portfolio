import React from 'react';
import '../index.css';
import Congo from "./images/congo.png";
import Menu from "./images/menu.png"


function Projects() {
    return (
        <>
            <a href="project"></a>
            <div className="container-fluid bg-3 text-center">
                <h2 className="margin">PROJECTS</h2>
                <br />
                <div className="row">
                <div className="col-sm-4 projects">
                        <h2>Congo</h2>
                        <img src={Congo} className="img-responsive margin" alt="Image" />
                        <p>We named this project"Congo". This app uses various built-in and required packages to make the app fully
                        functional. Congo features various user friendly functionality. If you have something awesome that you
                        would like to share with others, this app is for you. This app simplifies the process of sharing your product
                        with the world. The app gives you the ability to sign up and have your own profile. Logging into the app with
                        your profile will let you post your product, view it and you can provide your feedback by liking or disliking
                        it.The app also gives you an advanced search option to help you navigate on the app. If you do not have a login
                        you can still view the website as a guest and have a look at all the products.
                        I played a key role by making the HTML template ready. I also added function</p>
                    </div>
                    <div className="col-sm-4 projects">
                        <h2>React-Menu</h2>
                        <img src={Menu} className="img-responsive margin" alt="Image" />
                        <p>We named this project"Congo". This app uses various built-in and required packages to make the app fully
                        functional. Congo features various user friendly functionality. If you have something awesome that you
                        would like to share with others, this app is for you. This app simplifies the process of sharing your product
                        with the world. The app gives you the ability to sign up and have your own profile. Logging into the app with
                        your profile will let you post your product, view it and you can provide your feedback by liking or disliking
                        it.The app also gives you an advanced search option to help you navigate on the app. If you do not have a login
                        you can still view the website as a guest and have a look at all the products.
                        I played a key role by making the HTML template ready. I also added function</p>
                    </div>
                    <div className="col-sm-4 projects">
                        <h2>Congo</h2>
                        <img src={Congo} className="img-responsive margin" alt="Image" />
                        <p>We named this project"Congo". This app uses various built-in and required packages to make the app fully
                        functional. Congo features various user friendly functionality. If you have something awesome that you
                        would like to share with others, this app is for you. This app simplifies the process of sharing your product
                        with the world. The app gives you the ability to sign up and have your own profile. Logging into the app with
                        your profile will let you post your product, view it and you can provide your feedback by liking or disliking
                        it.The app also gives you an advanced search option to help you navigate on the app. If you do not have a login
                        you can still view the website as a guest and have a look at all the products.
                        I played a key role by making the HTML template ready. I also added function</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;