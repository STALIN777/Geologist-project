class iron
 {
     constructor(x,y)
     {
        var options=
        {
          'restitution':0.8,
          'friction':3,
          'density':30
        }
   this.body = Bodies.rectangle(x,y,200,100,options)
   this.width = 200;
   this.height = 100;
   World.add(world,this.body);
 
     }
 display()
 {
 var pos = this.body.position;
 
 push();
 translate(pos.x, pos.y);
 strokeWeight(5);
 stroke('white')
 fill('black')
 rectMode(CENTER)
 rect(0, 0, this.width, this.height);
 pop();
 }
}

