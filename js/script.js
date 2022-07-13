console.log(document.getElementById("thumbs"))

let countImg= 1; 

function displayImg(){
    document.getElementById("next-img").addEventListener("click", function(event){
        countImg++;
        if (countImg == 6) countImg = 1;
        document.getElementById("display-img").src = `img/canard-jaune-${countImg}-l.png`;
        console.log(document.getElementById("display-img").src)
    })
    
    document.getElementById("last-img").addEventListener("click", function(event){
        countImg--;
        if (countImg == 0) countImg = 5;
        document.getElementById("display-img").src = `img/canard-jaune-${countImg}-l.png`;
        console.log(document.getElementById("display-img").src)
    })
}

displayImg();

 