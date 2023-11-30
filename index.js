var navOpen=document.getElementById("open-nav")
var slidenav=document.getElementById("sidenav")
navOpen.addEventListener("click",function(){

    
    slidenav.style.right="0"
})

var navClose=document.getElementById("navbar-close")

navClose.addEventListener("click",function(){
    slidenav.style.right="-50%"
})
