class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    
    display(){
        var bodyA = this.rope.body.position;
        var bodyB = this.rope.body.position;
        strokeweight(4);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
    }
}