class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.yDir = 0;
        this.xDir = 20;
        this.snakeYpos = [];
        this.snakeXpos = [];
        this.tailCount = 1;
    }

    update(){
        this.x = this.x + this.xDir;
        this.y = this.y + this.yDir;
        if(this.snakeXpos.length>=this.tailCount){
        this.snakeXpos.shift();
        this.snakeYpos.shift();
        }
        this.snakeYpos.push(this.y);
        this.snakeXpos.push(this.x);
        
    }

    display(){
        fill("green");
        for(var i = 0; i<this.snakeYpos.length; i = i+1){
        rect(this.snakeXpos[i],this.snakeYpos[i],20,20);
        }


    }

    eat(x,y){
    if(this.x === x&& this.y===y){
        this.tailCount++;
    return true;
    }

    else{
        return false;
    }
    }

    gameOver(){
        if(this.x>400 || this.x<0 || this.y>400 || this.y<0){
            background("red")
            textSize(30)
            text("GAME OVER",170,200)
        }
    }
}