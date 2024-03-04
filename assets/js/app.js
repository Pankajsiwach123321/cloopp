let nav = document.querySelector(".nav-btn");
let menubar = document.querySelector(".mobile-md-screen");
let close = document.querySelectorAll(".link-close");
let bgbody = document.querySelector(".open-overflow");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    bgbody.classList.toggle("over-flow")
})
close.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        fix1.classList.toggle("fixer1")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        bgbody.classList.remove("over-flow")

    })
});
const date = new Date()
const myYear = date.getFullYear()
document.querySelector("#date").innerHTML = `© ${myYear} Cloopp`


setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow_hidden");
}, 3500);
// backtotop
function backtop() {
    window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (window.scrollY > 500) {
        mybackto.style.display = "block";
    }
    else {
        mybackto.style.display = "none";
    }
});