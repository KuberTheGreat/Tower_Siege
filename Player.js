class Player{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.8
        }

        this.body = Bodies.circle(50, 200, 20);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);

        pop();
    }
}