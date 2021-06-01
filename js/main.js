//Declarando variáveis
var btnContact = document.querySelector('.cl-btn-contact');
var modalToggle = document.querySelectorAll('.cl-toggle-modal');
var myScrollDown = document.querySelector('.cl-scroll-down');

//Abrindo e fechando informações de contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.cl-contact-box');
    boxContact.classList.toggle('cl-is-evident');
    this.classList.toggle('cl-change-icon');
});


//Page preloader

window.addEventListener('load', function(){

    var pagePreloader = document.querySelector('.cl-preloader');
    pagePreloader.classList.add('cl-fade-out');
    

     setTimeout(function (){
         pagePreloader.style.display = 'none';
     }, 3000);
});

//toggle modal

    for (var i = 0; i < modalToggle.length; i++) {
        
        modalToggle[i].addEventListener('click', function(){

            var overlay = document.querySelector('.cl-overlay');
            var modal = document.querySelector('.cl-modal');
            
            overlay.classList.toggle('cl-is-evident');
            modal.classList.toggle('cl-is-evident');
        });

    }


    var waypoint = new Waypoint({
        element: myScrollDown,
        handler: function() {
          myScrollDown.classList.toggle('cl-fade-out');
        },
        offset: '80%'
      });



// SLIDER SECTION 2 - LARGURA DOS ELEMENTOS

var sliderContainer = document.querySelector('.cl-slider-container');
var sliderList = document.querySelector('.cl-slider-list');
var sliderItems = document.querySelectorAll('.cl-slider-item');
var sliderListWidth = null;

var sliderContainerWidth = sliderContainer.parentElement.offsetWidth;
sliderContainer.style.width = sliderContainerWidth + "px";


for(var i = 0; i < sliderItems.length; i++){
    sliderItems[i].style.width = sliderContainerWidth + "px";
    sliderListWidth += sliderContainerWidth;
}

sliderList.style.width = sliderListWidth + "px";


// TROCA DE SLIDE

//DECLARAÇÃO DE VARIÁVEIS

var prevSlideButton = document.querySelector('.cl-item-prev');
var nextSlideButton = document.querySelector('.cl-item-next');
var sliderLocation = 0;
var lastItem = sliderListWidth - sliderContainerWidth;
var firstItem = 0;
let currentSlide = document.querySelector('.cl-current-slide');
var slidesNumber = document.querySelector('.cl-slides-number');
var slideCounter = 1;
var totalItems = sliderItems.length;
var selectedLinks = document.querySelectorAll('.cl-selected-link');
var currentLink;
var prevEl;
var nextEl;
var prevTextNode;
var nextTextNode;
var topCounter = document.querySelector('.cl-counter');

//HANDLERS

//movimentação do slider
function moveNext(){
    if((sliderLocation*(-1)) < lastItem){
        sliderLocation -= sliderContainerWidth;
        slideCounter++;
        anime({
            targets: sliderList,
            translateX: sliderLocation,
            easing: 'cubicBezier(0,1.01,.32,1)'
        })
    }else if((sliderLocation*(-1)) === lastItem){
        return;
    }
  
}


function movePrev(){
    if(sliderLocation < firstItem){
        sliderLocation += sliderContainerWidth;
        slideCounter--;
        anime({
            targets: sliderList,
            translateX: sliderLocation,
            easing: 'cubicBezier(0,1.01,.32,1)'
        })
    }else if(sliderLocation === firstItem){
        return;
    }
}

//troca do counter
function changeTopCounter(){

    topCounter.lastChild.previousSibling.innerHTML = slideCounter;
}

function changeBottomCounter(){
    if(slideCounter <= 9 && totalItems <= 9){
    currentSlide.innerHTML = "0" + slideCounter;
    slidesNumber.innerHTML = "0" + totalItems;
    

    }else if(slideCounter <= 9 && totalItems >= 10){
     currentSlide.innerHTML = "0" + slideCounter;
     slidesNumber.innerHTML = totalItems;
    

    }else if(slideCounter >= 10 && totalItems >= 10){
        currentSlide.innerHTML = slideCounter;
        slidesNumber.innerHTML = totalItems;
       
    }

}




//next link

function nextLink(){
   
    for(var i = 0; i < selectedLinks.length; i++){
        if(selectedLinks[i] === selectedLinks[(slideCounter-1)] && selectedLinks[i] === selectedLinks[0]){
            currentLink = selectedLinks[i];
            anime({
                targets: currentLink,
                width: 70,
                backgroundColor: '#2ccb69'
            })
        }else if(selectedLinks[i] === selectedLinks[(slideCounter-1)] && selectedLinks[i] != selectedLinks[0]){
            prevTextNode = selectedLinks[i].previousSibling;
            prevEl = prevTextNode.previousSibling;
           currentLink = selectedLinks[i];
            anime({
                targets: prevEl,
                width: 20,
                backgroundColor: '#4d4c4c'
            })
            anime({
                targets: currentLink,
                width: 70,
                backgroundColor: '#2ccb69'
            })
      
    }
    
}
}

// prev link

function prevLink(){
    
    for(var i = 0; i < selectedLinks.length; i++){
         if(selectedLinks[i] === selectedLinks[(slideCounter-1)]){
            nextTextNode = selectedLinks[i].nextSibling;
            nextEl = nextTextNode.nextSibling;
           currentLink = selectedLinks[i];
            anime({
                targets: nextEl,
                width: 20,
                backgroundColor: '#4d4c4c'
            })
            anime({
                targets: currentLink,
                width: 70,
                backgroundColor: '#2ccb69'
            })
      
    }
    
}
}


nextSlideButton.addEventListener('click', function(){
  moveNext();
  changeTopCounter();
  changeBottomCounter();
  nextLink();
  
 
})

prevSlideButton.addEventListener('click', function(){
 movePrev();
 changeTopCounter();
 changeBottomCounter();
 prevLink();
 
})

changeTopCounter();
changeBottomCounter();
nextLink();


