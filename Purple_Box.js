class PBox{
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:1
        }

        this.body = Bodies.rectangle(x, y, 50, 70);
        World.add(world, this.body);

        this.width = 50;
        this.height = 70;

        this.visiblity = 255;
    }

    display(){
        if(this.body.speed < 5){
            var pos = this.body.position;

            push();

            translate(pos.x, pos.y);

            rectMode(CENTER);
            fill(219, 47, 219);
            rect(0, 0, this.width, this.height);

            pop();
        }
        else{
            World.remove(world, this.body);

            push();

            this.visiblity = this.visiblity - 5;
            tint(255, this.visiblity);

            pop();
        }
    }

    score(){
        if(this.visiblity < 0 && this.visiblity > -105){
            score++;
        }
    }
}