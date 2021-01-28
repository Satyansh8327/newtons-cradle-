class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX,y:offsetY},
            stiffness:1.2,
            length:250
            
        }
       this.pointB={x:offsetX,y:offsetY}
       this.rope=Constraint.create(options)

       World.add(world,this.rope)
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position
            var pointB=this.pointB
            push ()
            stroke(48,28,8)
            strokeWeight(3)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
            pop ()
        }
    }
}