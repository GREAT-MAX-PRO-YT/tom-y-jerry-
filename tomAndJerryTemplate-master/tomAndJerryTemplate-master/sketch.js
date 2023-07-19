
function preload() {
    catimg = loadAnimation ("images/cat1.png", "images/cat2.png", "images/cat3.png","images/cat4.png") 
   mouseimg = loadAnimation ("images/mouse1.png", "images/mouse2.png", "images/mouse3.png", "images/mouse4.png")
   gardenimg = loadImage ("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite (200, 200)
    garden.addImage ("tom", gardenimg)
    garden.scale = 0.2

    tom = createSprite (900, 200)
    tom.addAnimation ("tom", catimg)
    tom.scale = 0.2

    jerry = createSprite (400, 200)
    jerry.addAnimation ("jerry", mouseimg)
    jerry.scale = 0.2
}

function draw() {

    background(255);
    if (tom.isTouching(jerry)){tom.destroy()}

    drawSprites();
}


function keyPressed(){

  
if (keyCode == LEFT_ARROW){
    tom.velocityX = - 5
}

}
