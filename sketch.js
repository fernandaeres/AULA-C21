const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball,ground,rock;
var ground2,ground3,ground4;
var btn1,btn2,btn3;

function setup() {
    createCanvas(600,600);

    engine = Engine.create();
    
    world = engine.world;
    btn1 = createImg("right.png")
    btn1.size(50,50)
    btn1.position(30,30)
    btn1.mouseClicked(xforce)

    btn2 = createImg("up.png")
    btn2.size(50,50)
    btn2.position(30,80)
    btn2.mouseClicked(yforce)

    var ball_options={
        isStatic: false,
        restitution: 1.0,
        frictionAir:0.01,
        density:1
    }

    var ground_options={
        isStatic: true
    }
    var rock_options={
        restitution: 0.5,
        density: 50
    }
    //criando um corpo da pedra
    rock = Bodies.circle(250,100,50,rock_options)
    //adicionando o corpo da preda ao mundo
    World.add(world,rock)

    //criando um corpo circular
    ball = Bodies.circle(300,100,50,ball_options)
    //adicionando o corpo ao mundo
    World.add(world,ball);
    ground = new Ground(300,580,600,20)
    ground2 = new Ground(300,20,600,20)
    ground3 = new Ground(580,300,20,600)
    ground4 = new Ground(20,300,20,600)

    
}
function draw() {
  background(0)
  
  Engine.update(engine);
  ground.display()
  ground2.display()
  ground3.display()
  ground4.display()

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
  push()
  fill("blue")
  ellipse(rock.position.x,rock.position.y,50,50)
  pop()
}
function xforce() {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});    
}
function yforce() {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});    
}

