let closee = document.querySelector(".nav-links i");
let hamburger=  document.querySelector(".navbar li");
let navlink = document.querySelector(".nav-links");

hamburger.addEventListener('click',function (e) {
   navlink.style.display = "flex";

    
})

closee.addEventListener('click',function () {
navlink.style.display = "none";
    
})
