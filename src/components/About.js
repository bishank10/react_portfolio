import React from 'react';
import '../index.css'
import image from "../bishank.jpg"
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

function Home() {
    return (
        <>
            <div className="container-fluid bg-2 text-center">
                <h2 className="margin">About Me</h2>
                <p>Besides being an excellent programmer and a web developer, there are numerous unique qualities which defines me as a person and a team player. Let's talk about being a team player, I believe that working as a team to be the best is when we make miracles happen. I value being the best as a part of a team . Buy now we know that problems are our friends in programming world.How about a critical thinking problem solver?Yes, thats me, I enjoy solving problems. I think of problems as puzzles and I solve them efficiently. Communication skills, analytical thinking, perseverance and creativity are some other qualities I apply to be the best.
                <br></br>
                How about the my values and culture?
                We all know, there is  a million way to solve a problem. So, I enjoy working on team that prospers on diverse ideas and innovative technique. Not to forget, I will be adding those qualities to the team, we will do great!. Bonus, I'm also a profound explainer of the code in a simpler way. Now that you know me a little better, feel free to reach out to me. I would love to talk to you more about how I could be a great addition to the team.</p>
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