import React from 'react';
import $ from 'jquery';




export default function Skills(){
    React.useEffect( () => {
        var progressBars = $(".skill-progress > div");
    
        function initialiseBar(bar) {
            bar.setAttribute("data-visited", false);
            bar.style.width = 0 + '%';
        }
        
        for (var bar of progressBars) {
            initialiseBar(bar);
        }
        
        function fillBar(bar) {
            var currentWidth = 0;
            var targetWidth = bar.getAttribute("data-bar-width");
            var interval = setInterval(function () {
                if (currentWidth >= targetWidth) {
                    clearInterval(interval);
                    return;
                }
                currentWidth++;
                bar.style.width = currentWidth + '%';
            }, 5);
        
        }
        
        function checkScroll() {
            for (let bar of progressBars) {
                var barCoordinates = bar.getBoundingClientRect();
                if ((bar.getAttribute("data-visited") === "false") &&
                    (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
                    bar.setAttribute("data-visited", true);
                    fillBar(bar);
                } else if (barCoordinates.top > window.innerHeight) {
                    bar.setAttribute("data-visited", false);
                    initialiseBar(bar);
                }
            
            }
        }
        
        window.addEventListener("scroll", checkScroll);
    }
        
    )
    
    return(
        <section id="skills">
        <h1 class="section-heading mb35px">
            <span><i class="fa-solid fa-laptop-code"></i> </span>
            <span>Skills</span>
        </h1>
        <div class="skills-display">
            <div class="text-center pb2rem">
                <div class="skills-icon">
                    <i class="fa-brands fa-java"></i>
                </div>
                <div class="skill-progress">
                    <div class="mb-orange" data-bar-width="70">
                        <div class="skill-name">
                            <span> JAVA </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center pb2rem">
                <div class="skills-icon">
                    <i class="fa-brands fa-js"></i>
                </div>
                <div class="skill-progress">
                    <div class="mb-orange" data-bar-width="65">
                        <div class="skill-name">
                            <span> JavaScript </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center pb2rem">
                <div class="skills-icon">
                    <i class="fa-brands fa-react"></i>
                </div>
                <div class="skill-progress">
                    <div class="mb-orange" data-bar-width="55">
                        <div class="skill-name">
                            <span> React </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center pb2rem">
                <div class="skills-icon">
                    <i class="fa-brands fa-html5"></i>
                </div>
                <div class="skill-progress">
                    <div class="mb-orange" data-bar-width="90">
                        <div class="skill-name">
                            <span> HTML </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center pb2rem">
                <div class="skills-icon">
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
                <div class="skill-progress">
                    <div class="mb-orange" data-bar-width="75">
                        <div class="skill-name">
                            <span> CSS </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}