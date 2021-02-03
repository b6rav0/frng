let menuButton = document.querySelector(".hamburger-icon");
let closeButton = document.querySelector(".close-icon");
let mobileNavMenu = document.querySelector(".mobile-nav");

menuButton.addEventListener("click", toggleNav);
closeButton.addEventListener("click", hideNav);

function toggleNav() {
    mobileNavMenu.style.height = "15em";
    mobileNavMenu.style.borderTop = "2px solid #D7B73F"
    menuButton.style.display = "none";
    closeButton.style.display = "block";
}

function hideNav() {
    mobileNavMenu.style.height = "0";
    mobileNavMenu.style.borderTop = "0"
    menuButton.style.display = "block";
    closeButton.style.display = "none";
}
