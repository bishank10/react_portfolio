import React from 'react';
import '../index.css'
import image from "../bishank.jpg"
import Projects from "../components/Projects"
import About from "../components/About"

function Home() {
    return (
        <>
            <div className="container-fluid bg-1 text-center">
                <h3 className="margin">Nice to meet you!</h3>
                <img src={image} className="img-responsive img-circle margin" alt="Bird" width="350" height="350" />
                <h3> My name is Bishank Bohara. Just in case you were wondering, I'm a proficient full stack software developer with continuing background in computer science and life-long dedication to innovating.I'm widely known for the ability to solve real world problems utilizing my honed skill in HTML5, CCS, Bootstrap, JavaScript, jQuery, MySQL, sequelize, MongoDb, Moongoose and React. Known among staff for strong attention to detail no matter the complexity of the project.  Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web. Bonus, I'm also a profound explainer of the code in a simpler way. </h3>
            </div>
            <About />
            <Projects />
        
        </>
    )
}

export default Home