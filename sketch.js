const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var baseGround,base1,base2;
var box_1_L1_1,box_1_L1_2,box_1_L1_3,box_1_L1_4,box_1_L1_5;
var box_1_L2_1,box_1_L2_1,box_1_L2_1;
var box_1_L3_1;

var box_2_L1_1,box_2_L1_2,box_2_L1_3,box_2_L1_4,box_2_L1_5;
var box_2_L2_1,box_2_L2_1,box_2_L2_1;
var box_2_L3_1;

var octagon,slingShot;

function setup() {
  createCanvas(1800,500);

  engine = Engine.create();
  world = engine.world;

// Group1
  base1 = new Ground(560+130, 320+55, 340, 20);

  box_1_L1_1 = new RedBox(560, 320, 60, 90);
  box_1_L1_2 = new RedBox(560+65, 320, 60, 90);
  box_1_L1_3 = new RedBox(560+65+65, 320, 60, 90);
  box_1_L1_4 = new RedBox(560+65+65+65, 320, 60, 90);
  box_1_L1_5 = new RedBox(560+65+65+65+65, 320, 60, 90);

  box_1_L2_1 = new GreenBox(560+65, 320-90, 60, 90);
  box_1_L2_2 = new GreenBox(560+65+65, 320-90, 60, 90);
  box_1_L2_3 = new GreenBox(560+65+65+65, 320-90, 60, 90);

  box_1_L3_1 = new BlueBox(560+65+65, 320-90-90, 60, 90);

// Group2
  base2 = new Ground(1200+130, 255+55, 340, 20);

  box_2_L1_1 = new RedBox(1200, 255, 60, 90);
  box_2_L1_2 = new RedBox(1200+65, 255, 60, 90);
  box_2_L1_3 = new RedBox(1200+65+65, 255, 60, 90);
  box_2_L1_4 = new RedBox(1200+65+65+65, 255, 60, 90);
  box_2_L1_5 = new RedBox(1200+65+65+65+65, 255, 60, 90);

  box_2_L2_1 = new GreenBox(1200+65, 255-90, 60, 90);
  box_2_L2_2 = new GreenBox(1200+65+65, 255-90, 60, 90);
  box_2_L2_3 = new GreenBox(1200+65+65+65, 255-90, 60, 90);

  box_2_L3_1 = new BlueBox(1200+65+65, 255-90-90, 60, 90);

  octagon = new Octagon(300, 255, 35);

  slingShot = new SlingShot(octagon.body,{x:300,y:255});
}

function draw() {
  background(0);
  Engine.update(engine);

  base1.display();
  
  fill(255,0,0);
  box_1_L1_1.display();
  box_1_L1_2.display();
  box_1_L1_3.display();
  box_1_L1_4.display();
  box_1_L1_5.display();

  fill(0,255,0);
  box_1_L2_1.display();
  box_1_L2_2.display();
  box_1_L2_3.display();

  fill(0,0,255);
  box_1_L3_1.display();

  base2.display();

  fill(255,0,0);
  box_2_L1_1.display();
  box_2_L1_2.display();
  box_2_L1_3.display();
  box_2_L1_4.display();
  box_2_L1_5.display();

  fill(0,255,0);
  box_2_L2_1.display();
  box_2_L2_2.display();
  box_2_L2_3.display();

  fill(0,0,255);
  box_2_L3_1.display();

  slingShot.display();
  octagon.display();
  
  drawSprites();

  strokeWeight(0);
  fill(227.5);
  textSize(30);
  text("Drag and Release the Octagon to Play", 700, 50);
  text("Press space for another chance", 1300, 450);
}

function mouseDragged(){
  Body.setPosition(octagon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly()
}
function keyPressed(){
  if (keyCode===32) {
    slingShot.attach(octagon.body);
  }
}