class Tank {
    constructor(x, y, w, h, type){
        var options = {
            'isStatic' : true,
            'friction' : 1.0,
            'density'  : 1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.width =  w;
        this.height = h;
        this.image = loadImage(type);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var ang = this.body.angle;

        // if(keyDown(UP_ARROW)){
        //     ang = this.body.angle;
        //     ang -= 5
        //     Matter.Body.setAngle(tank.body, ang);
        //     console.log(ang)
        // }
        push()
        translate(pos.x, pos.y)
        rotate(ang)
        imageMode(CENTER);
        fill(25);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}