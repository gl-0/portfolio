const btn = document.getElementById('btn');
const logo = document.getElementById('logo');
const projects = document.getElementsByClassName('projects');
/////////////// DARK MODE BUTTON - INDEX, ABOUT, CONTACT ME, PROJECTS ///////////////

// let darkMode = localStorage.getItem('dark') == 'true';

// if (darkMode){
//   toggleDark();
// }

btn.addEventListener('click', function () {
    let mode = document.getElementsByClassName('light')
    for (let i=0; i < mode.length; i++) {
        mode[i].classList.toggle('dark')
    }
});

toggleDark = () => {
  let isDark = document.html.getElementsByClassName('dark');
  localStorage.setItem('dark', isDark ? 'enabled' : 'disabled');
  changeText = () => {
    if(btn.innerHTML === "Goin' Dark"){
        btn.innerHTML = "Bring on the light!"
    } else {
        btn.innerHTML = "Goin' Dark"
    }
  };

  changeLogo = () => {
    if(logo.src === "images/logo.png"){
        logo.src = "images/logo-darkmode.png"
    } else {
        logo.src = "images/logo.png"
    }
  }
}

localStorage.setItem('darkMode', 'dark')
let darkMode = localStorage.getItem('darkMode');
darkMode;
/////////////// 'ABOUT' GALLERY ////////////

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function changeClass1() {
  let element = document.getElementById('project1');
  if (currentSlide(n) === 1){
    element.classList.toggle('selected');
  }
}

function changeClass2() {
  let element = document.getElementById('project2');
  if (currentSlide(n) !== 2) {
  element.classList.toggle('show');
  }
}

function changeClass3() {
  let element = document.getElementById('project3');
  if (currentSlide(n) !== 3){
  element.classList.toggle('show');
  }
}

function changeClass4() {
  let element = document.getElementById('project4');
  if (currentSlide(n) !== 4){
    element.classList.toggle('show');
  }
}

// showInfo = (n) => {
//   projects[n].style.display.innerHTML = 'block'
// }