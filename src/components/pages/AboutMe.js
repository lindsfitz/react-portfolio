import React from 'react';

export default function AboutMe() {
    return (
        <div>
            <div className="uk-container uk-container-expand" id="about-me">

                <div className="uk-container uk-container-medium" id="intro">
                    <h1>Thanks for visiting.</h1>
                    <div id="content">
                        <div>
                            <h3>I am a Seattle-based student in the University of Washington Full-Stack Development Certificate
                                Program.</h3>
                            <p>Highly motivated developer who is pationate about complex problem-solving.</p>
                        </div>
                        <img src="./assets/images/headshot.png" alt="me" />
                    </div>
                    <div id="btns">
                        {/* <a href="#portfolio"><button className="uk-button uk-button-default">Preview Work</button></a> */}
                        <a href="#contact-me"><button className="uk-button uk-button-default">Reach Out</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}