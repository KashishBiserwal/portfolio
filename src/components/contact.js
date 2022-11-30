import React from 'react';
import Form from './Form';

export default function Contact(){
    return (
        <section id='contact'>
            <h1 class="section-heading mb35px">
                <span><i class="fa-regular fa-id-card"></i></span>
                <span>Contact</span>
            </h1>
        <div className='contact-details-container'>
        
        <div class="details">
            <h3>Get in Touch</h3>
            <p>Open for work</p>
            <br/>
            <div class="my-details-info-container">
                <i class="fas fa-map-marker-alt"></i>
                <span>Gurugram, India</span>
            </div>
            <br/>
            <div class="my-details-info-container">
                <i class="fa-solid fa-envelope"></i>
                <span>kashish.biserwal@gmail.com</span>
            </div>
        </div>
        <div className='form'>
            <Form />
        </div>
        </div>
        <div class="icons">
            <ul class="horizontal-list text-center social-icons mb35px">
                <li><a href="https://github.com/KashishBiserwal/" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/kashishbiserwal/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
        <footer className='foot'>
            <h1></h1>
        </footer>
        </section>
    )
}