class Block{

    constructor(x,y){
    
    var options={
        isStatic:false,
        restitution:0.8,
        density:20,
        friction:1.0
    }
    
    this.body=Bodies.rectangle(x,y,30,30,options);
    this.x=x;
    this.y=y;
    World.add(world,this.body);
    }
    
    display(){
     
        push()
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("red");
        rect(this.x,this.y,30,30);
        pop()
    }
    
    }