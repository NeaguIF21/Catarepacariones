
// /navigation

let toogleButton = document.querySelector("#nav-icon4")
let navbarLinks = document.querySelector(".navbar-links")

toogleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle('active')
    toogleButton.classList.toggle('open')
})

navbarLinks.addEventListener("click",()=>{
  navbarLinks.classList.toggle('active')
  toogleButton.classList.toggle('open')
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}