function show(caption, background){
    let element1= document.getElementById(caption);
    let bg= document.getElementById(background);
    bg.style.opacity= "0.8";
    element1.style.visibility= "visible";
 }

 function hide(caption, background){
    let element1= document.getElementById(caption);
    let bg= document.getElementById(background);
    bg.style.opacity= "1";
    element1.style.visibility= "hidden";
 }

 function zoomin(imgID){
     var image = document.getElementById(imgID);
     image.style.transform= "scale(1.1)";
     image.style.opacity= "1";
 }

 function zoomout(imgID){
     var image = document.getElementById(imgID);
     image.style.transform= "scale(1)";
     image.style.opacity= "0.8";
 }


 let modal = document.getElementById("modal");
 var modalImg = document.getElementById("modal-content");
 let slideIndex=1;

 openModal = function(){
     modal.style.display = "block";
 }

 closeModal= function(){
     modal.style.display = "none";
 }

 plusSlides = function(n){
     slideIndex += n;
     showSlides(slideIndex);
 }

 currentSlide = function(n){
     slideIndex = n;
     showSlides(slideIndex);
 }

 showSlides = function(n){
     let slides = document.getElementsByClassName('slides');

     if(n > slides.length){
         slideIndex = 1;
     }

     if(n < 1){
         slideIndex = slides.length;
     }

     for(let i=0; i < slides.length; i++){
         slides[i].style.display = "none";
     }

     slides[slideIndex-1].style.display= "block";
 }