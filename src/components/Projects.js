import React from 'react';
import '../index.css';
import Congo from "./images/congo.png";
import Menu from "./images/menu.png";
import Giftr from "./images/giftHome.PNG";


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
                        <a href ="https://vast-fortress-76466.herokuapp.com/"><img src={Congo} className="img-responsive margin card" alt="Image" /> </a>
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
                    <a href="https://github.com/bishank10/react_project_menu"><img src={Menu} className="img-responsive margin card" alt="Image" /></a>
                    <p>This is a react menu web which was initially created for a restaurant here in Boulder,Colorado. This website is completely built in react and uses various libraries to make the UI smooth and give it that modern edge. The app is react based and most of the functionality were made dynamic. This also helps in the maintenance of the app by minimizing as the changes are dynamic. The web page is suitable for any restaurant will to excel via web.  </p>
                </div>
                <div className="col-sm-4 projects">
                    <h2>React-Giftr</h2>
                    <a href="https://giftr-registry.herokuapp.com/"><img src={Giftr} className="img-responsive margin card" alt="Image" /></a>
                    <p>We named this project "GIFTR". This is a full stack app that was built using MERN(Mongoose, Express, React, Node ) to ease the pain of finding gifts or add gifts to the list during festive seasons. It simplifies the process and allows users to add their gifts which can be retrieved by any other users. Users  can also leave a review on the product.
                    I played a key role in developing the client side and the server side of review and Review form components. I also assisted in setting up the route listeners on the server side for the rest of the components.
                    Designed a RESTful API using express, node and mongoose that allowed users to save gifts and reviews.
</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Projects;