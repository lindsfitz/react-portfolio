import React from 'react';
import Project from './Project'
import { AiOutlineGithub, AiOutlineDesktop } from "react-icons/ai";


const projects = [
    {
        mockup: './assets/images/pocketrascal.png',
        content:
            <div>
                <h3>Pocket Rascal</h3>
                <p>Project Manager // Front-End Developer</p>
                <p>Pocket Rascal is a modern take on a nostalgic, childhood classic - Neopets. Create and customize your own Rascal while enjoying mini-games to collect coins that can be spent on care or additional items for your personal Rascal. This application has a fully built server that is independently deployed.</p>
                <h6>Technologies and Tools:</h6>
                <p>React, CSS, Javascript, NodeJS, Matter.JS, Material UI, MySQL, Express.JS</p>
                <div>
                    <a href="https://github.com/evanhosni/pocket-rascal" target="_blank" rel="noreferrer noopener"><AiOutlineGithub /></a>
                    <a href="https://pocket-rascal.herokuapp.com/" target="_blank" rel="noreferrer noopener"><AiOutlineDesktop /></a>

                </div>
            </div>
    },
    {
        mockup: './assets/images/bulletjournalsq.png',
        content:
            <div>
                <h3>BulletJournal Squared</h3>
                <p>Project Manager // Front-End Developer</p>
                <p>Paper bullet journals have gained immense popularity over the years due to the flexibilty and opportunity for creativity it offers customers. BulletJournal Squared offers these same features digitally, for users looking for an option that is more convenient, accessible, and environmentally-friendly. After creating an account or logging in, users can create new daily or long-term pages customized with widgets to fit their needs. These pages are then saved in a convenient calendar format for easy access to past entries.</p>
                <h6>Technologies and Tools:</h6>
                <p>HTML, CSS, JavaScript, Handlebars, JQuery, Express, Sequelize, Cloudinary </p>
                <div>
                    <a href="https://github.com/lindsfitz/bulletjournal" target="_blank" rel="noreferrer noopener" ><AiOutlineGithub /></a>
                    <a href="https://bullet-journal-squared.herokuapp.com/" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>

                </div>
            </div>
    },
    {
        mockup: './assets/images/wackywiki1.jpg',
        content:
            <div>
                <h3>WackyWiki</h3>
                <p>Project Manager // Front-End Developer</p>
                <p>WackyWiki is a very user friendly online version of MadLibz [Noun] that allows you to select any topic from Wikipedia and input how ever many and whatever zany nouns, adjectives, verbs, and adverbs you would like, to randomly replace words in the article.</p>
                <h6>Technologies and Tools:</h6>
                <p>HTML, CSS, JavaScript, JQuery, APIs, Bulma, Text-to-Speech</p>
                <div>
                    <a href="https://github.com/lindsfitz/wackywiki" target="_blank" rel="noreferrer noopener"
                    ><AiOutlineGithub /></a>
                    <a href="https://evanhosni.github.io/wackywiki/" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>
                </div>
            </div>
    },
    {
        mockup: './assets/images/note-taker.png',
        content:
            <div>
                <h3>Note Taker</h3>
                <p> This application can be used to write and save notes. It uses an Express.js back-end to save and retrieve previously entered notes. Once you are done with a stored note, you can click on the icon to permanently remove the note. Additionally, this application is deployed via Heroku.</p>
                <h6>Technologies and Tools</h6>
                <p>HTML, CSS, JavaScript, JQuery, Moment.js, Bootstrap</p>
                <div>
                    <a href="https://github.com/lindsfitz/note-taker" target="_blank" rel="noreferrer noopener"
                    ><AiOutlineGithub /></a>
                    <a href="https://lindsfitznotetaker.herokuapp.com/" target="_blank" rel="noreferrer noopener" ><AiOutlineDesktop /></a>
                </div>
            </div>
    },
    {
        mockup: './assets/images/weather-mockup.jpg',
        content:
            <div>
                <h3>Weather Dashboard</h3>
                <p>This application uses the OpenWeather API to retrieve weather data for cities. This data is used to display a weather dashboard for multiple cities that is dynamically updated. The past searches are saved and can be reused as the search input by clicking on them.</p>
                <h6>Technologies and Tools:</h6>
                <p>HTML, CSS, JavaScript, JQuery, API, Moment.js, Bootstrap</p>
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