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
                        <img src="images/figurz.jpeg"/>
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
                        <img src="images/mymeal.png"/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/mymeal">Repo</a></button>
                        <button class="phone-buttons"><a href="https://kashishbiserwal.github.io/mymeal/">Demo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>MyMeal</h2>
                        <br/>
                        <p class="content-p">It is an online food ordering website which provides multiple services.</p>
                        <br/>
                        <button><i class="fa-brands fa-github"></i><a href="https://github.com/KashishBiserwal/mymeal">Repository</a></button>
                        <button><a href="https://kashishbiserwal.github.io/mymeal/">Demo</a></button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="project-content">
                        <img src="images/musicals.png"/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i> <a href="https://github.com/KashishBiserwal/musical-instruments">Repo</a></button>
                        <button class="phone-buttons"><a href="https://kashishbiserwal.github.io/musical-instruments/">Demo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>Musical Instruments</h2>
                        <br/>
                        <p class="content-p">Have a good performance.</p>
                        <br/>
                        <div>
                            <button><i class="fa-brands fa-github"></i> <a href="https://github.com/KashishBiserwal/musical-instruments">Repository</a></button>
                            <button><a href="https://kashishbiserwal.github.io/musical-instruments/">Demo</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="project-content">
                        <img src="images/rpsls.png"/>
                    </div>
                    <div class="pb">
                        <button class="phone-buttons"><i class="fa-brands fa-github"></i> <a href="https://github.com/KashishBiserwal/rock-paper-scissors-lizard-spock">Repo</a></button>
                        <button class="phone-buttons"><a href="https://kashishbiserwal.github.io/rock-paper-scissors-lizard-spock/">Demo</a></button>
                    </div>
                </div>
                <div class="face face2">
                    <div class="project-content">
                        <h2>Rock Paper Scissors Lizard Spock</h2>
                        <br/>
                        <p class="content-p">Take rock paper scissors to the next level.</p>
                        <br/>
                        <div>
                            <button><i class="fa-brands fa-github"></i> <a href="https://github.com/KashishBiserwal/rock-paper-scissors-lizard-spock">Repository</a></button>
                            <button><a href="https://kashishbiserwal.github.io/rock-paper-scissors-lizard-spock/">Demo</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
