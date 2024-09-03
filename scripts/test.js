const btn = document.getElementById('btn');
const logo = document.getElementById('logo');



/////////////// DARK MODE BUTTON - INDEX, ABOUT, CONTACT ME, PROJECTS ///////////////

btn.addEventListener('click', function () {
    let mode = document.getElementsByClassName('light')
    for (let i=0; i < mode.length; i++) {
        mode[i].classList.toggle('dark')
    }
});

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
