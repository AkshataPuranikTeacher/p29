class Box {
    constructor(x, y, color) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 25,30, options);
      this.width =25;
      this.height = 30;
      this.color = color
      
      World.add(world, this.body );
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     // strokeWeight(4);
      //stroke("green");
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  