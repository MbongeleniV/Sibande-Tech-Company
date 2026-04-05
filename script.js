document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("show");
        hamburger.textContent = navbar.classList.contains("show") ? "✖" : "☰";
    });

});

const elements = document.querySelectorAll('.image4');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));

////////////////////////////
const elements2 = document.querySelectorAll('.image');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        }
    });
});

elements2.forEach(el => observer2.observe(el));
/////////////////////////

const elements3 = document.querySelectorAll('.occupationImage');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        }
    });
});
elements3.forEach(el => observer3.observe(el));
////////////////////////////


const elements4 = document.querySelectorAll('form');

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
        }
    });
});
elements4.forEach(el => observer4.observe(el));