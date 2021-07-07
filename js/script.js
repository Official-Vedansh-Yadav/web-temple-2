var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click',function (){
    var navList = document.querySelector(".navlist");
    navList.classList.toggle("v-nav");
})