const displayImg = document.getElementById("display-img"); 

// DISPLAY IMG ON MOBILE //
let countImg= 1; 

function displayLNImg(){
    document.getElementById("next-img").addEventListener("click", function(event){
        countImg++;
        if (countImg == 6) countImg = 1;
        displayImg.src = `img/canard-jaune-${countImg}-l.png`;
    })
    
    document.getElementById("last-img").addEventListener("click", function(event){
        countImg--;
        if (countImg == 0) countImg = 5;
        displayImg.src = `img/canard-jaune-${countImg}-l.png`;
    })
}

displayLNImg();

 // HOVER ON DESKTOP // 
 function hoverDisplayImg(){
     const thumbs = document.getElementById("thumbs");

     thumbs.addEventListener("mouseover", function(event){
        if (!event.target.classList.contains("thumbs-img")) return;
        displayImg.src = event.target.getAttribute("src")
     })
 }

 hoverDisplayImg();

 // AJOUT PANIER // 
const ajoutPanier =  document.getElementById("add-cta"); 
const compteur = document.getElementById("cart-nb");
const quantité = document.getElementById("add-qty");

ajoutPanier.addEventListener("click", displayCountPanier);

function displayCountPanier() {
    if (quantité.value > 99) {
        compteur.innerText = "99+";
        displayColorButton()
        ajoutPanier.removeEventListener("click", displayCountPanier)
        return; 
    } 
    if (quantité.value < 1) return; 
    
    compteur.innerText = quantité.value; 
    displayColorButton()

    ajoutPanier.removeEventListener("click", displayCountPanier);
}

function displayColorButton(){
    ajoutPanier.innerText = "Déjà au panier";
    ajoutPanier.style.backgroundColor = "black";
}

// ACCORDEONS //
const avantages = document.getElementById("avantages")
const avantagesUl = document.getElementById("avantages-ul")
const caracteristics = document.getElementById("caracteristics")
const caracteristicsUl = document.getElementById("caracteristics-ul")

function accordeons(){
    avantages.addEventListener("click", function(event){
        avantagesUl.classList.toggle("hidden");
        localStorage.setItem('styleA', avantagesUl.getAttribute("class"))
        avantages.classList.toggle("closed")
        localStorage.setItem('styleArrow', avantages.getAttribute("class"))

    })
    
    caracteristics.addEventListener("click", function(event){
        caracteristicsUl.classList.toggle("hidden");
        localStorage.setItem('styleC', caracteristicsUl.getAttribute("class"))
        caracteristics.classList.toggle("closed")
        localStorage.setItem('styleArrowC', caracteristics.getAttribute("class"))
    })
}
accordeons();

// LOCALSTORAGE // 
function local(){
    avantagesUl.setAttribute("class", localStorage.getItem('styleA')),
    avantages.setAttribute("class", localStorage.getItem('styleArrow')),
    caracteristicsUl.setAttribute("class", localStorage.getItem('styleC',)),
    caracteristics.setAttribute("class", localStorage.getItem("styleArrowC"));
}

document.body.onload = local();


// CARROUSSEL // 
const buttonRight = document.getElementById("carousel_button-right");
const buttonLeft = document.getElementById("carousel_button-left");
const carouselContents = document.querySelectorAll(".carousel_slide");
document.getElementById("carousel-container")


let countCarousel = 0;
function switchCarousel(){
    buttonRight.addEventListener("click", function(event){
        countCarousel++;
        carouselContents[countCarousel-1].classList.toggle("hidden");
        carouselContents[countCarousel].classList.toggle("hidden");
        if (countCarousel === 3) buttonRight.classList.add("hidden");    
        if (countCarousel >= 1) buttonLeft.classList.remove("hidden");
    })
    
    buttonLeft.addEventListener("click", function(event){
        carouselContents[countCarousel-1].classList.toggle("hidden");
        carouselContents[countCarousel].classList.toggle("hidden");        
        countCarousel--;
        buttonRight.classList.remove("hidden")
        if (countCarousel ===0) buttonLeft.classList.add("hidden")
    });
}
switchCarousel();