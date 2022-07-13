const displayImg = document.getElementById("display-img"); 

// DISPLAY IMG ON MOBILE //
let countImg= 1; 

function displayLNImg(){
    document.getElementById("next-img").addEventListener("click", function(event){
        countImg++;
        if (countImg == 6) countImg = 1;
        displayImg.src = `img/canard-jaune-${countImg}-l.png`;
        console.log(displayImg.src)
    })
    
    document.getElementById("last-img").addEventListener("click", function(event){
        countImg--;
        if (countImg == 0) countImg = 5;
        displayImg.src = `img/canard-jaune-${countImg}-l.png`;
        console.log(displayImg.src)
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