const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2;
var bird;
var bar;
var img
function preload(){
    img=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(775,650,25,50);
    box2 = new Box(925,650,25,50);
    box3 = new Stand(850,590,225,15);
    ground = new Ground(700,height,70000,20)
    ground2 = new Ground(200,700,500,500)
    pig1 = new Pig(850,670,50,50)
    bird = new Bird(200,500,50,50)
    //bar= new Barrier(848,590,225,5)
    pig2=new Pig(850,550,50,50)
    box4 = new Box(925,550,25,50);
    box5 = new Box(775,550,25,50);
    box6 = new Stand(850,490,225,15);
    log1=new Log(800,415,100,PI/4)
    log2=new Log(850,415,100,-PI/4)
    
}

function draw(){
    background(img);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    //bar.display();
    box1.display();
    
    box2.display();
    box3.display();
    ground.display();
    ground2.display();
    pig1.display();
    bird.display();
    pig2.display();
    box4.display();
    box5.display();
    box6.display();
    log1.display();
    log2.display();
}