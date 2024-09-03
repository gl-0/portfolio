// const light = element.classList.add('light');
// const paragraph = document.getElementsByTagName('p');



const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let mode = document.getElementsByClassName('light')
    for (let i=0; i < mode.length; i++) {
        mode[i].classList.toggle('dark')
    }
});
