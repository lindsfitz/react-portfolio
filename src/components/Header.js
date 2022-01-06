import React from 'react';
import Navigation from './Navigation'

export default function Header({ currentSection, handleSectionChange }) {
    return (
        <header>
            <div style={{width:"100vw"}}>
                <div id='banner'>
                    <img src="./assets/images/banner2.jpg" alt="" width='100%' />
                    <div id='nav-box'>
                        <Navigation />
                    </div>
                </div>
            </div>


        </header>
    )
}