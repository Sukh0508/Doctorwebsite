let closee = document.querySelector(".nav-links i");
let hamburger = document.querySelector(".navbar li");
let navlink = document.querySelector(".nav-links");
let linkjump = document.querySelectorAll(".nav-links a");

hamburger.addEventListener('click', function () {
   navlink.style.display = "flex";
});

closee.addEventListener('click', function () {
   navlink.style.display = "none";
});

linkjump.forEach(function (e){
   e.addEventListener('click',function () {
      if (window.innerWidth<=768) {
         
         navlink.style.display = "none";
      }
      
   })
   
});

