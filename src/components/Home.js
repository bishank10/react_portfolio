import React from 'react';
import '../index.css'
import image from "../bishank.jpg"
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <>
      <div className="container-fluid bg-1 text-center">
        <h3 className="margin">I'm glad you are here!</h3>
        <img src={image} className="img-responsive img-circle margin" alt="Bird" width="350" height="350" />
        <h3>I'm one of the best web developer. I might be just the person that your team is looking for in order to create extraordinary web experience. Now, that you are here why not checkout some of my work below and learn more about me.</h3>
      </div>


      <div className="container-fluid bg-2 text-center">
        <h3 className="margin">What Am I?</h3>
        <p>Full Stack Web Developer with continuing background in computer science and life-long dedication to innovating. Widely known for the ability to solve real world problems utilizing my honed skill in HTML5, CCS, Bootstrap, and JavaScript, jQuery, MySQL, sequelize and React. Known among staff for strong wit and attention to detail no matter the complexity of the project. Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.</p>
        <a href="https://github.com/bishank10" className="btn btn-default btn-lg">
          <span>
            < FaGithubSquare />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/bishank-bohara-7040b417a/" className="btn btn-default btn-lg">
          <span>
            < GrLinkedin />
          </span>
        </a>
        <a href="#" className="btn btn-default btn-lg">
          <span>
            < SiGmail />
          </span>
        </a>
      </div>
    </>
  )
}

export default Home