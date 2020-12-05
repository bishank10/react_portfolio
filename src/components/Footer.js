import React from 'react';
import '../index.css';
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";


function Footer() {
    return (
        <>
            <footer className="container-fluid bg-4 text-center">
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
            </footer>
        </>
    )
};

export default Footer;