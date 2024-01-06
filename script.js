window.addEventListener("scroll", function () {
    var navbar = document.querySelector("header");
    var scroll = window.scrollY;

    if (scroll > 440) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, .8)";
        navbar.style.height = "76px";
        navbar.style.width = "80%";
        navbar.style.marginTop = "50px";
        navbar.style.boxShadow = "0 0 5px rgba(0, 0, 0, .85)";
        navbar.style.transition = "background-color 0.85s ease-in, box-shadow 0.85s ease-in";
    } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, .2)";
        navbar.style.height = "76px";
        navbar.style.width = "80%";
        navbar.style.marginTop = "50px";
        navbar.style.boxShadow = "0 0 5px rgba(255, 255, 255, .85)";
        navbar.style.transition = "background-color 0.85s ease-in, box-shadow 0.85s ease-in";
    }
    if (window.innerWidth <= 480) {
        navbar.style.width = "98%";
        navbar.style.height = "56px";
    }
});

//humburger menu
var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

// menu responsive
const menuIcon = document.getElementById("humburger");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    menuList.style.transition = "hidden 3s ease-in";
});

window.addEventListener("scroll", function () {
    var scroll = window.scrollY;
    var isTabletOrMobile = window.innerWidth < 769;

    if (scroll > 440 && isTabletOrMobile) {
        menuList.style.backgroundColor = "rgba(255, 255, 255, .8)";
        menuList.style.boxShadow = "0 0 5px rgba(0, 0, 0, .85)";
        menuList.style.transition = "background-color 0.85s ease-in, box-shadow 0.85s ease-in";
    }
    else if (isTabletOrMobile) {
        menuList.style.backgroundColor = "rgba(255, 255, 255, .2)";
        menuList.style.boxShadow = "0 0 5px rgba(255, 255, 255, .85)";
        menuList.style.transition = "background-color 0.85s ease-in, box-shadow 0.85s ease-in";
    }
    if (!isTabletOrMobile) {
        menuList.style.background = 'none';
    }
});
