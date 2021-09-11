const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var weapon1;
var weapon11;
var tank, enemy;
var ground;
var score1 = 0;
var score11 = 0;
var bg1, bg2;
var weaponimg;
var weapon1ary = [], weapon2ary = [], weapon3ary = [], weapon4ary = [], weapon5ary = [], weapon6ary = [], weapon7ary = [];
var weapon11ary = [], weapon12ary = [], weapon13ary = [], weapon14ary = [], weapon15ary = [], weapon16ary = [], weapon17ary = [];
var w1Count = 0, w2Count = 0, w3Count = 0, w4Count = 0, w5Count = 0, w6Count = 0, w7Count = 0;
var w11Count = 0, w12Count = 0, w13Count = 0, w14Count = 0, w15Count = 0, w16Count = 0, w17Count = 0;
var nozzle;
var launcherX, launcherY;
var pgs = 'play';
var egs = 'play';
var restartS;

function setup() {
  createCanvas(1280,615);

  engine = Engine.create();
  world = engine.world;
  bg1 = loadImage('images/bg1.jpg')
  bg2 = loadImage('images/bg2.jpg')
  w1img  = loadImage('images/weapon1.png')
  w2img  = loadImage('images/weapon2.png')
  w3img  = loadImage('images/weapon3.png')
  w4img  = loadImage('images/weapon4.png')
  w5img  = loadImage('images/weapon5.png')
  w6img  = loadImage('images/weapon6.png')
  w7img  = loadImage('images/weapon7.png')
  w11img = loadImage('images/weapon11.png')
  w12img = loadImage('images/weapon12.png')
  w13img = loadImage('images/weapon13.png')
  w14img = loadImage('images/weapon14.png')
  w15img = loadImage('images/weapon15.png')
  w16img = loadImage('images/weapon16.png')
  w17img = loadImage('images/weapon17.png')
  rs = loadImage('images/rs.png')

  s1 = loadSound('sounds/ex1.mp3');
  s2 = loadSound('sounds/ex2.mp3');
  s3 = loadSound('sounds/ex3.mp3');
  s4 = loadSound('sounds/ex4.mp3');
  s5 = loadSound('sounds/ex5.mp3');
  s6 = loadSound('sounds/ex6.mp3');
  s7 = loadSound('sounds/ex7.mp3');
  
  tank = new Tank(200, 580, 100, 50, 'images/tank.png');
  enemy = new Tank(1080, 580, 100, 50, 'images/enemy.png');
  ground = new Ground(700, 610, 1400, 10)
  // nozzle = new Nozzle(225,570,50,10)
  restartS = createSprite(635, 375, 50, 50)
  restartS.addImage(rs)
  restartS.scale = 0.1;
  restartS.visible = false;
}

function draw() {
  background(bg1);  

  // nozzle.body.position.x = tank.body.position.x

  Engine.update(engine);

  if(pgs === 'play'){

    if(w1Count === 15 && w2Count === 10 && w3Count === 10 && w4Count === 7 && w5Count === 5 && w6Count === 3 && w7Count === 1){
      pgs = 'end'
    }
  }
 
  if(egs === 'play'){

    if(w11Count === 15 && w12Count === 10 && w13Count === 10 && w14Count === 7 && w15Count === 5 && w16Count === 3 && w17Count === 1){
      egs = 'end'
    }
  }

  if(pgs === 'end' && egs === 'end'){

    restartS.visible = true;
    
    if(score1 > score11){
      push()
      fill('white')
      textFont('Brush Script MT')
      textSize(40)
      textStyle('bold')
      stroke('Black')
      text("Player 1 Is The Winner !", 485, 115)
      pop()
    } 
    else if(score1 < score11){
      push()
      fill('white')
      textFont('Brush Script MT')
      textSize(40)
      textStyle('bold')
      stroke('Black')
      text("Player 2 Is The Winner !", 485, 115)       
      pop()
    }
     else {
      push()
      fill('white')
      textFont('Brush Script MT')
      textSize(40)
      textStyle('bold')
      stroke('Black') 
      text("Game Tied!", 585, 175)
      text("Better Luck Next Time !", 485, 145)
      pop()
    }
    
    if(mousePressedOver(restartS)){
      // console.log('working')
      pgs = 'play'
      egs = 'play'

      w1Count = 0;
      w2Count = 0;
      w3Count = 0;
      w4Count = 0;
      w5Count = 0;
      w6Count = 0;
      w7Count = 0;
      score1 = 0;
      
      w11Count = 0;
      w12Count = 0;
      w13Count = 0;
      w14Count = 0;
      w15Count = 0;
      w16Count = 0;
      w17Count = 0;
      score11 = 0;

     restartS.visible = false
    }

  }

  tank.display();
  enemy.display();
  ground.display();
  // nozzle.display();

  scoreDisplay();
  drawWeapons();
  tankControl();
  drawSprites();
}

