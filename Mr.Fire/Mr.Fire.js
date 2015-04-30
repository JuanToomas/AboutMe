var playerX = 0;
var playerY = 0;
var arrows = [];
var points = 0;
var inGame = false;
var character = {
    Name: "Mr. Fire";
    Height: "3'1";
    Gender: "Fire";
    Color: "Red";
};

//StartGame Function
document.getElementById("StartGame").addEventListener("click", startGame);
document.onkeydown = checkKey;


function startGame() {
    inGame = true;
    playerX = 0;
    playerY = -7;
    arrows = [];
    points = 0;
    window.requestAnimationFrame(update);
}
// Movement of the player

function checkKey(e) {
    e = e || window.event;
   

    //right arrow
    if(e.keyCode == '39' && playerX != 7) {
        playerX++;
    }
    //left arrow
    if(e.keyCode == '37' && playerX != -7) {
        playerX--;
    }
}

function randomArrow() {
    arrows.push([Math.floor(Math.random() * 15) - 7, 7]);
}

function update() {
    if(!inGame) return;
    if(Math.random() > 0.7) randomArrow();
    //console.log(arrowarrrows);
    var pos1 = -7;
    var pos2 = -7;
    for(i = 0; i < 225; i++) {
        document.getElementById("spot" + pos1 + pos2).innerHTML = "";
        pos1++;
        if(pos1 == 8) {
            pos1 = -7;
            pos2++;
            if(pos2 == 8) pos2 = 0;
        }
    }
    for(i = 0; i < arrows.length; i++) {
        document.getElementById("spot" + Math.floor(arrows[i][0]) + Math.floor(arrows[i][1])).innerHTML = "<div style='color:blue'><img class='arrow' src='http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/blue-jelly-icons-natural-wonders/050300-blue-jelly-icon-natural-wonders-raindrop1-sc52.png'/><div>";
        arrows[i][1] -= 0.3;
        if(arrows[i][1] < -7) {
            arrows.splice(i, 1);
            points++;
        }
        document.getElementById("PointSystem").innerHTML = points;
        if(playerX == Math.round(arrows[i][0]) && playerY == Math.round(arrows[i][1])) {
            inGame = false;
        }
        document.getElementById("spot" + playerX + playerY).innerHTML = "<div style='color:gold'><img style='width:74%' src='http://socialeyesnyc.com/wp-content/uploads/2012/04/hot-flame.png'/></div>";
    }
    window.requestAnimationFrame(update);
}