class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA:body1,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }

        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
            var pos = this.rope.bodyA.position;
            var point = this.pointB;

            strokeWeight(3);
            line(pos.x, pos.y, point.x, point.y);      
        }  
    }

    fly(){
        this.rope.bodyA = null;
    }
}