import React from 'react';


export default function Navigation({ currentSection, handleSectionChange }) {
    return (


        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div className="uk-navbar-left">
                <a href="" className="uk-navbar-item uk-logo">
                    <div>
                        Lindsay Fitzgerald
                        <div className="uk-navbar-subtitle">FULL-STACK WEB DEV</div>
                    </div>
                </a>

            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <a href="#aboutme"
                            onClick={() => handleSectionChange('AboutMe')}
                            className={currentSection === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio"
                            onClick={() => handleSectionChange('Portfolio')}
                            className={currentSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact"
                            onClick={() => handleSectionChange('Contact')}
                            className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact Me
                        </a>
                    </li>
                    <li>
                        <a href="#">Reach Out</a>
                        <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="https://github.com/lindsfitz" target="_blank" className="uk-icon-button"
                                    uk-icon="github"></a></li>
                                <li><a href="https://www.linkedin.com/in/lindsay-fitzgerald-847775161/" target="_blank" className="uk-icon-button" uk-icon="linkedin"></a></li>
                                <li><a href="./assets/LF-Resume.pdf" target="_blank" className="uk-icon-button" uk-icon="file-text"></a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}