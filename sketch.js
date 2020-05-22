var snake;
var foodX,foodY;
var score = 0;



function setup() {
  createCanvas(400,400);
  snake = new Snake();
  frameRate(5);
  foodLoc();
}

function draw() {
  background("blue");
  textSize(20);
  fill("black"); 
  text("SCORE : "+ score,20,20); 
  snake.display();
  snake.update();
  fill("red")
  rect(foodX,foodY,20,20);
  if(snake.eat(foodX,foodY)){
    foodLoc();
    score = score +1
}

snake.gameOver();

}

function keyPressed(){
  if(keyCode===UP_ARROW){
    snake.yDir = -20;
    snake.xDir = 0;
  }

  if(keyCode===DOWN_ARROW){
    snake.yDir = 20;
    snake.xDir = 0;
  }

  if(keyCode===RIGHT_ARROW){
    snake.yDir = 0;
    snake.xDir = 20;
  }

  if(keyCode===LEFT_ARROW){
    snake.yDir = 0;
    snake.xDir = -20;
  }

}

function foodLoc(){
 foodX = floor(random(0,20))*20;
 foodY = floor(random(0,20))*20;
}