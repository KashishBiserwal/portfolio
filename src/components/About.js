import React from "react";

export default function About(){
  return(
    <section id="about">
      <h1>About Me</h1>
      <div id="about-para">
          <p>Currently, I am pursuing B.Sc in Computer Science from Gurugram University, Haryana. I will be graduating in the year 2023. I enjoy developing websites. My hobbies are drawing and reading. I have worked on technologies like Java, HTML5, CSS, JavaScript and React.</p>
          <div class="icons about-icons">
            <ul class="horizontal-list text-center social-icons mb35px ">
                <li><a href="https://github.com/KashishBiserwal/" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/kashishbiserwal/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
      </div>
  </section>
  )
};