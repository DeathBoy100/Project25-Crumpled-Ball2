class ball{    
    constructor(x,y,r){
      var options = {
          isStatic: false,
          //friction: 0.5,
          friction: 1,
          density: 1.2,
          //restitution: 0.1,
          restitution: 0.6
      }
       this.body = Bodies.circle(x,y,r,options)
       
       this.radius = r;
       this.image = loadImage("paper.png");
       World.add(world,this.body)
    }    
    display(){
        
        //fill("yellow");
        var p = this.body.position;
        var a = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(a);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius*2, this.radius*2);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius)
        
    }
 }