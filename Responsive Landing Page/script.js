// Navbar Scroll Effect

window.addEventListener("scroll", () => {

    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// Dark Mode

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

});


// Hamburger Menu

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter,20);

        }
        else{
            counter.innerText = target + "+";
        }
    };

    updateCounter();

});


// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// Scroll Reveal Animation

ScrollReveal().reveal('.reveal', {

    distance:'60px',
    duration:1200,
    origin:'bottom',
    interval:200

});