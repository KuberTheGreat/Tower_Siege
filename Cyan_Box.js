class CBox{
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:1
        }

        this.body = Bodies.rectangle(x, y, 50, 70);
        World.add(world, this.body);

        this.width = 50;
        this.height = 70;
    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        rectMode(CENTER);
        fill(120, 235, 253);
        rect(0, 0, this.width, this.height);

        pop();
    }
}