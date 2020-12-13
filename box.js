class boxes{

  constructor(x,y,width,height){
      var box_option={
          restitution:1,
          isStatic:false
      }
      this.body=Bodies.rectangle(x,y,width,height,box_option);
      World.add(world,this.body);
  }
  display(){
       var pos=this.body.position;
       rectMode(CENTER);
       rect(pos.x,pos.y,this.body.width,this.body.height);
  }

};