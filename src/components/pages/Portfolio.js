import React from 'react';
import Project from './Project'
import { AiOutlineGithub, AiOutlineDesktop } from "react-icons/ai";


const projects = [
    {
        mockup: './assets/images/fitzlaw.png',
        key:1,
        content:
            <div>
                <h3>Tim Fitzgerald Estate Law and Planning</h3>
                <h5><em>Sole Author</em></h5>
                <br></br>
                <p>This application, built using React, is a marketing webpage for an Estate Planning Law business. It includes details about the firm and the attorney, estate planning general information, and allows the user to connect with the attorney directly via a contact form. This site is still in development, and will allow customers to create an account and upload documents directly to their customer dashboard. </p>
                <br></br>
                <h4>Technologies and Tools</h4>
                <p>React, React Router, Javascript, CSS, Email.js </p>
                <br></br>
                <div>
                    <a href="https://github.com/lindsfitz/fitzlawfirm " target="_blank" rel="noreferrer noopener"
                    ><AiOutlineGithub /></a>
                    <a href="https://fitzlawfirm.com" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>
                </div>
            </div>
    },
    {
        mockup: './assets/images/bulletjournalsq.png',
        key:2,
        content:
            <div>
                <h3>BulletJournal Squared</h3>
                <h5><em>Project Manager // Front-End Developer</em></h5>
                <br></br>
                <p>BulletJournal Squared offers the familiar flexibility and creativity of paper journals for users looking for an option that is more convenient, accessible, and environmentally-friendly. After creating an account or logging in, users can create new daily or long-term pages customized with widgets to fit their needs. These pages are then saved in a convenient calendar format for easy access to past entries.</p>
                <br></br>
                <h4>Technologies and Tools:</h4>
                <p>HTML, CSS, JavaScript, Handlebars, JQuery, Express, Sequelize, Cloudinary </p>
                <br></br>
                <div>
                    <a href="https://github.com/lindsfitz/bulletjournal" target="_blank" rel="noreferrer noopener" ><AiOutlineGithub /></a>
                    <a href="https://bullet-journal-squared.herokuapp.com/" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>

                </div>
            </div>
    },
    {
        mockup: './assets/images/pocketrascal.png',
        key:3,
        content:
            <div>
                <h3>Pocket Rascal</h3>
                <h5><em>Project Manager // Front-End Developer</em></h5>
                <br></br>
                <p>Pocket Rascal is a modern take on a nostalgic, childhood classic - Neopets. Create and customize your own Rascal while enjoying mini-games to collect coins that can be spent on care or additional items for your personal Rascal. This application has a fully built server that is independently deployed.</p>
                <br></br>
                <h4>Technologies and Tools:</h4>
                <p>React, CSS, Javascript, NodeJS, Matter.JS, Material UI, MySQL, Express.JS</p>
                <br></br>
                <div>
                    <a href="https://github.com/evanhosni/pocket-rascal" target="_blank" rel="noreferrer noopener"><AiOutlineGithub /></a>
                    <a href="https://pocket-rascal.herokuapp.com/" target="_blank" rel="noreferrer noopener"><AiOutlineDesktop /></a>

                </div>
            </div>
    },
    {
        mockup: './assets/images/wackywiki1.jpg',
        key:4,
        content:
            <div>
                <h3>WackyWiki</h3>
                <h5><em>Project Manager // Front-End Developer</em></h5>
                <br></br>
                <p>WackyWiki is a very user friendly online version of MadLibz [Noun] that allows you to select any topic from Wikipedia and input how ever many and whatever zany nouns, adjectives, verbs, and adverbs you would like, to randomly replace words in the article.</p>
                <br></br>
                <h4>Technologies and Tools:</h4>
                <p>HTML, CSS, JavaScript, JQuery, APIs, Bulma, Text-to-Speech</p>
                <br></br>
                <div>
                    <a href="https://github.com/lindsfitz/wackywiki" target="_blank" rel="noreferrer noopener"
                    ><AiOutlineGithub /></a>
                    <a href="https://evanhosni.github.io/wackywiki/" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>
                </div>
            </div>
    },
    {
        mockup: './assets/images/weather-mockup.jpg',
        key:5,
        content:
            <div>
                <h3>Weather Dashboard</h3>
                <h5><em>Sole Author</em></h5>
                <br></br>
                <p>This application uses the OpenWeather API to retrieve weather data for cities. This data is used to display a weather dashboard for multiple cities that is dynamically updated. The past searches are saved and can be reused as the search input by clicking on them.</p>
                <br></br>
                <h4>Technologies and Tools:</h4>
                <p>HTML, CSS, JavaScript, JQuery, API, Moment.js, Bootstrap</p>
                <br></br>
                <div>
                    <a href="https://github.com/lindsfitz/wackywiki" target="_blank" rel="noreferrer noopener"
                    ><AiOutlineGithub /></a>
                    <a href="https://evanhosni.github.io/wackywiki/" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>
                </div>
            </div>
    },

]

export default function Portfolio() {
    return (
        <Project projects={projects} />
    )
}