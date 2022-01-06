import React, { useState } from 'react';
import emailjs from 'emailjs/browser'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_1pfy7lc';
            const templateId = 'template_90u2a19';
            const userId = 'user_DO6rrtHQtz7YolqbTInhc';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <section id="contact-me">
            <h1>Hiring or Have Questions?</h1>
            <h2>CONTACT ME DIRECTLY</h2>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Name"
                            defaultValue={name}
                            onChange={e => setName(e.target.value)} />
                        <input type="text" placeholder="Email"
                            defaultValue={email}
                            onChange={e => setEmail(e.target.value)} />
                        <textarea id="exampleFormControlTextarea1" rows="10"
                            placeholder="Message"
                            defaultValue={message}
                            onChange={e => setMessage(e.target.value)}>
                            </textarea>
                    </div>
                    <div id="btn-div">
                        <button id="submit" type="button" onClick={submit}
                        >SEND</button>
                    </div>
                </form>
            </div>
        </section>
    )
}