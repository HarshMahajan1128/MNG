class Weapon {
    constructor(x,y, type){
        var options = {
            'isStatic' : false
        }

    this.body = Matter.Bodies.circle(x, y, 10, options);
    this.image = type;
    
    World.add(world, this.body);

    }

    display(){

        if(this.body){

        var pos = this.body.position;
        fill('white');
        // ellipseMode(RADIUS);
        imageMode(CENTER);
        // ellipse(pos.x, pos.y, 10, 10);
        image(this.image, pos.x, pos.y, 50, 50);
        // this.body.speed += 0.5;
        
        if(this.body.speed < 1){
            World.remove(world, this.body);
        }

    }
  }
}