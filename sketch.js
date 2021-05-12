const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1 , rubber2, rubber3 , rubber4 , rubber5 , rubber6 , rubber7;
var  stone2;
var iron1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(300,0,30,10)
    rubber2 = new Rubber(400,0,30,10) 
    rubber3 = new Rubber(200,0,30,10)
    rubber4 = new Rubber(210,0,30,10)
    rubber5 = new Rubber(220,0,30,10)
    rubber6 = new Rubber(230,0,30,10)
    rubber7= new Rubber(240,400,30,10)
    stone2 = new stone(700,0);
    iron1 = new iron(150,0,)

  
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    stone2.display();
    iron1.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();

    

    
 
}