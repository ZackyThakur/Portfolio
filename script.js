

var navMenu = document.querySelectorAll('.nav-menu a');
var interval;
for(var i =0; i < navMenu.length; i++){
    navMenu[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        interval = setInterval(scrollVertically, 20, targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);

var animation = false;
function initialBars(){
    for(var bar of progressBars){
        bar.style.width = 0+'%';
    }
}
initialBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        } , 10);
    }

}


function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animation && coordinates.top < window.innerHeight ){
        animation = true;
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animation = false;
        initialBars();
    }
}