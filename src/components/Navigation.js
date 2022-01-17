import React from 'react';



export default function Navigation() {
    return (
        <nav>
            <div>
                <div id='logo'>
                    Lindsay Fitzgerald
                    <p>FULL-STACK WEB DEV</p>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACT ME</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}