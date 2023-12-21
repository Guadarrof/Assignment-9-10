let span=document.getElementById("playerName");
let divCollection=document.getElementsByTagName("div");
let presentarBtn=document.getElementById("btnPresentar");
let player

presentarBtn.addEventListener("click", userPrompt);

function userPrompt(){
    player=prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    if (player){
        characterName();
        presentado();
        presentarBtn.style= "display:none";
    }
}

function characterName(){
    switch(player){
        case "Mario":
            span.innerText="Mario"
        break;
        case "Luigi":
            span.innerText="Luigi"
        break;
        case "Bowser":
            span.innerText="Bowser Morton Koopa"
        break;
        case "Peach":
            span.innerText="Princesa Peach Toadstool"
        break;
        case "Yoshi":
            span.innerText="T. Yoshisaur Munchakoopas"
        break;
        case "Toad":
            span.innerText="Toad"
        break;
        case "Toadette":
            span.innerText="Toadette"
        break;
        case "Daisy":
            span.innerText="Princesa Daisy"
        break;
        default:
            span.innerText="Desconocido"

    }
}

function presentado(){
    for (let i = 0; i < divCollection.length; i++) {
        let divId=divCollection[i].id
        if(player.toLowerCase()===divId){
            divCollection[i].setAttribute("title", "Presentado");
        }   
    }
}