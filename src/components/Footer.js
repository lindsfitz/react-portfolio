import React from 'react';
import MaterialIcon from 'material-icons-react';

export default function Footer() {
    return (
        <div id="contact-links">
            <div className="icon-links">
                <a href="mailto: lindsaytfitz@gmail.com"><MaterialIcon icon="email" /></a>
                <p>Email</p>
            </div>
            <div className="icon-links">
                <a href="tel:7045625395">
                <MaterialIcon icon="phone" />
                </a>
                <p>Call</p>
            </div>
            <div className="icon-links">
                <a href="https://github.com/lindsfitz" target="_blank" rel="noreferrer noopener">
                <MaterialIcon icon="code" />
                </a>
                <p>Github</p>
            </div>
            <div className="icon-links">
                <a href="https://www.linkedin.com/in/lindsay-fitzgerald-847775161/" target="_blank" rel="noreferrer noopener">
                <MaterialIcon icon="people" />
                </a>
                <p>LinkedIn</p>
            </div>

            <div className="icon-links">
                <a href="./assets/LF-Resume.pdf" target="_blank" rel="noreferrer noopener">
                <MaterialIcon icon="description" />
                </a>
                <p>Resume</p>
            </div>
        </div>
    )
}