import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
    let navigate = useNavigate();
    return (
        <div>
            <div id="about-me">
                <div id="intro">
                    <h1>Thanks for visiting.</h1>
                    <br></br>
                    <div id="content">
                        <div>
                            <h3>My name is Lindsay Fitzgerald and I am a Seattle-based recent graduate of the University of Washington Full-Stack Web Development Certificate Program.</h3>
                            <br></br>
                            <p>I am a highly motivated developer who is passionate about complex problem-solving. I am profficient in Front-End and Back-End development and have a diverse set of skills including HTML, CSS, JavaScript, Node.JS, and React.
                            </p>
                            <br></br>
                        </div>
                        <img src="/assets/images/headshot.png" alt="me" />
                    </div>
                    <div id="btns">
                        <button onClick={() => navigate('contact')}>REACH OUT</button>
                        <button onClick={() => navigate('projects')}>PREVIEW WORK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}