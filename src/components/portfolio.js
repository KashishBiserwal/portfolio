import React from 'react';

export default function Portfolio(){
    return (
        <section id='portfolio'>
            <h1 class="section-heading mb35px">
            <span><i class="fa-solid fa-folder"></i></span>
            <span>Projects</span>
        </h1>
        <div id="portfolio-container">
            <div class="card">
                <div class="face face1">
                    <div class="project-content">
                        <img src="images/figurz.jpg" alt='figurz'/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/figurz">Repo</a></button>
                        <button class="phone-buttons"><a href="https://superheromerch.netlify.app/">Demo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>Figurz</h2>
                        <br/>
                        <p class="content-p">An eCommerce website for superheroes merchandise.</p>
                        <br/>
                        <button><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/figurz">Repository</a></button>
                        <button><a href="https://superheromerch.netlify.app/">Demo</a></button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="project-content">
                        <img src="images/blog.png" alt='blog'/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/blog">Repo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>Blog</h2>
                        <br/>
                        <p class="content-p">My personal blog website</p>
                        <br/>
                        <button><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/blog">Repository</a></button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="project-content">
                        <img src="images/portfolio.png" alt='portfolio'/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i> <a href="https://github.com/KashishBiserwal/portfolio">Repo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>Portfolio</h2>
                        <br/>
                        <p class="content-p">My personal portfolio website</p>
                        <br/>
                        <div>
                            <button><i class="fa-brands fa-github"></i> <a href="https://github.com/KashishBiserwal/portfolio">Repository</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="project-content">
                        <img src="images/notes.png" alt='notes'/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/notes-app">Repo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>Notes Web App</h2>
                        <br/>
                        <p class="content-p">A simple note taking web app.</p>
                        <br/>
                        <button><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/notes-app">Repository</a></button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
