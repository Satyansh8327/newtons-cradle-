class Bob{
    constructor(x,y){
      var options ={
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.bob=Bodies.circle(x,y,25,options);
      this.radius=25

      World.add(world,this.bob)

    }
    display(){
        var pos = this.bob.position
        var angle=this.bob.position
        
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius*2,this.radius*2)
        pop();
    }

}