function keyPressed() {
  // console.log('keyPressed')

  if(pgs === "play"){

    if(keyCode === 72 && w1Count < 15) /* h */ {
    
      weapon1 = new Weapon(tank.body.position.x, tank.body.position.y, w1img)
      // Matter.Body.setPosition(weapon1.body, {x: launcherX, y: launcherY})
      // console.log(launcherY)
      weapon1ary.push(weapon1);
      // console.log(weapon1)
      Body.applyForce( weapon1.body, {x: weapon1.body.position.x, y: weapon1.body.position.y}, {x: 0.024, y: - 0.004});
      w1Count = w1Count + 1;
      s1.play();
  
    } else if (keyCode === 83 && w2Count < 10) /* s */ {
  
      weapon2 = new Weapon(tank.body.position.x, tank.body.position.y, w2img)
      weapon2ary.push(weapon2);
      // console.log(weapon2)
      Body.applyForce( weapon2.body, {x: weapon2.body.position.x, y: weapon2.body.position.y}, {x: 0.024, y: - 0.004});
      w2Count = w2Count + 1;
      s2.play();

    } else if (keyCode === 75 && w3Count < 10) /* k */ {
  
      weapon3 = new Weapon(tank.body.position.x, tank.body.position.y, w3img)
      weapon3ary.push(weapon3);
      console.log(weapon3)
      Body.applyForce( weapon3.body, {x: weapon3.body.position.x, y: weapon3.body.position.y}, {x: 0.024, y: - 0.004});
      w3Count = w3Count + 1;
      s3.play();
  
    } else if (keyCode === 86 && w4Count < 7) /* v */ {
  
      weapon4 = new Weapon(tank.body.position.x, tank.body.position.y, w4img)
      weapon4ary.push(weapon4);
      console.log(weapon4)
      Body.applyForce( weapon4.body, {x: weapon4.body.position.x, y: weapon4.body.position.y}, {x: 0.024, y: - 0.004});
      w4Count = w4Count + 1;
      s4.play();
  
    } else if (keyCode === 82 && w5Count < 5) /* r */ {
  
      weapon5 = new Weapon(tank.body.position.x, tank.body.position.y, w5img)
      weapon5ary.push(weapon5);
      console.log(weapon5)
      Body.applyForce( weapon5.body, {x: weapon5.body.position.x, y: weapon5.body.position.y}, {x: 0.024, y: - 0.004});
      w5Count = w5Count + 1;
      s5.play();
  
    } else if (keyCode === 68 && w6Count < 3) /* d */ {
      
      weapon6 = new Weapon(tank.body.position.x, tank.body.position.y, w6img)
      weapon6ary.push(weapon6);
      console.log(weapon6)
      Body.applyForce( weapon6.body, {x: weapon6.body.position.x, y: weapon6.body.position.y}, {x: 0.024, y: - 0.004});
      w6Count = w6Count + 1;
      s6.play();
      
    }  else if (keyCode === 66 && w7Count < 1) /* b */ {
      
      weapon7 = new Weapon(tank.body.position.x, tank.body.position.y, w7img)
      weapon7ary.push(weapon7);
      console.log(weapon7)
      Body.applyForce( weapon7.body, {x: weapon7.body.position.x, y: weapon7.body.position.y}, {x: 0.024, y: - 0.004});
      w7Count = w7Count + 1;
      s7.play();
  
    }
  }

  if(egs === "play"){

    if(keyCode === 65 && w11Count < 15) /* a */ {
    
      weapon11 = new Weapon(enemy.body.position.x, enemy.body.position.y, w11img);
      weapon11ary.push(weapon11);
      console.log(weapon11)
      Body.applyForce( weapon11.body, {x: weapon11.body.position.x, y: weapon11.body.position.y}, {x: - 0.024, y: - 0.004});
      w11Count = w11Count + 1;
      s1.play();
  
    } else if (keyCode === 77 && w12Count < 10) /* m */ {
      
      weapon12 = new Weapon(enemy.body.position.x, enemy.body.position.y, w12img);
      weapon12ary.push(weapon12);
      console.log(weapon12)
      Body.applyForce( weapon12.body, {x: weapon12.body.position.x, y: weapon12.body.position.y}, {x: - 0.024, y: - 0.004});
      w12Count = w12Count + 1;
      s2.play();
  
    } else if (keyCode === 78 && w13Count < 10) /* n */ {
      
      weapon13 = new Weapon(enemy.body.position.x, enemy.body.position.y, w13img);
      weapon13ary.push(weapon13);
      console.log(weapon13)
      Body.applyForce( weapon13.body, {x: weapon13.body.position.x, y: weapon13.body.position.y}, {x: - 0.024, y: - 0.004});
      w13Count = w13Count + 1;
      s3.play();
  
    } else if (keyCode === 73 && w14Count < 7) /* i */ {
      
      weapon14 = new Weapon(enemy.body.position.x, enemy.body.position.y, w14img);
      weapon14ary.push(weapon14);
      console.log(weapon14)
      Body.applyForce( weapon14.body, {x: weapon14.body.position.x, y: weapon14.body.position.y}, {x: - 0.024, y: - 0.004});
      w14Count = w14Count + 1;
      s4.play();
  
    } else if (keyCode === 85 && w15Count < 5) /* u */ {
      
      weapon15 = new Weapon(enemy.body.position.x, enemy.body.position.y, w15img);
      weapon15ary.push(weapon15);
      console.log(weapon15)
      Body.applyForce( weapon15.body, {x: weapon15.body.position.x, y: weapon15.body.position.y}, {x: - 0.024, y: - 0.004});
      w15Count = w15Count + 1;
      s5.play();
  
    } else if (keyCode === 89 && w16Count < 3) /* y */ {
      
      weapon16 = new Weapon(enemy.body.position.x, enemy.body.position.y, w16img);
      weapon16ary.push(weapon16);
      console.log(weapon16)
      Body.applyForce( weapon16.body, {x: weapon16.body.position.x, y: weapon16.body.position.y}, {x: - 0.024, y: - 0.004});
      w16Count = w16Count + 1;
      s6.play();
      
    }  else if (keyCode === 84 && w17Count < 1) /* t */ {
      
      weapon17 = new Weapon(enemy.body.position.x, enemy.body.position.y, w17img);
      weapon17ary.push(weapon17);
      console.log(weapon17)
      Body.applyForce( weapon17.body, {x: weapon17.body.position.x, y: weapon17.body.position.y}, {x: - 0.024, y: - 0.004});
      w17Count = w17Count + 1;
      s7.play();
  
    } 
  }
}

