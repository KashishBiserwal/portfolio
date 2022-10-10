import React from 'react';
import $ from 'jquery';

export default function Home(){

$(document).ready(function(){
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});

    return (
        <div>
            <nav id='navbar' className="navbar">
            <div class="max-width">
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#skills" class="menu-btn">Skills</a></li>
                <li><a href="#portfolio" class="menu-btn">Portfolio</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn right">
                <i class="fas fa-bars"></i>
            </div>
            </div>
            </nav>
          <header class="home" id="home">
          <div class="max-width home-container">
              <div class="home-content">
                  <div class="image">
                      <img src="images/my-image.png" alt="" />
                  </div>
                  <div class="content">
                      <p>Hi, I am</p>
                      <h1>Kashish</h1>
                      <h4>Front End Dev</h4>
                      <div class="mail">
                          <i class="far fa-envelope"></i>
                          <span class="email">kashish.biserwal@gmail.com</span>
                      </div>
                  </div>
              </div>
          </div>
          </header>
        </div>
    )
}
