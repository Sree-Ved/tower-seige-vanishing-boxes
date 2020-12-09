const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var circle1, sup1, sup2, slingu;

function preload()
{
	
}

function setup() {

  createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
      isStatic: true
  }

  ground = Bodies.rectangle(300,580,600,40,ground_options);
  World.add(world,ground)

  circle1 = new Circle(350,100,20);

  sup1 = new Support(350,450,200,20);
  sup2 = new Support(450,200,200,20);

  ob1 = new OB(425,410,30,30)
  ob2 = new OB(395,410,30,30)
  ob3 = new OB(365,410,30,30)
  ob4 = new OB(335,410,30,30)
  ob5 = new OB(305,410,30,30)
  ob6 = new OB(275,410,30,30)

  ob7 = new OB(410,380,30,30)
  ob8 = new OB(380,380,30,30)
  ob9 = new OB(350,380,30,30)
  ob10 = new OB(320,380,30,30)
  ob11 = new OB(290,380,30,30)

  ob12 = new OB(395,350,30,30)
  ob13 = new OB(365,350,30,30)
  ob14 = new OB(335,350,30,30)
  ob15 = new OB(305,350,30,30)

  ob16 = new OB(380,320,30,30)
  ob17 = new OB(350,320,30,30)
  ob18 = new OB(320,320,30,30)

  ob19 = new OB(365,290,30,30)
  ob20 = new OB(335,290,30,30)

  ob21 = new OB(350,260,30,30)

  rb1 = new RB(525,160,30,30)
  rb2 = new RB(495,160,30,30)
  rb3 = new RB(465,160,30,30)
  rb4 = new RB(435,160,30,30)
  rb5 = new RB(405,160,30,30)
  rb6 = new RB(375,160,30,30)

  rb7 = new RB(510,130,30,30)
  rb8 = new RB(480,130,30,30)
  rb9 = new RB(450,130,30,30)
  rb10 = new RB(420,130,30,30)
  rb11 = new RB(390,130,30,30)

  rb12 = new RB(495,100,30,30)
  rb13 = new RB(465,100,30,30)
  rb14 = new RB(435,100,30,30)
  rb15 = new RB(405,100,30,30)
  
  rb16 = new RB(480,70,30,30)
  rb17 = new RB(450,70,30,30)
  rb18 = new RB(420,70,30,30)

  rb19 = new RB(465,40,30,30)
  rb20 = new RB(435,40,30,30)

  rb21 = new RB(450,10,30,30)
  slingu = new SlingShot(circle1.body,{x:150,y:200})

  Engine.run(engine);
  
}


function draw() {

  background("yellow");  
  rectMode(CENTER)
  fill("violet")
  rect(300,580,600,40)

  circle1.display();

  sup1.display();
  sup2.display();

  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();
  ob6.display();

  ob7.display();
  ob8.display();
  ob9.display();
  ob10.display();
  ob11.display();

  ob12.display();
  ob13.display();
  ob14.display();
  ob15.display();

  ob16.display();
  ob17.display();
  ob18.display();

  ob19.display();
  ob20.display();

  ob21.display();

  rb1.display();
  rb2.display();
  rb3.display();
  rb4.display();
  rb5.display();
  rb6.display();

  rb7.display();
  rb8.display();
  rb9.display();
  rb10.display();
  rb11.display();
  rb12.display();
  rb13.display();
  rb14.display();
  rb15.display();

  rb16.display();
  rb17.display();
  rb18.display();

  rb19.display();
  rb20.display();

  rb21.display();

  slingu.display();
  
} 
function mouseDragged(){
  Matter.Body.setPosition(circle1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingu.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingu.attach(circle1.body);
  }
}

