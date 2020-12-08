class box{    
    constructor(x,y,w,h,z){
      var options = {
          isStatic: true
      }
       this.body = Bodies.rectangle(x,y,w,h,options)
       World.add(world,this.body)
       this.width = w 
       this.height = h
       if (z===3){
        this.image = loadImage("dustbingreen.png");
       }
    }    
    display(x){
        var p = this.body.position
        var a = this.body.angle
        push()
        //rectMode(CENTER)
        translate(p.x,p.y)
        rotate(a)
        //stroke("red")
        //fill("red")
       // rect(0,0,this.width,this.height)
        if (x === 3){
            imageMode(CENTER);
            image(this.image,0, 0, this.width, this.height*6);
        }
        pop()
    }
   }