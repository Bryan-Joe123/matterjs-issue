class box{

    constructor(x,y,width,height){
        var ground_option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,boxOption);
        World.add(world,this.body);
    }
    display(){
         var pos=this.body.position;
         rectMode(CENTER);
         rect(pos.x,pos.y,this.body.width,this.body.height);
    }

};