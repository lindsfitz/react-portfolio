import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin, AiOutlinePhone, AiOutlineSolution } from "react-icons/ai";



export default function Footer() {
    return (
        <div id="contact-links">
            <div className="icon-links">
                <a href="mailto: lindsaytfitz@gmail.com"><AiOutlineMail /></a>
            </div>
            <div className="icon-links">
                <a href="tel:7045625395">
                    <AiOutlinePhone />
                </a>
            </div>
            <div className="icon-links">
                <a href="https://github.com/lindsfitz" target="_blank" rel="noreferrer noopener">
                    <AiOutlineGithub />
                </a>
            </div>
            <div className="icon-links">
                <a href="https://www.linkedin.com/in/lindsay-fitzgerald-847775161/" target="_blank" rel="noreferrer noopener">
                    <AiOutlineLinkedin />
                </a>
            </div>
            <div className="icon-links">
                <a href="./assets/lindsay-fitzgerald.pdf" target="_blank" rel="noreferrer noopener">
                    <AiOutlineSolution />
                </a>
            </div>
        </div>
    )
}