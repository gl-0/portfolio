const html = document.querySelector('html')
const body = document.querySelector('body');
const btn = document.getElementById('btn');
const logo = document.getElementById('logo');
const projects = document.getElementsByClassName('projects');

let sun = '\u{263C}';
let moon = '\u{263E}';

let currentTheme = localStorage.getItem('myTheme');
let btnText = localStorage.getItem('button');

//? DARK MODE BUTTON - INDEX, ABOUT, CONTACT ME, PROJECTS ///
console.log(`Testing...theme is ${currentTheme}`);
console.log(btnText);

function changeText(){
  // if(localStorage.getItem('myTheme') !== 'dark'){
  //   btn.innerText = moon
  // } else {
  //   btn.innerText = sun
  // }
  if(localStorage.getItem('myTheme') !== 'dark'){
    btn.innerHTML = moon;
    localStorage.setItem('button', btn.innerHTML);
  } else {
    btn.innerHTML = sun;
    localStorage.setItem('button', btn.innerHTML);
  }

  // btn.innerHTML = localStorage.getItem('button');
  // if(btn.innerHTML !== btnText){
  //   btn.innerHTML = btnText;
  //   localStorage.setItem('button', btn.innerHTML);
  // }

  // if(btnText === moon){
  //   btn.innerHTML = sun;
  //   localStorage.setItem('button', btn.innerHTML)
  //     } else {
  //       btn.innerHTML = moon;
  //   localStorage.setItem('button', btn.innerHTML)
  //   }
  };

  changeLogo = () => {
    if(logo.src === "images/logo.png"){
        logo.src = "images/logo-darkmode.png"
    } else {
        logo.src = "images/logo.png"
    }
  };

toggleDark = () => {
  let light = document.getElementsByClassName('light');
  
  html.classList.toggle('dark');
  localStorage.setItem('myTheme', html.className);
  console.log(`Current...theme is ${localStorage.getItem('myTheme')}`)
  for (let i = 0; i < light.length; i++){
    light[i].classList.toggle('dark');
};

  changeText();
  changeLogo();

}

// btn.addEventListener('click', function () {             
//   let light = document.getElementsByClassName('light'); //* Targets the button to switch to Dark Mode
  
//   html.classList.toggle('dark');                        //* changes html class to 'dark'
//   localStorage.setItem('myTheme', html.className);      //* sets local storage to match html class('dark')
//                                                         //! Important to do this AFTER the class has been updated to dark mode.
//   console.log(`Current...theme is ${localStorage.getItem('myTheme')}`)
  
//   for (let i = 0; i < light.length; i++){
//       light[i].classList.toggle('dark');
//   };
//   toggleDark();
// });

if (localStorage.getItem('myTheme')){          
    html.classList.toggle(localStorage.getItem('myTheme'));
}


//* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 

// localStorage.setItem('theme', 'light');
// localStorage.getItem('theme');

//? -----'ABOUT' GALLERY ----- ///

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