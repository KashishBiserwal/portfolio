import React from "react";

export default function About(){
  return(
    <section id="about">
      <h1>About Me</h1>
      <div id="about-para">
          <p>Currently, I am pursuing B.Sc in Computer Science from Gurugram University, Haryana. I will be graduating in the year 2023. I enjoy developing websites. My hobbies are drawing and reading. I have worked on full stack web development technologies such as  HTML5, CSS3, JavaScript, ReactJs, ExpressJs, Java, MongoDB and more.</p>
          <div class="icons about-icons">
            <ul class="horizontal-list text-center social-icons mb35px ">
                <li><a href="https://github.com/KashishBiserwal/" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/kashishbiserwal/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
      </div>
  </section>
  )
};