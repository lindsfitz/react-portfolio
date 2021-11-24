import React from 'react';
import Project from './Project'
import MaterialIcon from 'material-icons-react';


const projects = [
    {
        mockup: './assets/images/bullet-journal.png',
        content:
            <div>
                <h3 className="uk-card-title">BulletJournal Squared</h3>
                <p className="uk-text-meta">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h6>Technologies and Tools:</h6>
                <p>HTML, CSS, JavaScript, JQuery, APIs, Bulma, Text-to-Speech</p>
                <div className="uk-card-footer">
                    <a href="https://github.com/lindsfitz/bulletjournal" target="_blank" rel="noreferrer noopener" className="uk-icon-button uk-margin-small-right"><MaterialIcon icon="code" /></a>
                    <a href="https://bullet-journal-squared.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="uk-icon-button"><span className="material-icons">launch</span></a>

                </div>
            </div>
    },
    {
        mockup: './assets/images/wackywiki1.jpg',
        content:
            <div>
                <h3 className="uk-card-title">WackyWiki</h3>
                <p className="uk-text-meta">WackyWiki is a very user friendly online version of MadLibz [Noun] that allows you to select any topic from Wikipedia and input how ever many and whatever zany nouns, adjectives, verbs, and adverbs you would like, to randomly replace words in the article.</p>
                <h6>Technologies and Tools:</h6>
                <p>HTML, CSS, JavaScript, JQuery, APIs, Bulma, Text-to-Speech</p>
                <div className="uk-card-footer">
                    <a href="https://github.com/lindsfitz/wackywiki" target="_blank" rel="noreferrer noopener"
                        className="uk-icon-button uk-margin-small-right"><span className="material-icons">code</span></a>
                    <a href="https://evanhosni.github.io/wackywiki/" target="_blank" rel="noreferrer noopener" className="uk-icon-button"><span className="material-icons">launch</span></a>
                </div>
            </div>
    },
    {
        mockup: './assets/images/note-taker.png',
        content:
            <div>
                <h3 className="uk-card-title">Note Taker</h3>
                <p className="uk-text-meta"> This application can be used to write and save notes. It uses an Express.js back-end to save and retrieve previously entered notes. Once you are done with a stored note, you can click on the icon to permanently remove the note. Additionally, this application is deployed via Heroku.</p>
                <h6>Technologies and Tools</h6>
                <p>HTML, CSS, JavaScript, JQuery, Moment.js, Bootstrap</p>
                <div className="uk-card-footer">
                    <a href="https://github.com/lindsfitz/note-taker" target="_blank" rel="noreferrer noopener"
                        className="uk-icon-button uk-margin-small-right"><span className="material-icons">code</span></a>
                    <a href="https://lindsfitznotetaker.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="uk-icon-button"><span className="material-icons">launch</span></a>
                </div>
            </div>
    },
    {
        mockup: './assets/images/weather-mockup.jpg',
        content:
            <div>
                <h3 className="uk-card-title">Weather Dashboard</h3>
                <p className="uk-text-meta">This application uses the OpenWeather API to retrieve weather data for cities. This data is used to display a weather dashboard for multiple cities that is dynamically updated. The past searches are saved and can be reused as the search input by clicking on them.</p>
                <h6>Technologies and Tools:</h6>
                <p>HTML, CSS, JavaScript, JQuery, API, Moment.js, Bootstrap</p>
                <div className="uk-card-footer">
                    <a href="https://github.com/lindsfitz/wackywiki" target="_blank" rel="noreferrer noopener"
                        className="uk-icon-button uk-margin-small-right"><span className="material-icons">code</span></a>
                    <a href="https://evanhosni.github.io/wackywiki/" target="_blank" rel="noreferrer noopener" className="uk-icon-button"><span className="material-icons">launch</span></a>
                </div>
            </div>
    },

]

export default function Portfolio() {
    return (
        <Project projects={projects} />
    )
}