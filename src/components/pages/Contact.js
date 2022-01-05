import React from 'react';

export default function Contact() {
    return (
        <section id="contact-me">
        <h1>Hiring or Have Questions?</h1>
        <h2>CONTACT ME</h2>
        <div>
            <form action='mailto:lindsaytfitz@gmail.com' method='post' enctype='text/plain'>
                <div>
                    <div>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" />
                    </div>
                </div>
                <div>
                    <textarea id="exampleFormControlTextarea1" rows="3"
                        placeholder="Message"></textarea>
                </div>
                <div id="btn-div">
                    <button id="submit" type="button">SEND</button>
                </div>
            </form>
        </div>
        </section>
    )
}