function tankControl(){

  if(keyDown(LEFT_ARROW)){
    Matter.Body.setPosition(tank.body, {x : tank.body.position.x - 10, y : tank.body.position.y})
  }

  if(keyDown(RIGHT_ARROW)){
    Matter.Body.setPosition(tank.body, {x : tank.body.position.x + 10, y : tank.body.position.y})
  }

  if(keyDown(UP_ARROW)){
    Matter.Body.setPosition(enemy.body, {x : enemy.body.position.x - 10, y : enemy.body.position.y})
  }

  if(keyDown(DOWN_ARROW)){
    Matter.Body.setPosition(enemy.body, {x : enemy.body.position.x + 10, y : enemy.body.position.y})
  }

}

function scoreDisplay(){

  if(pgs === 'play'){

  push()
  fill('white')
  textFont('Times New Roman')
  textStyle('bold')
  textSize(40)
  stroke('Black')
  text('Score : ' + Math.round(score1), 145,60);
  pop()

  push()
  fill('white')
  textFont('Times New Roman')
  textStyle('bold');
  textSize(20)
  stroke('Black')
  text('→ ← TO MOVE', 150, 285);
  pop()

  push()
  fill('white')
  textFont('Times New Roman')
  textSize(20)
  stroke('Black')

  if(w1Count < 15){
    text('"h" to launch Shot                  Weapons Left : ' + (15 - w1Count), 32, 100);
  } // else { text('No Weapon Left !', 125, 100) }
  
  if(w2Count < 10){
    text('"s" to launch Bigshot             Weapons Left : ' + (10 - w2Count), 34, 125);
  } // else { text('No Weapon Left !', 125, 125) }
  
  if(w3Count < 10){
    text('"k" to launch Fireball             Weapons Left : ' + (10 - w3Count), 30, 150);
  } // else { text('No Weapon Left !', 125, 150) }
  
  if(w4Count < 7){
    text('"v" to launch Anti Fireball     Weapons Left : ' + (7 - w4Count), 30, 175);
  } //else { text('No Weapon Left !', 125, 175) }
  
  if(w5Count < 5){
    text('"r" to launch Fireburst           Weapons Left : ' + (5 - w5Count), 34, 200);
  } //else { text('No Weapon Left !', 125, 200) }
  
  if(w6Count < 3){
    text('"d" to launch Anti Fireburst   Weapons Left : ' + (3 - w6Count), 30, 225);
  } //else { text('No Weapon Left !', 125, 225) }
  
  if(w7Count < 1){
    text('"b" to launch Missile              Weapons Left : ' + (1 - w7Count), 30, 250);
  } //else { text('No Weapon Left !', 125, 250) }

  pop()

}

  if(pgs === 'end'){

    push()
    fill('white')
    textFont('Viner Hand ITC')
    textSize(40)
    stroke('Black')
    text('Your Final Score Is ' + Math.round(score1), 30, 175)
    pop()

    push()
    fill('white')
    textFont('Viner Hand ITC')
    textSize(20)
    stroke('Black')
    text('Your All Weapons Had Finished Now ! ', 60, 225)
    pop()

  }

  if(egs === 'play'){
  
  push()
  fill('white')
  textFont('Times New Roman')
  textStyle('bold');
  textSize(40)
  stroke('Black')
  text('Score : ' + Math.round(score11), 995, 65);
  pop()

  push()
  fill('white')
  textFont('Times New Roman')
  textStyle('bold');
  textSize(20)
  stroke('Black')
  text('↑ ↓ TO MOVE', 1000, 285);
  pop()

  //enemy
  push()
  fill('white')
  textFont('Times New Roman')
  textSize(20)
  stroke('Black')

  if(w11Count < 15){
    text('"a" to launch Shot                  Weapons Left : ' + (15 - w11Count), 868, 100);
  } //else { text('No Weapon Left !', 1010, 100) }
  
  if(w12Count < 10){
    text('"m" to launch Bigshot             Weapons Left : ' + (10 - w12Count), 862, 125);
  } //else { text('No Weapon Left !', 1010, 125) }
  
  if(w13Count < 10){
    text('"n" to launch Fireball             Weapons Left : ' + (10 - w13Count), 868, 150);
  } //else { text('No Weapon Left !', 1010, 150) }
  
  if(w14Count < 7){
    text('"i" to launch Anti Fireball     Weapons Left : ' + (7 - w14Count), 871, 175);
  } //else { text('No Weapon Left !', 1010, 175) }
  
  if(w15Count < 5){
    text('"u" to launch Fireburst           Weapons Left : ' + (5 - w15Count), 866, 200);
  } //else { text('No Weapon Left !', 1010, 200) }
  
  if(w16Count < 3){
    text('"y" to launch Anti Fireburst   Weapons Left : ' + (3 - w16Count), 866, 225);
  } //else { text('No Weapon Left !', 1010, 225) }
  
  if(w17Count < 1){
    text('"t" to launch Missile              Weapons Left : ' + (1 - w17Count), 870, 250);
  } //else { text('No Weapon Left !', 1010, 250) }

  pop()
}

if(egs === 'end'){

  push()
  fill('white')
  textFont('Viner Hand ITC')
  textSize(40)
  stroke('Black')
  text('Your Final Score Is ' + Math.round(score11), 835, 175)
  pop()

  push()
  fill('white')
  textFont('Viner Hand ITC')
  textSize(20)
  stroke('Black')
  text('Your All Weapons Had Finished Now ! ', 865, 225)
  pop()

}
}

