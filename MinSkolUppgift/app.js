$(document).ready(function(){
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li');

    if(burger !== null)
    {
        burger.addEventListener('click', () => {

            nav.classList.toggle('nav-active');
    
            navLinks.forEach((link, index) => {
    
                if(link.style.animation){
                link.style.animation = "";
                }else{
                    link.style.animation = `navLinksFade 0.5s ease forwards ${index/7+0.5}s`;
                }
            });
    
            burger.classList.toggle('toggle');
        });   
    }
 });

 function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



