var Ball, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";
  locnode = database.ref("ball/position");
  locnode.on("value",readposition,showError);

  
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}
function readposition(data){
  position = data.val();
  Ball.x = position.x
  Ball.y = position.y
}

function writePosition(x,y){
  database.ref("ball/position").set({
    "x":Ball.x + x,
    "y":Ball.y + y
})
}
function showError(){
  console.log("Error");
}

