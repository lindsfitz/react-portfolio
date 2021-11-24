import React from 'react';

export default function Contact() {
    return (
        <section id="contact-me">
        <h2>CONTACT ME</h2>
        <div>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group my-1">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        placeholder="Message"></textarea>
                </div>
                <div id="btn-div">
                    <button id="submit" type="button">Send</button>
                </div>
            </form>
        </div>
        </section>
    )
}