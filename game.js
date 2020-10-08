var character = document.getElementById("dino");
var deadcharacter = document.getElementById("skeleton");
var bullet = document.getElementById("block");
function jump(){
    if(dino.classList != "animate"){
        dino.classList.add("animate");
    }
    setTimeout(function(){
        dino.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var bulletLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(bulletLeft<20 && bulletLeft>0 && characterTop>=130){
        dino.style.display = "none";
        dino.style.animation = "none";
        skeleton.style.display = 'block';
        skeleton.style.animation = 'block';
        alert("GAME OVER");
    }
},10);
