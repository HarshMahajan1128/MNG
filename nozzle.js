/* class Nozzle {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
       }
        this.body = Bodies.rectangle(x,y,width,height,options)
  
        World.add(world, this.body);
        this.width = width;
        this.height = height;
  
      };
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
  
        if(keyIsDown(UP_ARROW) && angle > -45){
          angle -=5
          Matter.Body.setAngle( nozzle.body, angle);
        }
        if(keyIsDown(DOWN_ARROW) && angle < 15){
          angle +=5
          Matter.Body.setAngle( nozzle.body, angle);
        }
  
        launcherX = pos.x + ((this.height) * cos(angle))
        launcherY = pos.y - ((this.height) * sin(angle))
        console.log(angle)
  
        // if(keyIsDown(DOWN_ARROW)){
        //     Matter.Body.setPosition(canonBall.body, {x: launcherX -100 , y: launcherY +100})
        // }
  
        // if(keyIsDown(DOWN_ARROW) && angle >= -0.050){
        //   Matter.Body.setPosition(canonBall.body,{x:launcherX -100 ,y:launcherY})
        // }
  
        // if(keyIsDown(DOWN_ARROW) && angle <= -1.40){
        //   Matter.Body.setPosition(canonBall.body,{x:launcherX  ,y:launcherY + 100})
        // }
        // Matter.Body.setPosition(canonBall.body,{x:launcherX,y:launcherY})
  
        push();
        translate(pos.x, pos.y);
        fill('red')
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
        // arc(70, height-65, 90, 100, PI , TWO_PI);
        // rect(20,height-65,100,20);
        // rect(20,height-45,100,20);
  
  
      };
  }

  */