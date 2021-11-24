import React from 'react';
import Navigation from './Navigation'

export default function Header({ currentSection, handleSectionChange }) {
    return (
        <header>
            <div>
                <div className="uk-position-relative uk-cover-container uk-height-large">
                    <img src="./assets/images/banner2.jpg" alt="" uk-cover />
                    <div className="uk-position-top">

                        <Navigation currentSection={currentSection} handleSectionChange={handleSectionChange} />
                    </div>
                </div>
            </div>


        </header>
    )
}