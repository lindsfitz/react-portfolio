import React from 'react';

export default function Contact() {
    return (
        <section id="contact-me">
            <h1>Hiring or Have Questions?</h1>
            <h2>CONTACT ME DIRECTLY</h2>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea id="exampleFormControlTextarea1" rows="10"
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