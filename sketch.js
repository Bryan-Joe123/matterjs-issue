// class boxes{

//   constructor(x,y,width,height){
//       var box_option={
//           restitution:1,
//           isStatic:false
//       }
//       this.body=Bodies.rectangle(x,y,width,height,box_option);
//       World.add(world,this.body);
//   }
//   display(){
//        var pos=this.body.position;
//        rectMode(CENTER);
//        rect(pos.x,pos.y,this.body.width,this.body.height);
//   }

// };

class ground{

  constructor(x,y,width,height){
      var ground_option={
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,ground_option);
      World.add(world,this.body);
  }
  display(){
       var pos=this.body.position;
       rectMode(CENTER);
       rect(pos.x,pos.y,this.body.width,this.body.height);
  }

};

const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine, ball, world;
var box1,box2;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=Engine.world;
  ground1=new ground(200,380,width/2,10);
  // box1=new boxes(200,200,50,50);
  // box2=new boxes(200,300,50,50);
  
  // var ground_option = {
  //   isStatic:true
  // }

  // var ball_option={
  //   restitution:1.0,
  //   isStatic:false
  // }

  // ground=Bodies.rectangle(200,380,width,10,ground_option);
  // ball=Bodies.circle(200,100,20);

  // World.add(world,ground);
  // World.add(world,ball);

  // // console.log(world,ground);
  // // console.log(world,ball);
}

function draw() {
  background("yellow");
  Engine.update(engine);
  ground1.display();

  // box1.display();
  // box2.display();

  // //Ball
  // ellipseMode(RADIUS);
  // ellipse(ball.position.x,ball.position.y,20,20);

  // //Ground
  // rectMode(CENTER);
  // rect(ground.position.x,ground.position.y,width,10);
}