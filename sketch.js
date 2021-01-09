var b1,b2,b3,b4;
var box;

var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    b1 = createSprite(100,580,180,30);
    b1.shapeColor = "blue";
    
    b2 = createSprite(300,580,180,30);
    b2.shapeColor = rgb(255,131,0);
    
    b3 = createSprite(500,580,180,30);
    b3.shapeColor = rgb(255,0,127);
    
    b4 = createSprite(700,580,180,30);
    b4.shapeColor = "green";
    
    box = createSprite((random(20,750)),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
   edge = createEdgeSprites();
   box.bounceOff(edge);

   bounceOff(box,b1);
   bounceOff(box,b2);
   bounceOff(box,b3);
   bounceOff(box,b4);


    drawSprites();
}
function bounceOff(box,ob2){
    if(ob2.isTouching(box) && box.bounceOff(ob2)
    ){box.shapeColor = ob2.shapeColor ;

    }
}