function drawWeapons(){

  for(var i = 0; i< weapon1ary.length; i++){
    weapon1ary[i].display();

      // if(weapon1ary[i]){
      // weapon1ary[i].display()
      var collision = Matter.SAT.collides(enemy.body, weapon1ary[i].body)
      // console.log(collision.collided)
      if(collision.collided)  {
        score1 = score1 + (5);
        
        weapon1ary.pop(weapon1ary[i])
        // World.remove(world, weapon1ary[i].body)
        collision = null;
      } else if(weapon1ary[i].body.speed < 1) {
        weapon1ary.pop(weapon1ary[i])
      }
  }

  for(var i = 0; i< weapon2ary.length; i++){
    weapon2ary[i].display();

     var collision = Matter.SAT.collides(enemy.body, weapon2ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (10);

        weapon2ary.pop(weapon2ary[i])
        collision = null;
      } else if(weapon2ary[i].body.speed < 1) {
        weapon2ary.pop(weapon2ary[i])
      }
  }
  
  for(var i = 0; i< weapon3ary.length; i++){
    weapon3ary[i].display();

     var collision = Matter.SAT.collides(enemy.body, weapon3ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (15);

        weapon3ary.pop(weapon3ary[i])
        collision = null;
      } else if(weapon3ary[i].body.speed < 1) {
        weapon3ary.pop(weapon3ary[i])
      }
  }
  
  for(var i = 0; i< weapon4ary.length; i++){
    weapon4ary[i].display();

     var collision = Matter.SAT.collides(enemy.body, weapon4ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (20);

        weapon4ary.pop(weapon4ary[i])
        collision = null;
      } else if(weapon4ary[i].body.speed < 1) {
        weapon4ary.pop(weapon4ary[i])
      }
  }
  
  for(var i = 0; i< weapon5ary.length; i++){
    weapon5ary[i].display();

     var collision = Matter.SAT.collides(enemy.body, weapon5ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (25);

        weapon5ary.pop(weapon5ary[i])
        collision = null;
      } else if(weapon5ary[i].body.speed < 1) {
        weapon5ary.pop(weapon5ary[i])
      }
  }
  
  for(var i = 0; i< weapon6ary.length; i++){
    weapon6ary[i].display();

     var collision = Matter.SAT.collides(enemy.body, weapon6ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (30);

        weapon6ary.pop(weapon6ary[i])
        collision = null;
      } else if(weapon6ary[i].body.speed < 1) {
        weapon6ary.pop(weapon6ary[i])
      }
  }
  
  for(var i = 0; i< weapon7ary.length; i++){
    weapon7ary[i].display();

     var collision = Matter.SAT.collides(enemy.body, weapon7ary[i].body)
      if(collision.collided)  {
        score1 = score1 + (35);

        weapon7ary.pop(weapon7ary[i])
        collision = null;
      } else if(weapon7ary[i].body.speed < 1) {
        weapon7ary.pop(weapon7ary[i])
      }
  }


  for(var i = 0; i< weapon11ary.length; i++){
    weapon11ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon11ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (5);

        weapon11ary.pop(weapon11ary[i])
        collision = null;
      } else if(weapon11ary[i].body.speed < 1) {
        weapon11ary.pop(weapon11ary[i])
      }
  }

  
  for(var i = 0; i< weapon12ary.length; i++){
    weapon12ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon12ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (10);

        weapon12ary.pop(weapon12ary[i])
        collision = null;
      } else if(weapon12ary[i].body.speed < 1) {
        weapon12ary.pop(weapon12ary[i])
      }
  }
  
  for(var i = 0; i< weapon13ary.length; i++){
    weapon13ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon13ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (15);

        weapon13ary.pop(weapon13ary[i])
        collision = null;
      } else if(weapon13ary[i].body.speed < 1) {
        weapon13ary.pop(weapon13ary[i])
      }
  }
  
  for(var i = 0; i< weapon14ary.length; i++){
    weapon14ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon14ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (20);

        weapon14ary.pop(weapon14ary[i])
        collision = null;
      } else if(weapon14ary[i].body.speed < 1) {
        weapon14ary.pop(weapon14ary[i])
      }
  }
  
  for(var i = 0; i< weapon15ary.length; i++){
    weapon15ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon15ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (25);

        weapon15ary.pop(weapon15ary[i])
        collision = null;
      } else if(weapon15ary[i].body.speed < 1) {
        weapon15ary.pop(weapon15ary[i])
      }
  }
  
  for(var i = 0; i< weapon16ary.length; i++){
    weapon16ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon16ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (30);

        weapon16ary.pop(weapon16ary[i])
        collision = null;
      } else if(weapon16ary[i].body.speed < 1) {
        weapon16ary.pop(weapon16ary[i])
      }
  }
  
  for(var i = 0; i< weapon17ary.length; i++){
    weapon17ary[i].display();

     var collision = Matter.SAT.collides(tank.body, weapon17ary[i].body)
      if(collision.collided)  {
        score11 = score11 + (35);

        weapon17ary.pop(weapon17ary[i])
        collision = null;
      } else if(weapon17ary[i].body.speed < 1) {
        weapon17ary.pop(weapon17ary[i])
      }
  }
}