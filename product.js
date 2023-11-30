var navOpen=document.getElementById("open-nav")
var slidenav=document.getElementById("sidenav")
navOpen.addEventListener("click",function(){

    
    slidenav.style.right="0"
})

var navClose=document.getElementById("navbar-close")

navClose.addEventListener("click",function(){
    slidenav.style.right="-50%"
})

var searchBar=document.getElementById("search-bar")
var container=document.getElementById("container")
var containerList=container.querySelectorAll("div")


searchBar.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(var count=0 ;count<containerList.length;count=count+1)
    {
        console.log(containerList[count])
        var productname=containerList[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            containerList[count].style.display="none"
        }
        else
        {
            containerList[count].style.display="block"

        }
    }


})