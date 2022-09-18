 
const bar = document.getElementById('#bar');
const close = document.getElementById('#close');
const nav = document.getElementById('#navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })

}



let bar = document.querySelector("bar");
let cart = document.querySelector(".cart");
let close = document.querySelector("close");

bar.onclick = () => {
    navbar.classList.add("active");
}
