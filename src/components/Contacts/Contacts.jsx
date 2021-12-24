import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='contacts'>
        <section className="location-map">
            <div className="responsive-map">
                <iframe
                    style={{ width: "", height: "200", frameborder: "0", border: "0" }}
                    allowfullscreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889">
                </iframe>
            </div>
        </section>
        <section className='feedback'>
            <div className="fedback-innner">
                <div className='feedback-left'>
                    <div>JOIN OUR NEWSLETTER</div>
                    <div className='fedback-title'>Contact us</div>
                    <div>3094 10 Mulberry Avenue, 503-532-9565, 509-587-1034</div>
                    <div>Mon – Fri: 9:00 am – 8:00 pm,Sat – Sun: 9:00 am – 10</div>
                    <div>pm shop@bridgegelateria.com</div>
                </div>
                <div className='feedback-rigth'>
                    <input style={{height:"113px", color:"white"}} className='contact-inputs' type="text" placeholder='Your Message'/>
                    <input className='contact-inputs' type="text" placeholder='Your Name'/>
                    <input className='contact-inputs' type="text" placeholder='Your Email'/>
                    <button className='feedback-btn'>Submit</button>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Contacts;